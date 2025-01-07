import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type TResource = {
  url: string
  title: string
}

const ResourceCard = ({url, title}: TResource) => {
  return (
    <Link href={url} className='flex items-center h-16 border'>
      <Image src={'/icons/pdf.svg'} alt='' width={45} height={45} className=''/>
      <p className="text-base">{title}</p>

    </Link>
  )
}

export default ResourceCard