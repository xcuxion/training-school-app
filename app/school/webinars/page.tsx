// src/app/(client)/events/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Event } from "@/lib/types/event";

export default function EventsPage() {
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

  // Function to determine if an event is upcoming or past
  const isUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Webinars & Events
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Stay updated with our latest events and webinars. Join industry experts and innovators!
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {events.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {events.map((event, index) => (
                <motion.div key={event.id || index} variants={item}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-200 dark:border-gray-800 rounded-xl">
                    {event.banner && (
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={event.banner} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant={isUpcoming(event.date) ? "default" : "outline"}>
                          {isUpcoming(event.date) ? "Upcoming" : "Past"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={16} className="text-blue-500" /> 
                          <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={16} className="text-blue-500" /> 
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <MapPin size={16} className="text-blue-500" /> 
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 pt-2">
                      <Button 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" 
                        asChild
                      >
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                          Register <ArrowRight size={16} className="ml-2" />
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => navigator.share({ 
                          title: event.title, 
                          text: event.description,
                          url: event.link 
                        })}
                      >
                        <Share2 size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">No events scheduled at the moment</h3>
              <p className="mt-2">Check back soon for upcoming events!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}