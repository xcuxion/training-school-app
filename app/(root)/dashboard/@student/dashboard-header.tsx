import { Input } from '@/components/ui/input';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navigations = [
    {
      label: "Overview",
      href: "/",
    },
    {
      label: "Learning",
      href: "/learning-space",
    },
    {
      label: "Network",
      href: "/services",
    },
    {
      label: "Publications",
      href: "/contact",
    },
    {
      label: "Teams",
      href: "/contact",
    },
  ];
const DashboardHeader = () => {
  return (
    <div>
      <section className="">
        <div className="">
          <Image
            src={"/logo.svg"}
            alt=""
            width={100}
            height={45}
            className=""
          />
          <h1 className="font-bold text-2xl">Solomon Ayisi</h1>
        </div>
        <div className="">
          <Input className="" placeholder="" type="" />
          <span></span>
          <Image src={"/images/"} alt="" width={100} height={45} className="" />
        </div>
      </section>
      <section className="">
        {navigations.map((nav, index) => (
          <Link href={nav.href} key={index} className="">
            {nav.label}
          </Link>
        ))}
      </section>
    </div>  )
}

export default DashboardHeader