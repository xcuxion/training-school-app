import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "XCUXION Batch'25 Introductory Webinar",
    date: "March 15, 2025",
    time: "10:00 AM GMT",
    location: "Online",
    link: "https://your-webinar-link.com",
    description: "Join us for an exclusive webinar to explore the roadmap for XCUXION Batch'25 and learn how to build scalable startups."
  },
  {
    title: "AI & Cybersecurity: The Future of Protection",
    date: "April 5, 2025",
    time: "2:00 PM GMT",
    location: "Accra, Ghana & Online",
    link: "https://your-event-link.com",
    description: "A deep dive into how AI is shaping the future of cybersecurity and ethical hacking."
  }
];

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">🚀 Webinars & Events</h1>
      <p className="text-center text-white mb-10">
        Stay updated with our latest events and webinars. Join industry experts and innovators!
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="shadow-lg border border-gray-200 rounded-xl">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">{event.description}</p>
              <div className="flex items-center gap-2 text-sm text-white">
                <Calendar size={16} /> <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white mt-1">
                <Clock size={16} /> <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white mt-1">
                <MapPin size={16} /> <span>{event.location}</span>
              </div>
              <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href={event.link} target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
