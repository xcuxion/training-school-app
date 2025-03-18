'use server'

import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';
import AnnouncementEmail from '@/emails/announcement';


const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAnnouncement({
  title,
  content,
  file,
}: {
  title: string;
  content: string;
  file?: File;
}) {
  try {
    // 1. Save announcement to database
    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        hasAttachment: !!file,
      },
    });

    // 2. Upload file if provided
    let attachmentUrl: string | undefined;
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Upload to your storage solution (e.g., S3, Cloudinary, etc.)
      // For this example, we'll just use a placeholder URL
      attachmentUrl = `/attachments/${announcement.id}/${file.name}`;
      
      // Update the announcement with the attachment URL
      await prisma.announcement.update({
        where: { id: announcement.id },
        data: { attachmentUrl },
      });
    }

    // 3. Get all users who should receive this announcement
    const users = await prisma.user.findMany({

      select: {
        id: true,
        email: true,
      },
    });

    // 4. Send email to each user
    const emailPromises = users.map(async (user) => {
      const emailData = {
        from: 'announcements@yourdomain.com',
        to: user.email,
        subject: `Announcement: ${title}`,
        react: AnnouncementEmail({
          title,
          content,
          attachmentUrl,
        }),
      };

      // Add attachment if present
      const emailOptions: any = { ...emailData };
      if (file) {
        emailOptions.attachments = [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          },
        ];
      }

      return resend.emails.send(emailOptions);
    });

    await Promise.all(emailPromises);

    // 5. Update the announcement with the sent status
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