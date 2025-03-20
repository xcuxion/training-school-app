"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  Calendar,
  ClipboardList,
  File,
  FileText,
  Folder,
  GraduationCap,
  LayoutDashboard,
  MoreVertical,
  Play,
  Plus,
  Search,
  Settings,
  Users,
  Video
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  modules: number;
  students: number;
  progress: number;
  status: "active" | "draft" | "archived";
  lastUpdated: string;
  image: string;
}

interface Module {
  id: string;
  title: string;
  lessons: number;
  duration: string;
  status: "published" | "draft";
  resources: number;
  completion: number;
}

const CourseManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("courses");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const facilitator = {
    name: "John Doe",
    role: "Lead Facilitator",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  const courses: Course[] = [
    {
      id: "course-1",
      title: "Introduction to Programming",
      description: "A comprehensive introduction to programming fundamentals using JavaScript",
      modules: 8,
      students: 31,
      progress: 85,
      status: "active",
      lastUpdated: "Mar 15, 2025",
      image: "/api/placeholder/400/200"
    },
    {
      id: "course-2",
      title: "Database Design & Management",
      description: "Learn database concepts, SQL, and relational database design",
      modules: 6,
      students: 26,
      progress: 60,
      status: "active",
      lastUpdated: "Mar 10, 2025",
      image: "/api/placeholder/400/200"
    },
    {
      id: "course-3",
      title: "Frontend Development",
      description: "Master HTML, CSS, and JavaScript to build modern user interfaces",
      modules: 10,
      students: 28,
      progress: 42,
      status: "active",
      lastUpdated: "Mar 5, 2025",
      image: "/api/placeholder/400/200"
    },
    {
      id: "course-4",
      title: "Backend Development with Node.js",
      description: "Build scalable server-side applications with Node.js and Express",
      modules: 7,
      students: 0,
      progress: 0,
      status: "draft",
      lastUpdated: "Mar 1, 2025",
      image: "/api/placeholder/400/200"
    },
  ];

  const modules: Module[] = [
    {
      id: "module-1",
      title: "Variables, Data Types & Operators",
      lessons: 5,
      duration: "3h 20m",
      status: "published",
      resources: 8,
      completion: 100
    },
    {
      id: "module-2",
      title: "Control Flow & Conditional Statements",
      lessons: 4,
      duration: "2h 45m",
      status: "published",
      resources: 6,
      completion: 100
    },
    {
      id: "module-3",
      title: "Functions & Scope",
      lessons: 6,
      duration: "4h 10m",
      status: "published",
      resources: 10,
      completion: 90
    },
    {
      id: "module-4",
      title: "Arrays & Objects",
      lessons: 7,
      duration: "5h 30m",
      status: "published",
      resources: 12,
      completion: 75
    },
    {
      id: "module-5",
      title: "DOM Manipulation",
      lessons: 5,
      duration: "3h 45m",
      status: "published",
      resources: 9,
      completion: 60
    },
    {
      id: "module-6",
      title: "Asynchronous JavaScript",
      lessons: 4,
      duration: "3h 15m",
      status: "published",
      resources: 7,
      completion: 30
    },
    {
      id: "module-7",
      title: "Error Handling & Debugging",
      lessons: 3,
      duration: "2h 20m",
      status: "draft",
      resources: 5,
      completion: 0
    },
    {
      id: "module-8",
      title: "Final Project",
      lessons: 3,
      duration: "6h 00m",
      status: "draft",
      resources: 4,
      completion: 0
    },
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setActiveTab("modules");
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setActiveTab("courses");
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
              <Button variant="ghost" className="flex items-center text-blue-500">
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
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Course Management</h1>
            <p className="text-zinc-400">Create and manage your educational content</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            New Course
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList className="bg-zinc-800">
              <TabsTrigger value="courses" className="data-[state=active]:bg-zinc-700">
                Courses
              </TabsTrigger>
              <TabsTrigger value="modules" className="data-[state=active]:bg-zinc-700" disabled={!selectedCourse}>
                Modules
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-zinc-700">
                Resources
              </TabsTrigger>
            </TabsList>

            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-8 bg-zinc-800 border-zinc-700 w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <TabsContent value="courses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        course.status === "active"
                          ? "bg-green-500/20 text-green-300 border-green-800"
                          : course.status === "draft"
                          ? "bg-amber-500/20 text-amber-300 border-amber-800"
                          : "bg-zinc-500/20 text-zinc-300 border-zinc-700"
                      }`}
                    >
                      {course.status === "active" ? "Active" : course.status === "draft" ? "Draft" : "Archived"}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Course</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-500">Archive Course</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="line-clamp-2 h-10">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center text-zinc-400">
                        <ClipboardList className="h-4 w-4 mr-1" />
                        <span>{course.modules} modules</span>
                      </div>
                      <div className="flex items-center text-zinc-400">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                    {course.status === "active" && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Course progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1" />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <p className="text-xs text-zinc-400">Updated {course.lastUpdated}</p>
                    <Button
                      size="sm"
                      onClick={() => handleCourseSelect(course)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Manage
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="modules" className="space-y-4">
            {selectedCourse && (
              <>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToCourses}
                    className="mb-2"
                  >
                    ← Back to Courses
                  </Button>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold">{selectedCourse.title}</h2>
                      <p className="text-zinc-400">{selectedCourse.description}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Module
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardContent className="p-4 flex flex-col items-center">
                        <ClipboardList className="h-8 w-8 text-blue-400 mb-2" />
                        <p className="text-2xl font-bold">{modules.length}</p>
                        <p className="text-zinc-400 text-sm">Total Modules</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardContent className="p-4 flex flex-col items-center">
                        <BookOpen className="h-8 w-8 text-green-400 mb-2" />
                        <p className="text-2xl font-bold">{modules.reduce((acc, m) => acc + m.lessons, 0)}</p>
                        <p className="text-zinc-400 text-sm">Total Lessons</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardContent className="p-4 flex flex-col items-center">
                        <Calendar className="h-8 w-8 text-amber-400 mb-2" />
                        <p className="text-2xl font-bold">
                          {modules.reduce((acc, m) => {
                            const [hours, mins] = m.duration.split('h ');
                            return acc + parseInt(hours) + parseInt(mins) / 60;
                          }, 0).toFixed(1)}h
                        </p>
                        <p className="text-zinc-400 text-sm">Total Duration</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardContent className="p-4 flex flex-col items-center">
                        <File className="h-8 w-8 text-purple-400 mb-2" />
                        <p className="text-2xl font-bold">{modules.reduce((acc, m) => acc + m.resources, 0)}</p>
                        <p className="text-zinc-400 text-sm">Total Resources</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-zinc-800">
                        <TableHead className="w-12 text-zinc-400"></TableHead>
                        <TableHead className="text-zinc-400">Module</TableHead>
                        <TableHead className="text-zinc-400">Lessons</TableHead>
                        <TableHead className="text-zinc-400">Duration</TableHead>
                        <TableHead className="text-zinc-400">Status</TableHead>
                        <TableHead className="text-zinc-400">Completion</TableHead>
                        <TableHead className="text-zinc-400 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {modules.map((module, index) => (
                        <TableRow key={module.id} className="hover:bg-zinc-800">
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell className="font-medium">{module.title}</TableCell>
                          <TableCell>{module.lessons} lessons</TableCell>
                          <TableCell>{module.duration}</TableCell>
                          <TableCell>
                            <Badge
                              className={`${
                                module.status === "published"
                                  ? "bg-green-500/20 text-green-300 border-green-800"
                                  : "bg-amber-500/20 text-amber-300 border-amber-800"
                              }`}
                            >
                              {module.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={module.completion} className="h-2 w-16" />
                              <span className="text-xs">{module.completion}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Lessons</DropdownMenuItem>
                                <DropdownMenuItem>Edit Module</DropdownMenuItem>
                                <DropdownMenuItem>Add Lesson</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500">Remove Module</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Learning Resources</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Upload Resources
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center">
                  <Folder className="h-12 w-12 text-amber-500 mb-3 group-hover:text-amber-400" />
                  <CardTitle className="text-center">Reading Materials</CardTitle>
                  <CardDescription className="text-center mt-1">12 PDFs, 8 Documents</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center">
                  <Video className="h-12 w-12 text-blue-500 mb-3 group-hover:text-blue-400" />
                  <CardTitle className="text-center">Video Tutorials</CardTitle>
                  <CardDescription className="text-center mt-1">24 videos, 8h 45m total</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center">
                  <File className="h-12 w-12 text-green-500 mb-3 group-hover:text-green-400" />
                  <CardTitle className="text-center">Exercise Files</CardTitle>
                  <CardDescription className="text-center mt-1">18 exercises, 6 projects</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center">
                  <Play className="h-12 w-12 text-purple-500 mb-3 group-hover:text-purple-400" />
                  <CardTitle className="text-center">Interactive Content</CardTitle>
                  <CardDescription className="text-center mt-1">9 quizzes, 4 simulations</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Recently Added Resources</h3>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-zinc-800">
                      <TableHead className="text-zinc-400">Name</TableHead>
                      <TableHead className="text-zinc-400">Type</TableHead>
                      <TableHead className="text-zinc-400">Size</TableHead>
                      <TableHead className="text-zinc-400">Course</TableHead>
                      <TableHead className="text-zinc-400">Uploaded</TableHead>
                      <TableHead className="text-zinc-400 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-zinc-800">
                      <TableCell className="font-medium">JavaScript Fundamentals.pdf</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-500/10 text-red-300 border-red-800">PDF</Badge>
                      </TableCell>
                      <TableCell>2.4 MB</TableCell>
                      <TableCell>Introduction to Programming</TableCell>
                      <TableCell>Mar 18, 2025</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-zinc-800">
                      <TableCell className="font-medium">Intro to SQL.mp4</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-800">Video</Badge>
                      </TableCell>
                      <TableCell>68.2 MB</TableCell>
                      <TableCell>Database Design & Management</TableCell>
                      <TableCell>Mar 17, 2025</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-zinc-800">
                      <TableCell className="font-medium">CSS Layouts Exercise</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-800">Project</Badge>
                      </TableCell>
                      <TableCell>1.8 MB</TableCell>
                      <TableCell>Frontend Development</TableCell>
                      <TableCell>Mar 15, 2025</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-zinc-800">
                      <TableCell className="font-medium">Arrays Quiz</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-800">Quiz</Badge>
                      </TableCell>
                      <TableCell>0.5 MB</TableCell>
                      <TableCell>Introduction to Programming</TableCell>
                      <TableCell>Mar 14, 2025</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseManagement;