import { Button } from "@/components/ui/button";
import { Check, PlayCircle, ListTodo, Calendar, Zap, Rocket } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

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
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href="#features"
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
              >
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Log in</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--background)),transparent)]"></div>
          </div>

          <div className="container py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
              Streamline Your Workflow,
              <br />
              Master Your Tasks with <span className="text-accent">Ease</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              An intuitive and powerful solution to manage your daily tasks, boost productivity, and never miss a deadline again.
            </p>
            <div className="flex gap-4 justify-center">
               <Button variant="outline" size="lg">
                 <PlayCircle className="mr-2 h-5 w-5" />
                 How it works
               </Button>
               <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/dashboard">Get Started for Free</Link>
               </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container py-12 md:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    All-in-one task management
                </h2>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A complete suite of tools to help you organize, track, and accomplish your goals efficiently.
                </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 text-center">
                  <Check className="h-8 w-8 mx-auto text-accent" />
                  <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Intuitive Interface</h3>
                      <p className="text-muted-foreground">Clean, simple, and easy to navigate.</p>
                  </div>
              </div>
              <div className="grid gap-4 text-center">
                  <Zap className="h-8 w-8 mx-auto text-accent" />
                  <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Smart Prioritization</h3>
                      <p className="text-muted-foreground">Focus on what matters most with intelligent sorting.</p>
                  </div>
              </div>
              <div className="grid gap-4 text-center">
                  <UsersIcon className="h-8 w-8 mx-auto text-accent" />
                  <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Collaboration</h3>
                      <p className="text-muted-foreground">Work seamlessly with your team in one place.</p>
                  </div>
              </div>
          </div>
      </section>
      </main>
      <footer className="border-t">
        <div className="container py-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                        <ListTodo className="h-6 w-6 text-accent" />
                        TaskMaster
                    </Link>
                    <p className="text-sm text-muted-foreground">The best way to manage your tasks.</p>
                </div>
                <div className="grid gap-2 text-sm">
                    <h3 className="font-semibold">Product</h3>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Features</Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Pricing</Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Integrations</Link>
                </div>
                <div className="grid gap-2 text-sm">
                    <h3 className="font-semibold">Company</h3>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>About Us</Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Careers</Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Contact</Link>
                </div>
                <div className="grid gap-2 text-sm">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Terms of Service</Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Privacy Policy</Link>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between border-t pt-6">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        <TwitterIcon className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        <GithubIcon className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-2.1 2.1c-.2.2-.3.4-.3.5s0 .2.1.3c.1.1.2.2.3.2s.2.1.3.1c.1 0 .2 0 .3-.1.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3s.2-.2.-3-3.4-3-3.4-3-3.4" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
