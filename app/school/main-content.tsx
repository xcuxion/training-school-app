import Image from 'next/image'
import React from 'react'
import { GoMail } from "react-icons/go";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

export const names = ["Yasmins"];
const MainContent = ({children}: {children: React.ReactNode}) => {

  return (
    <div className='w-2/3 '>
      {children}
    </div>
  )
}

export default MainContent