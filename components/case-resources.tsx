import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const links = [
    {
        image: '/icons/pdf.svg',
        label: 'User Stories',
        href: ''
    },
    {
        image: '/icons/ppt.svg',
        label: 'Business Plan',
        href: ''
    },
    {
        image: '/icons/img.svg',
        label: 'Project Timeline',
        href: ''
    },
]

const CaseResources = () => {
  return (
    <div className='flex flex-col gap-y-10'>
        <div className="bg-school-neutral p-3">
            <h3 className="text-lg font-semibold ">Case Docx</h3>
            <div className="flex flex-col">
                {
                    links.map((link, index)=>(
                        <Link key={index} href={link.href} className='p-3 flex items-center bg-school-light my-1 hover:bg-school-secondary'>
                            <Image src={link.image} alt='icon' width={30} height={30} className='object-cover mr-2'/>
                            <span className="font-medium">{link.label}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className="bg-school-light px-3 py-5 flex flex-col items-center border ">
            <Image src={'/images/sprint-image.svg'} alt='image' width={150} height={150} className=''/>
            <h2 className="text-lg font-medium">Case Sprint Board</h2>
            <p className="text-center font-normal my-1 leading-none">Check the workflow and project task assignments from the board.</p>
            <Button className='bg-school-primary text-white rounded-full' asChild>
                <Link href={'/school/case/sprint-board'}>
                    Enter Sprint
                </Link>
            </Button>           
        </div>
    </div>
  )
}

export default CaseResources