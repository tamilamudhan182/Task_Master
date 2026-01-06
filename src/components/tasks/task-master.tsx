"use client";

import { useState } from "react";
import type { Task } from "@/lib/types";
import TaskForm from "./task-form";
import TaskList from "./task-list";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const initialTasks: Task[] = [
  {
    id: "1",
    text: "Design the new landing page",
    dueDate: new Date(),
    completed: false,
  },
  {
    id: "2",
    text: "Develop the authentication flow",
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    completed: false,
  },
  {
    id: "3",
    text: "Write end-to-end tests for the checkout process",
    dueDate: null,
    completed: false,
  },
  {
    id: "4",
    text: "Deploy the staging environment",
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    completed: true,
  },
  {
    id: "5",
    text: "Review pull requests",
    dueDate: new Date(),
    completed: true,
  },
];

export default function TaskMaster() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const { toast } = useToast();

  const handleAddTask = (values: { text: string; dueDate: Date | null }) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: values.text,
      dueDate: values.dueDate,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    toast({
      title: "Task Added",
      description: `"${values.text}" has been added to your list.`,
    });
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setTasks(tasks.filter((task) => task.id !== id));
    if (taskToDelete) {
      toast({
        title: "Task Deleted",
        description: `"${taskToDelete.text}" has been removed.`,
        variant: "destructive",
      });
    }
  };

  const handleUpdateTask = (
    id: string,
    newValues: { text: string; dueDate: Date | null }
  ) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...newValues } : task))
    );
    toast({
      title: "Task Updated",
      description: `Your task has been successfully updated.`,
    });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <TaskForm onAddTask={handleAddTask} />
        </CardContent>
      </Card>
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}
