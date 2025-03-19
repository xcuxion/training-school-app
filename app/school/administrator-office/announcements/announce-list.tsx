"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Announcement from "./announcement-form";

interface AnnouncementData {
  id: string;
  title: string;
  content: string;
  hasAttachment: boolean;
  attachmentUrl?: string;
  sentAt?: Date;
  sentToCount?: number;
  createdAt: Date;
}

export default function AnnouncementsManager({ announcements }: { announcements: AnnouncementData[] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Announcements</h2>
        <Button onClick={() => setShowModal(true)}>
          Create Announcement
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Attachment</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {announcements.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No announcements yet
                  </TableCell>
                </TableRow>
              ) : (
                announcements.map((announcement) => (
                  <TableRow key={announcement.id}>
                    <TableCell className="font-medium">{announcement.title}</TableCell>
                    <TableCell>
                      {announcement.sentAt ? (
                        <span className="text-green-600 font-medium">Sent</span>
                      ) : (
                        <span className="text-amber-600 font-medium">Draft</span>
                      )}
                    </TableCell>
                    <TableCell>{announcement.sentToCount || "-"}</TableCell>
                    <TableCell>
                      {announcement.hasAttachment ? (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={announcement.attachmentUrl} target="_blank" rel="noopener noreferrer">
                            View
                          </a>
                        </Button>
                      ) : (
                        "None"
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDistanceToNow(new Date(announcement.createdAt), { addSuffix: true })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Announcement
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}