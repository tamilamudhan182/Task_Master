
'use client';

import { Button } from "@/components/ui/button";
import { PlayCircle, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { UserNav } from "@/components/user-nav";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const DiamondIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.45 2.23 6.2 8.48a2.5 2.5 0 0 0 0 3.54l5.22 5.22a2.5 2.5 0 0 0 3.54 0l6.25-6.25a2.5 2.5 0 0 0 0-3.54L15.99 2.23a2.5 2.5 0 0 0-3.54 0Z" />
    </svg>
  );

export default function LandingPage() {

  const howItWorksImage1 = PlaceHolderImages.find(p => p.id === 'how-it-works-1');
  const howItWorksImage2 = PlaceHolderImages.find(p => p.id === 'how-it-works-2');
  const howItWorksImage3 = PlaceHolderImages.find(p => p.id === 'how-it-works-3');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <DiamondIcon className="h-6 w-6" />
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
            <UserNav />
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
               <Button variant="outline" size="lg" asChild>
                 <Link href="#how-it-works" onClick={handleScroll}>
                    <PlayCircle className="mr-2 h-5 w-5" />
                    How it works
                 </Link>
               </Button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="container text-center">
            <Badge variant="outline" className="mb-4 bg-accent/10 border-accent/20 text-accent">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Make Your Device Manage Everything For You!
            </h2>
            <div className="relative">
              {/* Wavy line background */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                    <path d="M0,50 Q250,0 500,50 T1000,50" stroke="hsl(var(--border))" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                </svg>
              </div>

              <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="mb-8 z-10 relative">
                    <div className="bg-background p-2 inline-block">
                        <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary">STEP - 01</Badge>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent z-[-1]"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Download App</h3>
                  <p className="text-muted-foreground mb-6">Download App either for Windows, Mac or Android</p>
                  {howItWorksImage1 && (
                    <Image
                      src={howItWorksImage1.imageUrl}
                      alt={howItWorksImage1.description}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                      data-ai-hint={howItWorksImage1.imageHint}
                    />
                  )}
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center lg:mt-24">
                   <div className="mb-8 z-10 relative">
                     <div className="bg-background p-2 inline-block">
                        <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary">STEP - 02</Badge>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent z-[-1]"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                  <p className="text-muted-foreground mb-6">Sign up free for App account. One account for all devices.</p>
                  {howItWorksImage2 && (
                    <Image
                      src={howItWorksImage2.imageUrl}
                      alt={howItWorksImage2.description}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                      data-ai-hint={howItWorksImage2.imageHint}
                    />
                  )}
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                   <div className="mb-8 z-10 relative">
                     <div className="bg-background p-2 inline-block">
                        <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary">STEP - 03</Badge>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent z-[-1]"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Install App, & Enjoy</h3>
                  <p className="text-muted-foreground mb-6">Get most amazing app experience, Explore and share the app</p>
                  {howItWorksImage3 && (
                    <Image
                      src={howItWorksImage3.imageUrl}
                      alt={howItWorksImage3.description}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                      data-ai-hint={howItWorksImage3.imageHint}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
