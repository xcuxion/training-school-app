"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface navLink {
    route: string
    label: string
}

interface PageHeaderProps {
    title: string
    navs: navLink[]
}

const PageHeader = ({title, navs}: PageHeaderProps) => {
  const pathname = usePathname()
  return (
    <div className='mb-4 sticky py-1 top-0 left-0 z-10 bg-black'>
        <h1 className="text-4xl font-semibold mb-2">{title}</h1>
        <nav className='flex flex-row text-lg gap-4'>
            {
                navs.map((link, index)=>{
                const active = (link.route === '/school' && pathname === '/school') || (pathname.startsWith(link.route) && link.route !== '/school');
                return(
                    <Link key={index} href={link.route} className={active? 'text-primary font-medium': 'font-medium opacity-50'}>{link.label}</Link>
                )
                })
            }
        </nav>
    </div>
  )
}

export default PageHeader