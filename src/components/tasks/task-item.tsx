"use client";

import type { Task } from "@/lib/types";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Pencil, Trash2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newValues: { text: string; dueDate: Date | null }) => void;
}

const formSchema = z.object({
  text: z.string().min(1, { message: "Task description cannot be empty." }),
  dueDate: z.date().nullable(),
});

type FormValues = z.infer<typeof formSchema>;

export default function TaskItem({
  task,
  onToggleComplete,
  onDelete,
  onUpdate,
}: TaskItemProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: task.text,
      dueDate: task.dueDate,
    },
  });

  const onSubmit = (values: FormValues) => {
    onUpdate(task.id, values);
    setIsEditDialogOpen(false);
  };

  return (
    <Card
      className={cn(
        "transition-all duration-300",
        task.completed ? "bg-muted/50" : ""
      )}
    >
      <CardContent className="p-4 flex items-center gap-4">
        <Checkbox
          id={`task-${task.id}`}
          checked={task.completed}
          onCheckedChange={() => onToggleComplete(task.id)}
          aria-label={`Mark task "${task.text}" as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />
        <div className="flex-grow grid gap-1">
          <label
            htmlFor={`task-${task.id}`}
            className={cn(
              "font-medium cursor-pointer",
              task.completed && "line-through text-muted-foreground"
            )}
          >
            {task.text}
          </label>
          {task.dueDate && (
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <CalendarIcon className="size-4" />
              {format(task.dueDate, "MMM d, yyyy")}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              form.reset({ text: task.text, dueDate: task.dueDate });
              setIsEditDialogOpen(true);
            }}
          >
            <Pencil className="size-4" />
            <span className="sr-only">Edit Task</span>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                <Trash2 className="size-4" />
                <span className="sr-only">Delete Task</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete this task.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(task.id)}
                  className={cn(
                    buttonVariants({ variant: "destructive" }),
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  )}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

// buttonVariants is not exported from button.tsx by default
// so we define it here for use in AlertDialogAction
import { cva } from "class-variance-authority";
const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);
