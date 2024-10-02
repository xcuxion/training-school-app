'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const navs = [
    {
        route: '/tw/adventurer-guild/notice-board',
        label: 'Notice Board',
        icon: '/icons/linkedIn.png'
    },
    {
        route: '/tw/adventurer-guild/quests',
        label: 'Quests Taken',
        icon: '/icons/linkedIn.png'
    },
    {
        route: '/tw/adventurer-guild/profile',
        label: 'Profile',
        icon: '/icons/linkedIn.png'
    },
    {
        route: '/tw/adventurer-guild/applications',
        label: '',
        icon: '/icons/linkedIn.png'
    },
]

const AdventurerSidebar = () => {
  const router = useRouter()
  return (
    <aside className='w-[200px] h-full  p-4'>
      <section className='flex items-center gap-3 mb-7 '>
        <Image 
            src={'/icons/tw-logo.png'}
            alt=''
            width={24}
            height={24}
            className='w-8 h-8 '
        />
        <span className="text-xl font-bold">Adventurer</span>
      </section>
      <section className="flex flex-col gap-y-5">
        {
            navs.map((nav, index) => (
                <Link href={nav.route} key={index} className="flex items-center gap-x-3">
                    <Image 
                      src={nav.icon}
                      alt=''
                      width={16}
                      height={16}
                      className='w-4 h-4'
                    />
                    {nav.label}
                </Link>
            ))
        }
      </section>
    </aside>
  )
}

export default AdventurerSidebar
