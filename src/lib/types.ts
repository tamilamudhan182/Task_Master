import type { Timestamp } from "firebase/firestore";

export type Task = {
  id: string;
  description: string;
  dueDate: Timestamp | null;
  completed: boolean;
  createdAt: Timestamp;
};
