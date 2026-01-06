import { ThemeToggle } from "@/components/theme-toggle";
import TaskMaster from "@/components/tasks/task-master";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <h1 className="text-2xl font-bold font-headline">TaskMaster</h1>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8 md:py-12">
        <TaskMaster />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            A clean, list-based layout to facilitate task management.
          </p>
        </div>
      </footer>
    </div>
  );
}
