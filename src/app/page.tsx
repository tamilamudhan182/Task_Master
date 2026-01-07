import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, CalendarClock, Layers, ListTodo } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <ListTodo className="h-6 w-6 mr-2" />
            <h1 className="text-2xl font-bold font-headline">TaskMaster</h1>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--background)),transparent)]"></div>
          </div>

          <div className="container py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Organize Your Life, One Task at a Time
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              TaskMaster is a simple yet powerful task management app designed
              to help you stay organized and productive. Keep track of your
              to-dos, set due dates, and manage your workflow with ease.
            </p>
            <Link href="/dashboard">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ListTodo className="size-8" />
                </div>
                <CardTitle>Intuitive Task Management</CardTitle>
              </CardHeader>
              <CardDescription>
                Easily add, edit, and delete tasks with a clean, user-friendly
                interface.
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CalendarClock className="size-8" />
                </div>
                <CardTitle>Due Date Tracking</CardTitle>
              </CardHeader>
              <CardDescription>
                Assign due dates to your tasks to stay on top of your
                deadlines.
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Layers className="size-8" />
                </div>
                <CardTitle>Task Prioritization</CardTitle>
              </CardHeader>
              <CardDescription>
                Organize your tasks into active and completed lists to focus on
                what matters most.
              </CardDescription>
            </Card>
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
