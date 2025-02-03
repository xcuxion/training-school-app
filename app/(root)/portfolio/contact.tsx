"use client"
import React from 'react'
import InquiryForm from './inquiry-form'
import ItemList from './item-list'
import { motion } from 'framer-motion'
import Footer from './footer'
import Link from 'next/link'

const contacts = [
    {
        title: '(+233) 207-565-990',
        image: '/icons/phone.jpg',
        subtitle: 'Phone'
    },
    {
        title: 'school@xcuxion.org',
        image: '/icons/email.jpg',
        subtitle: 'Email'
    },
    {
        title: <Link href="https://xcuxionschoolbatch25.slack.com/archives/C08B6SFDQT0
">Connect via Slack</Link>,
        image: '/icons/community.jpg',
        subtitle: 'Community'
    },
    {
        title: 'KNUST & UG-Legon',
        image: '/icons/location.jpg',
        subtitle: 'Location'
    },
]
const Contact = () => {
  return (
    <motion.div id='contact' className='min-h-screen px-5 md:px-0 py-5 flex flex-col md:flex-center'>
        <motion.h3 className="text-xl md:text-4xl font-semibold text-center">Contact Us</motion.h3>
        <motion.p className="md:text-lg md:w-1/2 mx-auto text-center">Get in touch with us via the following</motion.p>
        <motion.div className="grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-10 mt-4">
            <motion.div className="space-y-2 md:space-y-4">
            {
                contacts.map((contact, index)=>(
                    <ItemList {...contact} key={index} />
                ))
            }
            </motion.div>
            <InquiryForm/>
        </motion.div>
        
    </motion.div>
  )
}

export default Contact