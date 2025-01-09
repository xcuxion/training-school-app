import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const ResourceSkeleton = () => {
  return (
    <div className='space-y-2'>
        <Skeleton className="max-w-[300px] h-[200px] rounded-md" />
        <Skeleton className="w-[150px] h-[20px] rounded-md" />
        <Skeleton className="w-[70px] h-[20px] rounded-md" />
    </div>
  )
}

export default ResourceSkeleton