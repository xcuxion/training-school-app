// File: components/navbar.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, MessageCircle, Plus, MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2">
            <MenuIcon className="h-5 w-5" />
          </Button>
          
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-lg font-bold hidden md:block">TechPreneur</span>
          </Link>
          
          <div className="hidden md:flex items-center ml-6 space-x-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">Dashboard</Button>
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">Projects</Button>
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">Courses</Button>
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">Community</Button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <Input 
              type="search" 
              placeholder="Search" 
              className="pl-8 bg-zinc-800 border-zinc-700 focus:border-zinc-600 text-zinc-200 placeholder:text-zinc-500 w-full"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
            <MessageCircle className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
            <Plus className="h-5 w-5" />
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarImage src="/profile-pic.jpg" alt="Alex Chen" />
            <AvatarFallback className="bg-zinc-800 text-sm">AC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}