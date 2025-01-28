import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileSheet = ({
  children,
  description,
  title,
}: {
  description?: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="bg-light">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description && description}</SheetDescription>
          </SheetHeader>
          <div className="space-y-4">{children}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSheet;
