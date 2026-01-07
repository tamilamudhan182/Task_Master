"use client";

import type { Task } from "@/lib/types";
import TaskItem from "./task-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newValues: { description: string; dueDate: Date | null }) => void;
}

export default function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
  onUpdate,
}: TaskListProps) {
  // Filter out tasks without a createdAt timestamp before sorting
  const sortedTasks = tasks
    .filter((task) => task.createdAt)
    .sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
    
  const activeTasks = sortedTasks.filter((task) => !task.completed);
  const completedTasks = sortedTasks.filter((task) => task.completed);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold font-headline tracking-tight">
          Active Tasks
        </h2>
        {activeTasks.length > 0 ? (
          <div className="space-y-3">
            {activeTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 px-4 border-2 border-dashed rounded-lg">
            <CheckCircle2 className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-2 text-sm font-medium text-foreground">
              All tasks completed!
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              You have no active tasks. Add a new one to get started.
            </p>
          </div>
        )}
      </div>

      {completedTasks.length > 0 && (
        <Accordion type="single" collapsible>
          <AccordionItem value="completed-tasks">
            <AccordionTrigger className="text-xl font-semibold font-headline">
              Completed ({completedTasks.length})
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-4">
                {completedTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
