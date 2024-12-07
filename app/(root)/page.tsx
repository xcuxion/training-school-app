import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Modules from "@/components/portfolio/Modules";
import Partners from "@/components/portfolio/Partners";
import SignIn from "./sign-in";
import React from "react";
/*ts-ignore*/

import Link from 'next/link'

const links = [
  {
    label: 'School Overview',
    link: '/school'
  },
  {
    label: 'School Library',
    link: '/school/library'
  },
  {
    label: 'School Cases',
    link: '/school/cases'
  },
  {
    label: 'School Assignments',
    link: '/school/assignment'
  },
]

const page = () => {
  return (
    <div className=''>

      
      <Header/>

      {
        links.map((nav, index)=>(
          <Link className='p-4 rounded-md bg-green-400 text-white mx-4' href={nav.link} key={index}>{nav.label}</Link>
        ))
      }
      <Hero/>
      <div className='bg-secondary-light rounded-xl'>
        <Modules/>
        <Partners/>
      </div>
    </div>
  );
};

export default page;
