// src/app/(admin)/admin/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Users,
  TrendingUp,
  ArrowRight,
  BarChart
} from "lucide-react";
import { motion } from "framer-motion";
import { Event } from "@/lib/types/event";

export default function AdminDashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).length;
  const pastEvents = events.filter(event => new Date(event.date) < new Date()).length;

  // Stats for demonstration
  const stats = [
    { 
      title: "Total Events", 
      value: events.length, 
      icon: CalendarDays, 
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200" 
    },
    { 
      title: "Upcoming Events", 
      value: upcomingEvents, 
      icon: TrendingUp, 
      color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200" 
    },
    { 
      title: "Past Events", 
      value: pastEvents, 
      icon: BarChart, 
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200" 
    },
    { 
      title: "Registered Users", 
      value: 358, 
      icon: Users, 
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-200" 
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome to your event management dashboard</p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                        <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                      </div>
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border border-gray-200 dark:border-gray-800 h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl">Upcoming Events</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/admin/events?tab=upcoming">
                      View all <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardHeader>
                <CardContent>
                  {events
                    .filter(event => new Date(event.date) >= new Date())
                    .slice(0, 5)
                    .map((event, index) => (
                      <div 
                        key={event.id || index}
                        className="py-3 border-b last:border-0 border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{event.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <CalendarDays size={14} /> 
                              <span>{new Date(event.date).toLocaleDateString()} - {event.time}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a href={`/admin/events/edit/${event.id}`}>Edit</a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  {events.filter(event => new Date(event.date) >= new Date()).length === 0 && (
                    <div className="py-8 text-center text-gray-500">
                      No upcoming events scheduled
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="border border-gray-200 dark:border-gray-800 h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl">Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Users size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">New user registered</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CalendarDays size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Event "AI & Cybersecurity" updated</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <TrendingUp size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">25 new registrations for "XCUXION Batch'25"</p>
                        <p className="text-xs text-gray-500">8 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <CalendarDays size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">New event created: "Web3 Development Workshop"</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}