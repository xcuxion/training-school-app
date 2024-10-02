import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const navigations = [
    {
      link: '',
      label: 'Home'
    },
    {
      link: '',
      label: 'Training'
    },
    {
      link: '',
      label: 'Facilitators'
    },
    {
      link: '',
      label: 'Alumni'
    },
  ]

const Header = () => {
  return (
    <div className="flex flex-between sticky top-0 left-0 bg-tw-primary ">
    <Image 
      src={'/icons/tw-logo.png'}
      alt='logo'
      width={60}
      height={60}
      className='object-cover'
    />
    <nav className="w-1/3 flex flex-between">
      {
        navigations.map((nav, index) => (
          <Link href={nav.link} key={index}>
            {nav.label}
          </Link>
        ))
      }
      <Button 
        className='rounded-full border-2 hover:shadow-md hover:border-tw-accent hover:text-tw-accent  font-medium'
      >
        Log in
      </Button>
    </nav>
  </div>
  )
}

export default Header
