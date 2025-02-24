import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Xcuxion School",
  description: "Xcuxion's School of Engineering & Techpreneurship",
};


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-black'>
      {children}
      <Toaster />

    </div>
  )
}

export default layout
