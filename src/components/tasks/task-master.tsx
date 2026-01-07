'use client';

import { useEffect } from 'react';
import type { Task } from '@/lib/types';
import TaskForm from './task-form';
import TaskList from './task-list';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import {
  useFirestore,
  useUser,
  useMemoFirebase,
  useCollection,
  useAuth,
  setDocumentNonBlocking,
  updateDocumentNonBlocking,
  deleteDocumentNonBlocking,
} from '@/firebase';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { collection, doc, serverTimestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid';

export default function TaskMaster() {
  const { toast } = useToast();
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (!isUserLoading && !user) {
      initiateAnonymousSignIn(auth);
    }
  }, [isUserLoading, user, auth]);

  const tasksCollection = useMemoFirebase(() => {
    if (!user) return null;
    return collection(firestore, 'users', user.uid, 'tasks');
  }, [firestore, user]);

  const { data: tasks, isLoading } = useCollection<Task>(tasksCollection);

  const handleAddTask = (values: { text: string; dueDate: Date | null }) => {
    if (!user) return;

    const newTaskId = nanoid();
    const taskRef = doc(firestore, 'users', user.uid, 'tasks', newTaskId);

    const newTask = {
      id: newTaskId,
      description: values.text,
      dueDate: values.dueDate,
      completed: false,
      createdAt: serverTimestamp(),
    };
    setDocumentNonBlocking(taskRef, newTask, {});

    toast({
      title: 'Task Added',
      description: `"${values.text}" has been added to your list.`,
    });
  };

  const handleToggleComplete = (id: string, completed: boolean) => {
    if (!user) return;
    const taskRef = doc(firestore, 'users', user.uid, 'tasks', id);
    updateDocumentNonBlocking(taskRef, { completed });
  };

  const handleDeleteTask = (id: string) => {
    if (!user) return;
    const taskToDelete = tasks?.find(task => task.id === id);
    if (taskToDelete) {
      const taskRef = doc(firestore, 'users', user.uid, 'tasks', id);
      deleteDocumentNonBlocking(taskRef);
      toast({
        title: 'Task Deleted',
        description: `"${taskToDelete.description}" has been removed.`,
        variant: 'destructive',
      });
    }
  };

  const handleUpdateTask = (
    id: string,
    newValues: { description: string; dueDate: Date | null }
  ) => {
    if (!user) return;
    const taskRef = doc(firestore, 'users', user.uid, 'tasks', id);
    updateDocumentNonBlocking(taskRef, newValues);
    toast({
      title: 'Task Updated',
      description: `Your task has been successfully updated.`,
    });
  };

  if (isUserLoading || isLoading) {
    return (
      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
              <div className="h-10 w-24 bg-muted rounded"></div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-3">
          <div className="animate-pulse flex items-center space-x-4 p-4 border rounded-lg">
            <div className="h-6 w-6 bg-muted rounded-sm"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-3 bg-muted rounded w-1/4"></div>
            </div>
          </div>
          <div className="animate-pulse flex items-center space-x-4 p-4 border rounded-lg">
            <div className="h-6 w-6 bg-muted rounded-sm"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <TaskForm onAddTask={handleAddTask} />
        </CardContent>
      </Card>
      <TaskList
        tasks={tasks ?? []}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}