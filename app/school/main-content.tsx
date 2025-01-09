// import Image from 'next/image'
import React from 'react'
// import { GoMail } from "react-icons/go";
// import { BiLogoLinkedinSquare } from "react-icons/bi";
// import { BsTwitterX } from "react-icons/bs";

export const name = "Jessica";
const MainContent = ({children, className}: {children: React.ReactNode, className?:string}) => {

  return (
    <div className={`w-full md:w-2/3 p-4 ${className} `}>
      {children}
    </div>
  )
}

export default MainContent