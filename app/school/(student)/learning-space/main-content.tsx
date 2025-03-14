import { cn } from '@/server/utils';
import React from 'react'
export const name = "Jessica";
const MainContent = ({children, className}: {children: React.ReactNode, className?:string}) => {

  return (
    <div className={cn(`w-full md:min-w-2/3 p-4`, className)}>
      {children}
    </div>
  )
}

export default MainContent