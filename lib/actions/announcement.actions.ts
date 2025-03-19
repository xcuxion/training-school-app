'use server'
import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';
import AnnouncementEmail from '@/emails/announcement';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

export async function sendAnnouncement({
  title,
  content,
  fileUrl,
}: {
  title: string;
  content: string;
  fileUrl?: string;
}) {
  try {
    console.log(title, content, fileUrl);
    
    // 1. Save announcement to database
    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        hasAttachment: !!fileUrl,
        attachmentUrl: fileUrl, // Save the URL directly since we already have it
      },
    });
    
    console.log(announcement);
    
    // 2. Get all users who should receive this announcement
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    });
    
    // 3. Send email to each user
    const emailPromises = users.map(async (user) => {
      const emailData = {
        from: 'announcements@xcuxion.org',
        to: user.email,
        subject: `Announcement: ${title}`,
        react: AnnouncementEmail({
          title,
          content,
          attachmentUrl: fileUrl,
        }),
      };
      
      // We're not attaching the file directly to the email anymore
      // since we're using the URL from EdgeStore
      
      return resend.emails.send(emailData);
    });
    
    await Promise.all(emailPromises);
    
    // 4. Update the announcement with the sent status
    await prisma.announcement.update({
      where: { id: announcement.id },
      data: {
        sentAt: new Date(),
        sentToCount: users.length,
      },
    });
    
    return { success: true, id: announcement.id };
  } catch (error) {
    console.error('Error sending announcement:', error);
    throw new Error('Failed to send announcement');
  }
}