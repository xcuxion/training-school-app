// File: app/page.tsx
"use client"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserIcon, Users, LightbulbIcon, ListTodo, MapPinIcon, BuildingIcon, GraduationCapIcon, CalendarIcon, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";
import ContributionGraph from "./contribution-graph";
import Navbar from "./navbar";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      
      <main className="container px-4 py-8 mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <Avatar className="w-64 h-64 border-4 border-zinc-800">
                <AvatarImage src="/profile-pic.jpg" alt="Alex Chen" />
                <AvatarFallback className="bg-zinc-800 text-4xl">AC</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-3 right-3 bg-zinc-800 rounded-full p-2">
                <LightbulbIcon className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mt-4">Alex Chen</h1>
            <p className="text-zinc-400">@techpreneurAlex</p>
            <p className="text-sm text-zinc-400 mt-1">CS Student • Innovator • Builder</p>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700">
                Edit profile
              </Button>
              <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700">
                <Users className="h-4 w-4 mr-1" /> Connect
              </Button>
            </div>
            
            <div className="flex gap-6 mt-6">
              <Link href="#" className="flex items-center text-zinc-400 hover:text-zinc-100">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm"><span className="font-bold text-zinc-100">42</span> connections</span>
              </Link>
              <Link href="#" className="flex items-center text-zinc-400 hover:text-zinc-100">
                <LightbulbIcon className="h-4 w-4 mr-1" />
                <span className="text-sm"><span className="font-bold text-zinc-100">15</span> ideas</span>
              </Link>
            </div>
            
            <div className="mt-6 flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPinIcon className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <GraduationCapIcon className="h-4 w-4" />
                <span className="text-sm">Stanford University</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <BuildingIcon className="h-4 w-4" />
                <span className="text-sm">Intern at TechVentures</span>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="flex-grow">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="border-b border-zinc-800 bg-transparent w-full justify-start rounded-none mb-6">
                <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent rounded-none">
                  <UserIcon className="h-4 w-4 mr-2" /> Overview
                </TabsTrigger>
                <TabsTrigger value="connections" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent rounded-none">
                  <Users className="h-4 w-4 mr-2" /> Connections
                </TabsTrigger>
                <TabsTrigger value="ideas" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent rounded-none">
                  <LightbulbIcon className="h-4 w-4 mr-2" /> Ideas
                </TabsTrigger>
                <TabsTrigger value="tasks" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent rounded-none">
                  <ListTodo className="h-4 w-4 mr-2" /> Tasks
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <Card className="bg-zinc-900 border-zinc-800 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <LightbulbIcon className="h-5 w-5 mr-2 text-yellow-400" />
                      About me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">
                      I'm a computer science student passionate about entrepreneurship and technology. 
                      Currently building solutions for sustainable technology and exploring the intersection 
                      of AI and environmental science. Looking to connect with like-minded students and mentors.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-zinc-900 border-zinc-800 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2 text-blue-400" />
                      Learning Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContributionGraph />
                    <div className="flex justify-between mt-4 text-xs text-zinc-400">
                      <span>Less</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-emerald-900 rounded-sm"></div>
                        <div className="w-3 h-3 bg-emerald-700 rounded-sm"></div>
                        <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
                        <div className="w-3 h-3 bg-emerald-300 rounded-sm"></div>
                      </div>
                      <span>More</span>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mb-6">
                  <h2 className="text-lg font-medium mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">Next.js</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">React</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">TypeScript</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">Python</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">UI/UX Design</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">Product Management</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">Data Analysis</Badge>
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">Business Model Canvas</Badge>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">Projects</h2>
                    <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700">
                      See all
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ProjectCard 
                      title="EcoTech Marketplace"
                      description="A platform connecting eco-friendly product makers with conscious consumers."
                      tags={["Next.js", "Stripe", "MongoDB"]}
                      progress={85}
                    />
                    
                    <ProjectCard 
                      title="StudyBuddy AI"
                      description="AI-powered study assistant that helps students organize notes and create personalized quizzes."
                      tags={["Python", "TensorFlow", "React"]}
                      progress={60}
                    />
                    
                    <ProjectCard 
                      title="Campus Connect"
                      description="Location-based networking app for university students to find study groups and events."
                      tags={["React Native", "Firebase", "Google Maps API"]}
                      progress={40}
                    />
                    
                    <ProjectCard 
                      title="Sustainable Supply Chain"
                      description="Blockchain solution for tracking ethical and sustainable product sourcing."
                      tags={["Solidity", "Web3.js", "TypeScript"]}
                      progress={25}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="connections">
                <div className="flex justify-center items-center h-64 text-zinc-400">
                  Connections content would go here
                </div>
              </TabsContent>
              
              <TabsContent value="ideas">
                <div className="flex justify-center items-center h-64 text-zinc-400">
                  Ideas content would go here
                </div>
              </TabsContent>
              
              <TabsContent value="tasks">
                <div className="flex justify-center items-center h-64 text-zinc-400">
                  Tasks content would go here
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-zinc-800 mt-8 py-6 text-center text-zinc-500 text-sm">
        <div className="container mx-auto">
          <p>© 2025 TechPreneurship Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}