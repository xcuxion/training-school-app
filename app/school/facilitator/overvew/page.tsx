
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CalendarIcon, 
  CheckCircle2,
  ClipboardList, 
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  Settings, 
  Users
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
}

interface TodoItem {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

interface ManagementItem {
  title: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const FacilitatorDashboard: React.FC = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: "1",
      title: "Assignment Release",
      dueDate: "Today, 5:00 PM",
      completed: false,
      priority: "high"
    },
    {
      id: "2",
      title: "Bank Case Review",
      dueDate: "Tomorrow, 10:00 AM",
      completed: false,
      priority: "medium"
    },
    {
      id: "3",
      title: "Introduction to Course",
      dueDate: "Mar 21, 9:00 AM",
      completed: false,
      priority: "high"
    },
    {
      id: "4",
      title: "Case Study Review",
      dueDate: "Mar 22, 2:00 PM",
      completed: false,
      priority: "low"
    },
  ]);

  const facilitator = {
    name: "John Doe",
    role: "Lead Facilitator",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  const stats: StatCardProps[] = [
    {
      title: "Students",
      value: "31",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      description: "Active participants",
      trend: { value: 12, positive: true },
    },
    {
      title: "Attendance",
      value: "85%",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      description: "31/37 students present",
      trend: { value: 5, positive: true },
    },
    {
      title: "Pending Assessments",
      value: "8",
      icon: <FileText className="h-6 w-6 text-amber-500" />,
      description: "Due within 48 hours",
      trend: { value: 3, positive: false },
    },
  ];

  const managementItems: ManagementItem[] = [
    {
      title: "Learning Resources",
      icon: <GraduationCap size={24} />,
      count: 24,
      color: "bg-blue-500",
    },
    {
      title: "Course Management",
      icon: <ClipboardList size={24} />,
      count: 8,
      color: "bg-purple-500",
    },
    {
      title: "Project Space",
      icon: <LayoutDashboard size={24} />,
      count: 12,
      color: "bg-amber-500",
    },
  ];

  const upcomingSession = {
    title: "Basics of Programming - Conditional Statements",
    dateTime: new Date(),
    duration: "1h 30m",
    students: 31,
    materials: 4,
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header Bar */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={140}
              height={40}
              className="mr-4"
            />
            <div className="hidden md:flex space-x-6 ml-10">
              <Button variant="ghost" className="flex items-center">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Students
              </Button>
              <Button variant="ghost" className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                Courses
              </Button>
              <Button variant="ghost" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Assessments
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-3 bg-zinc-800 rounded-full pl-1 pr-3 py-1 hover:bg-zinc-700 transition">
                  <Avatar className="h-8 w-8 border-2 border-blue-500">
                    <AvatarImage src={facilitator.avatar} alt={facilitator.name} />
                    <AvatarFallback>{facilitator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{facilitator.name}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{facilitator.name}</span>
                    <span className="text-xs text-zinc-400">{facilitator.role}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Column */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-2xl font-bold">Facilitator Dashboard</h1>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-zinc-200">{stat.title}</CardTitle>
                      {stat.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-zinc-400">
                        {stat.description}
                      </CardDescription>
                      {stat.trend && (
                        <Badge variant={stat.trend.positive ? "default" : "destructive"} className="text-xs">
                          {stat.trend.positive ? "+" : "-"}{stat.trend.value}%
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Course Progress */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Current module completion status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Programming Fundamentals</span>
                    <span className="text-sm text-zinc-400">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Database Design</span>
                    <span className="text-sm text-zinc-400">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Frontend Development</span>
                    <span className="text-sm text-zinc-400">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Management Items */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Course Management</h2>
              <div className="grid grid-cols-1 gap-4">
                {managementItems.map((item, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <div className="flex items-center p-4 cursor-pointer hover:bg-zinc-800/50 transition">
                      <div className={`p-3 rounded-lg ${item.color} mr-4`}>
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-zinc-400 text-sm">{item.count} items available</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Side Column */}
          <div className="md:w-1/3 space-y-6">
            {/* Upcoming Session */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle>Next Session</CardTitle>
                  <CalendarIcon className="h-5 w-5 text-zinc-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <Badge variant="outline" className="mb-2 bg-amber-500/20 text-amber-300 border-amber-700">
                    Upcoming
                  </Badge>
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    {upcomingSession.title}
                  </h3>
                  <div className="text-sm text-zinc-400 space-y-1">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {upcomingSession.dateTime.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {upcomingSession.students} students enrolled
                    </div>
                  </div>
                  <Button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-black font-medium">
                    Start Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border border-zinc-800"
                />
              </CardContent>
            </Card>

            {/* Todo List */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Todo List</CardTitle>
                  <Badge>{todos.filter(t => !t.completed).length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {todos.map((todo) => (
                  <div 
                    key={todo.id}
                    className={`flex items-start p-3 border border-zinc-800 rounded-lg ${
                      todo.completed ? "bg-zinc-800/30 opacity-60" : ""
                    }`}
                  >
                    <Checkbox 
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="mt-1"
                    />
                    <div className="ml-3 flex-grow">
                      <div className="flex items-center">
                        <h4 className={`text-sm font-medium ${todo.completed ? "line-through text-zinc-500" : ""}`}>
                          {todo.title}
                        </h4>
                        <Badge 
                          variant="outline" 
                          className={`ml-2 text-xs ${
                            todo.priority === "high" 
                              ? "bg-red-500/20 text-red-300 border-red-800" 
                              : todo.priority === "medium"
                              ? "bg-amber-500/20 text-amber-300 border-amber-800"
                              : "bg-blue-500/20 text-blue-300 border-blue-800"
                          }`}
                        >
                          {todo.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{todo.dueDate}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitatorDashboard;