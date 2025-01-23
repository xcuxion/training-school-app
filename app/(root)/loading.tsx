import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-full flex flex-center">
      <Skeleton className="w-full h-16 bg-gray-200" />
      <Skeleton className="w-40 h-2" />
    </div>
  );
};

export default loading;
