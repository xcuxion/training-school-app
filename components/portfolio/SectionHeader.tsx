import React from 'react'

interface SectionHeaderProps {
  title: string;
  description: string;
  highlight: string;
}

const SectionHeader = ({title, description, highlight}: SectionHeaderProps) => {
  return (
    <div className='flex flex-start py-4'>
        <h1 className='w-2/5 text-3xl font-semibold capitalize'>{title.split(highlight).map((part, i) => 
        i > 0 ? <React.Fragment key={i}><span className='text-accent-light'>{highlight}</span>{part}</React.Fragment> : part
        )}</h1>
        <p className='text-lg w-2/5'>{description}</p>
    </div>
  )
}

export default SectionHeader