"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  Settings,
  Search,
  PlusCircle,
  ChevronDown,
  Mail,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  attendanceRate: number;
  completionRate: number;
  performance: number;
  status: "active" | "inactive" | "onLeave";
  lastActive: string;
}

const StudentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  
  const facilitator = {
    name: "John Doe",
    role: "Lead Facilitator",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  const students: Student[] = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.j@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 92,
      completionRate: 85,
      performance: 78,
      status: "active",
      lastActive: "Today, 10:23 AM"
    },
    {
      id: "2",
      name: "Maria Garcia",
      email: "maria.g@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 88,
      completionRate: 92,
      performance: 94,
      status: "active",
      lastActive: "Today, 9:45 AM"
    },
    {
      id: "3",
      name: "Dwayne Wilson",
      email: "dwayne.w@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 75,
      completionRate: 68,
      performance: 62,
      status: "inactive",
      lastActive: "Mar 15, 2:30 PM"
    },
    {
      id: "4",
      name: "Sarah Chen",
      email: "sarah.c@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 96,
      completionRate: 88,
      performance: 85,
      status: "active",
      lastActive: "Today, 11:05 AM"
    },
    {
      id: "5",
      name: "Mohammed Al-Farsi",
      email: "mohammed.a@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 90,
      completionRate: 95,
      performance: 91,
      status: "active",
      lastActive: "Yesterday, 4:15 PM"
    },
    {
      id: "6",
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 82,
      completionRate: 78,
      performance: 75,
      status: "onLeave",
      lastActive: "Mar 10, 9:20 AM"
    },
    {
      id: "7",
      name: "Jamal Thompson",
      email: "jamal.t@example.com",
      avatar: "https://via.placeholder.com/150",
      attendanceRate: 89,
      completionRate: 82,
      performance: 80,
      status: "active",
      lastActive: "Today, 8:30 AM"
    },
  ];

  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-300 border-green-800";
      case "inactive": return "bg-red-500/20 text-red-300 border-red-800";
      case "onLeave": return "bg-amber-500/20 text-amber-300 border-amber-800";
    }
  };

  const getStatusText = (status: Student["status"]) => {
    switch (status) {
      case "active": return "Active";
      case "inactive": return "Inactive";
      case "onLeave": return "On Leave";
    }
  };
  
  const getPerformanceColor = (performance: number) => {
    if (performance >= 85) return "text-green-400";
    if (performance >= 70) return "text-amber-400";
    return "text-red-400";
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { title: "Total Students", value: "31", trend: "+5% from last month" },
    { title: "Average Attendance", value: "87%", trend: "-2% from last month" },
    { title: "Average Performance", value: "79%", trend: "+3% from last month" },
  ];

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
              <Button variant="ghost" className="flex items-center" asChild>
                <a href="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </a>
              </Button>
              <Button variant="secondary" className="flex items-center" asChild>
                <a href="/students">
                  <Users className="mr-2 h-4 w-4" />
                  Students
                </a>
              </Button>
              <Button variant="ghost" className="flex items-center" asChild>
                <a href="/courses">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Courses
                </a>
              </Button>
              <Button variant="ghost" className="flex items-center" asChild>
                <a href="/assessments">
                  <FileText className="mr-2 h-4 w-4" />
                  Assessments
                </a>
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Students</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Student
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-zinc-200">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <CardDescription className="text-zinc-400">
                  {stat.trend}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zinc-900 border-zinc-700"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-700">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="onLeave">On Leave</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            More Filters
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Students Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-zinc-800/50 border-zinc-800">
                  <TableHead className="w-[300px]">Student</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-zinc-800/50 border-zinc-800">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-xs text-zinc-400">{student.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col space-y-1">
                        <div className="text-sm">{student.attendanceRate}%</div>
                        <Progress value={student.attendanceRate} className="h-1" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col space-y-1">
                        <div className="text-sm">{student.completionRate}%</div>
                        <Progress value={student.completionRate} className="h-1" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={getPerformanceColor(student.performance)}>
                        {student.performance}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(student.status)}>
                        {getStatusText(student.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-zinc-400">{student.lastActive}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Performance Report</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">Remove Student</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentsPage;