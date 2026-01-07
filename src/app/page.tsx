import { Button } from "@/components/ui/button";
import { PlayCircle, ListTodo, Zap } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <ListTodo className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg">TaskMaster</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href="/dashboard"
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                Dashboard
              </Link>
            </nav>
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/dashboard">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="container py-24 md:py-40 text-center">
            <Badge variant="outline" className="mb-6 bg-accent/10 border-accent/20 text-accent">
              <Zap className="mr-2 h-4 w-4" />
              We're live! Check out the new dashboard.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
              Effortless Task Management for Everyone
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              TaskMaster helps you stay organized and productive. Manage your daily
              tasks with a simple and intuitive interface designed for modern teams.
            </p>
            <div className="flex gap-4 justify-center">
               <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/dashboard">Get Started</Link>
               </Button>
               <Button variant="outline" size="lg">
                 <PlayCircle className="mr-2 h-5 w-5" />
                 How it works
               </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
