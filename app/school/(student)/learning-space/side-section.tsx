import { cn } from '@/lib/utils'
import React from 'react'

const SideSection = ({children, className}: {children?:React.ReactNode, className?: string}) => {
  return (
    <div className={cn(`hidden h-screen md:grid grid-rows-6 gap-4 sticky top-0 right-0 p-4 `, className )}>
      {children && children}
    </div>
  )
}

export default SideSection