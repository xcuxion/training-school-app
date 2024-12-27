import Image from 'next/image'
import React from 'react'

export interface IFacilitator {
    image: string
    name: string
    link?: string
    linkedIn?: string
    role?: string
}

const FacilitatorCard = ({image, name, link,role}: IFacilitator) => {
  return (
    <div className='w-full'>
        <div className="flex" mb-2 >
            <Image src={image} alt='facilitator image' width={120} height={45} className='w-[50px] h-[50px] object-cover rounded-md mr-2' />
            <div className="flex flex-col mt-3">
                <h3 className='text-sm'>{role && role}</h3>
                <p className='text-xs '> Facilitated by <span className='text-blue-500'>
              {name}</span> ({link && link})</p>
            </div>
        </div>
        {/* <div className="flex flex-center gap-x-6">
            {
                email && (
                    <Link href={email}>
                        <Image src={'/icons/linkedIn.png'} alt='icon' width={24} height={24} className=''/>
                    </Link>
                )
            }
            {
                linkedIn && (
                    <Link href={linkedIn}>
                        <Image src={'/icons/linkedIn.png'} alt='icon' width={24} height={24} className=''/>
                    </Link>
                )
            }
            {
                x && (
                    <Link href={x}>
                        <Image src={'/icons/linkedIn.png'} alt='icon' width={24} height={24} className=''/>
                    </Link>
                )
            }
        </div> */}
    </div>
  )
}

export default FacilitatorCard