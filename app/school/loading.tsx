import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex ">
      <Skeleton className="w-80 h-screen sticky top-0 left-0" />
      <div className="space-y-10 ">
        <Skeleton className="h-20 w-" />
        <Skeleton className="" />
        <Skeleton className="" />
      </div>
      <div className="w-80 h-screen px-10 sticky top-0 right-0">
        <Skeleton className="w-80 h-40" />
        <Skeleton className="" />
      </div>
    </div>
  );
};

export default loading;
