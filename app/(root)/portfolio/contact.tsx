"use client"
import React from 'react'
import InquiryForm from './inquiry-form'
import ItemList from './item-list'
import { motion } from 'framer-motion'
import Footer from './footer'

const contacts = [
    {
        title: '(+233) 207-565-990',
        image: '',
        subtitle: 'Phone'
    },
    {
        title: 'school@xcuxion.org',
        image: '',
        subtitle: 'Email'
    },
    {
        title: 'Connect via Slack',
        image: '',
        subtitle: 'Community'
    },
    {
        title: 'KNUST & UG-Legon',
        image: '',
        subtitle: 'Location'
    },
]

const Contact = () => {
  return (
    <motion.div id='contact' className='min-h-screen py-5 flex flex-col flex-center'>
        <motion.h3 className="text-4xl fnt-semibold">Contact Us</motion.h3>
        <motion.p className="text-lg w-1/2 mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
        <motion.div className="grid grid-cols-2 gap-x-10 mt-4">
            <motion.div className="space-y-4">
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