import { PrismaClient } from "@prisma/client";
import AnnouncementsManager from "./announce-list";

const prisma = new PrismaClient();

export default async function AnnouncementsPage() {
  const announcements:any = await prisma.announcement.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto py-10">
      <AnnouncementsManager announcements={announcements} />
    </div>
  );
}