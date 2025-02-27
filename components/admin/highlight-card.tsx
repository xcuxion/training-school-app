import React from 'react'
import Link from 'next/link'

type LinkAvailable = {
  href: string
  label: string
}

interface HighlightCardProps {
    title: string
    rate: string
    updated?: string
    link?: LinkAvailable
}

const HighlightCard = ({title, rate, updated, link}: HighlightCardProps) => {
  return (
    <div className='flex flex-col items-start p-3 h-[125px] rounded-lg gap-2 bg-secondary border'>
        <h3 className="text-base font-medium capitalize">{title}</h3>
        <p className="text-2xl font-bold">{rate}</p>
        {
            updated && 
            <p className="text-sm font-normal">{updated}</p>
        }
        {
          link && (
            <Link href={link.href} className='py-1 px-2 text-white rounded-full text-xs hover:bg-primary/80 font-semibold bg-primary underline'>{link.label}</Link>
          )
        }
    </div>
  )
}

export default HighlightCard