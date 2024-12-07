import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IFacilitator {
    image: string
    name: string
    link?: string
    linkedIn?: string
    role?: string
    x?: string
    email?: string
    summary: string

}

const FacilitatorCard = ({image, name, link,role, linkedIn, email, summary, x}: IFacilitator) => {
  return (
    <div className='w-full bg-black'>
        <h3 className="font-medium">Facilitator</h3>
        <div className="flex">
            <Image src={image} alt='facilitator image' width={45} height={45} className='object-cover' />
            <div className="flex flex-col">
                <h3 className="text-xl">{name}</h3>
                <p>{role && role}</p>
                <p>{link && link}</p>
            </div>
        </div>
        <p>{summary}</p>
        <div className="flex flex-center gap-x-6">
            {
                email && (
                    <Link href={email}>
                        <Image src={'/icons/linkedin.png'} alt='icon' width={24} height={24} className=''/>
                    </Link>
                )
            }
            {
                linkedIn && (
                    <Link href={linkedIn}>
                        <Image src={'/icons/linkedin.png'} alt='icon' width={24} height={24} className=''/>
                    </Link>
                )
            }
            {
                x && (
                    <Link href={x}>
                        <Image src={'/icons/linkedin.png'} alt='icon' width={24} height={24} className=''/>
                    </Link>
                )
            }
        </div>
    </div>
  )
}

export default FacilitatorCard