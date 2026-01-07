"use client";

import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";
import { AuthForm } from "./auth-form";

export function UserNav() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const handleSignOut = () => {
    signOut(auth);
  };

  const openAuthDialog = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthDialogOpen(true);
  };

  if (isUserLoading) {
    return <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />;
  }

  if (!user) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => openAuthDialog("login")}>Login</Button>
          <Button onClick={() => openAuthDialog("signup")} className="bg-accent hover:bg-accent/90 text-accent-foreground">Sign Up</Button>
        </div>
        <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{authMode === 'login' ? 'Log In' : 'Create an account'}</DialogTitle>
              <DialogDescription>
                {authMode === 'login' 
                  ? 'Enter your credentials to access your account.'
                  : 'Enter your email and password to sign up.'}
              </DialogDescription>
            </DialogHeader>
            <AuthForm
              mode={authMode}
              onSuccess={() => setIsAuthDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name && user.isAnonymous) return 'AN';
    if (!name) return 'TM';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user.photoURL ?? ""}
              alt={user.displayName ?? "User"}
            />
            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.displayName || (user.isAnonymous ? "Anonymous User" : "User")}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email || (user.isAnonymous ? 'anonymous' : '')}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
