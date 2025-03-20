"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CalendarIcon, 
  CheckCircle2,
  ClipboardList, 
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  Settings, 
  Users,
  Filter,
  Search,
  ArrowUpDown,
  CheckCheck,
  Clock,
  AlertCircle,
  Eye
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Assessment {
  id: string;
  title: string;
  type: string;
  dueDate: string;
  status: "pending" | "graded" | "overdue";
  submissions: number;
  totalStudents: number;
  averageScore?: number;
  module: string;
}

const AssessmentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const facilitator = {
    name: "John Doe",
    role: "Lead Facilitator",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  const assessments: Assessment[] = [
    {
      id: "1",
      title: "JavaScript Fundamentals Quiz",
      type: "Quiz",
      dueDate: "Mar 20, 2025",
      status: "pending",
      submissions: 28,
      totalStudents: 31,
      module: "Programming Fundamentals"
    },
    {
      id: "2",
      title: "Data Structures Implementation",
      type: "Assignment",
      dueDate: "Mar 18, 2025",
      status: "overdue",
      submissions: 25,
      totalStudents: 31,
      module: "Programming Fundamentals"
    },
    {
      id: "3",
      title: "Database Schema Design",
      type: "Project",
      dueDate: "Mar 15, 2025",
      status: "graded",
      submissions: 31,
      totalStudents: 31,
      averageScore: 78,
      module: "Database Design"
    },
    {
      id: "4",
      title: "SQL Queries Practice",
      type: "Quiz",
      dueDate: "Mar 10, 2025",
      status: "graded",
      submissions: 29,
      totalStudents: 31,
      averageScore: 85,
      module: "Database Design"
    },
    {
      id: "5",
      title: "Frontend Framework Comparison",
      type: "Essay",
      dueDate: "Mar 22, 2025",
      status: "pending",
      submissions: 18,
      totalStudents: 31,
      module: "Frontend Development"
    },
    {
      id: "6",
      title: "Responsive Design Challenge",
      type: "Project",
      dueDate: "Mar 25, 2025",
      status: "pending",
      submissions: 10,
      totalStudents: 31,
      module: "Frontend Development"
    },
  ];

  const filteredAssessments = assessments
    .filter(assessment => 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.module.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(assessment => 
      filterStatus === null || assessment.status === filterStatus
    );

  const stats = [
    {
      title: "Pending Assessments",
      value: assessments.filter(a => a.status === "pending").length,
      icon: <Clock className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Graded Assessments",
      value: assessments.filter(a => a.status === "graded").length,
      icon: <CheckCheck className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Overdue Assessments",
      value: assessments.filter(a => a.status === "overdue").length,
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "pending": return "bg-amber-500/20 text-amber-300 border-amber-800";
      case "graded": return "bg-green-500/20 text-green-300 border-green-800";
      case "overdue": return "bg-red-500/20 text-red-300 border-red-800";
      default: return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "pending": return <Clock className="h-4 w-4 mr-1" />;
      case "graded": return <CheckCheck className="h-4 w-4 mr-1" />;
      case "overdue": return <AlertCircle className="h-4 w-4 mr-1" />;
      default: return null;
    }
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
              <Button variant="ghost" className="flex items-center bg-zinc-800">
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
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Assessments</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileText className="mr-2 h-4 w-4" />
              Create Assessment
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-zinc-200">{stat.title}</CardTitle>
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Assessments Section */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <CardTitle>Assessment List</CardTitle>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <Input 
                      className="pl-8 bg-zinc-800 border-zinc-700 focus:border-blue-500"
                      placeholder="Search assessments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setFilterStatus(null)}>
                        All
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("pending")}>
                        <Clock className="mr-2 h-4 w-4" />
                        Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("graded")}>
                        <CheckCheck className="mr-2 h-4 w-4" />
                        Graded
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("overdue")}>
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Overdue
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4 bg-zinc-800">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="programming">Programming Fundamentals</TabsTrigger>
                  <TabsTrigger value="database">Database Design</TabsTrigger>
                  <TabsTrigger value="frontend">Frontend Development</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredAssessments.length > 0 ? (
                      filteredAssessments.map((assessment) => (
                        <div 
                          key={assessment.id}
                          className="flex flex-col md:flex-row justify-between bg-zinc-800/50 rounded-lg border border-zinc-700 p-4 hover:bg-zinc-800 transition"
                        >
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                              <h3 className="text-lg font-medium">{assessment.title}</h3>
                              <div className="flex items-center gap-2 mt-1 md:mt-0">
                                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-800">
                                  {assessment.type}
                                </Badge>
                                <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-800">
                                  {assessment.module}
                                </Badge>
                                <Badge variant="outline" className={getStatusColor(assessment.status)}>
                                  <div className="flex items-center">
                                    {getStatusIcon(assessment.status)}
                                    {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                                  </div>
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-zinc-400">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  Due: {assessment.dueDate}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {assessment.submissions}/{assessment.totalStudents} submissions
                                </div>
                                {assessment.averageScore && (
                                  <div className="flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-1" />
                                    Avg. Score: {assessment.averageScore}%
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            {assessment.status !== "graded" && (
                              <Button size="sm" className="flex items-center bg-blue-600 hover:bg-blue-700">
                                <FileText className="mr-1 h-4 w-4" />
                                Grade
                              </Button>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-zinc-400">
                        No assessments found matching your criteria.
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="programming" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredAssessments
                      .filter(assessment => assessment.module === "Programming Fundamentals")
                      .map((assessment) => (
                        <div 
                          key={assessment.id}
                          className="flex flex-col md:flex-row justify-between bg-zinc-800/50 rounded-lg border border-zinc-700 p-4 hover:bg-zinc-800 transition"
                        >
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                              <h3 className="text-lg font-medium">{assessment.title}</h3>
                              <div className="flex items-center gap-2 mt-1 md:mt-0">
                                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-800">
                                  {assessment.type}
                                </Badge>
                                <Badge variant="outline" className={getStatusColor(assessment.status)}>
                                  <div className="flex items-center">
                                    {getStatusIcon(assessment.status)}
                                    {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                                  </div>
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-zinc-400">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  Due: {assessment.dueDate}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {assessment.submissions}/{assessment.totalStudents} submissions
                                </div>
                                {assessment.averageScore && (
                                  <div className="flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-1" />
                                    Avg. Score: {assessment.averageScore}%
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            {assessment.status !== "graded" && (
                              <Button size="sm" className="flex items-center bg-blue-600 hover:bg-blue-700">
                                <FileText className="mr-1 h-4 w-4" />
                                Grade
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="database" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredAssessments
                      .filter(assessment => assessment.module === "Database Design")
                      .map((assessment) => (
                        <div 
                          key={assessment.id}
                          className="flex flex-col md:flex-row justify-between bg-zinc-800/50 rounded-lg border border-zinc-700 p-4 hover:bg-zinc-800 transition"
                        >
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                              <h3 className="text-lg font-medium">{assessment.title}</h3>
                              <div className="flex items-center gap-2 mt-1 md:mt-0">
                                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-800">
                                  {assessment.type}
                                </Badge>
                                <Badge variant="outline" className={getStatusColor(assessment.status)}>
                                  <div className="flex items-center">
                                    {getStatusIcon(assessment.status)}
                                    {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                                  </div>
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-zinc-400">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  Due: {assessment.dueDate}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {assessment.submissions}/{assessment.totalStudents} submissions
                                </div>
                                {assessment.averageScore && (
                                  <div className="flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-1" />
                                    Avg. Score: {assessment.averageScore}%
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            {assessment.status !== "graded" && (
                              <Button size="sm" className="flex items-center bg-blue-600 hover:bg-blue-700">
                                <FileText className="mr-1 h-4 w-4" />
                                Grade
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="frontend" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredAssessments
                      .filter(assessment => assessment.module === "Frontend Development")
                      .map((assessment) => (
                        <div 
                          key={assessment.id}
                          className="flex flex-col md:flex-row justify-between bg-zinc-800/50 rounded-lg border border-zinc-700 p-4 hover:bg-zinc-800 transition"
                        >
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                              <h3 className="text-lg font-medium">{assessment.title}</h3>
                              <div className="flex items-center gap-2 mt-1 md:mt-0">
                                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-800">
                                  {assessment.type}
                                </Badge>
                                <Badge variant="outline" className={getStatusColor(assessment.status)}>
                                  <div className="flex items-center">
                                    {getStatusIcon(assessment.status)}
                                    {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                                  </div>
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-zinc-400">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  Due: {assessment.dueDate}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {assessment.submissions}/{assessment.totalStudents} submissions
                                </div>
                                {assessment.averageScore && (
                                  <div className="flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-1" />
                                    Avg. Score: {assessment.averageScore}%
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            {assessment.status !== "graded" && (
                              <Button size="sm" className="flex items-center bg-blue-600 hover:bg-blue-700">
                                <FileText className="mr-1 h-4 w-4" />
                                Grade
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;