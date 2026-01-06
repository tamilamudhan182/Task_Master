import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
      <main className="flex-1">
        <section className="container py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
            Organize Your Life, One Task at a Time
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            TaskMaster is a simple yet powerful task management app designed to help you stay organized and productive. Keep track of your to-dos, set due dates, and manage your workflow with ease.
          </p>
          <Link href="/dashboard">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
        </section>

        <section className="container py-16 md:py-24 bg-secondary rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="size-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Intuitive Task Management</h3>
              <p className="text-muted-foreground">
                Easily add, edit, and delete tasks with a clean, user-friendly interface.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="size-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Due Date Tracking</h3>
              <p className="text-muted-foreground">
                Assign due dates to your tasks to stay on top of your deadlines.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="size-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Task Prioritization</h3>
              <p className="text-muted-foreground">
                Organize your tasks into active and completed lists to focus on what matters most.
              </p>
            </div>
          </div>
        </section>
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
