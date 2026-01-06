"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  text: z.string().min(1, { message: "Task description cannot be empty." }),
  dueDate: z.date().nullable(),
});

type TaskFormValues = z.infer<typeof formSchema>;

interface TaskFormProps {
  onAddTask: (values: TaskFormValues) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      dueDate: null,
    },
  });

  function onSubmit(values: TaskFormValues) {
    onAddTask(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="flex-grow w-full">
                <FormControl>
                  <Input placeholder="What needs to be done?" {...field} />
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
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a due date</span>
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
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full sm:w-auto">
            <Plus className="mr-2" />
            Add Task
          </Button>
        </div>
      </form>
    </Form>
  );
}
