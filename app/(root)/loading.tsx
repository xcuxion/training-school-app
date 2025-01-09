import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <Skeleton className='bg-gray-200'>
        <Skeleton className='w-40 h-2'/>
    </Skeleton>
  )
}

export default loading