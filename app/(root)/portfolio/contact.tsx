import React from 'react'
import InquiryForm from './inquiry-form'
import ItemList from './item-list'

const contacts = [
    {
        title: '',
        image: '',
        subtitle: ''
    },
    {
        title: '',
        image: '',
        subtitle: ''
    },
    {
        title: '',
        image: '',
        subtitle: ''
    },
    {
        title: '',
        image: '',
        subtitle: ''
    },
]

const Contact = () => {
  return (
    <div className=''>
        <h1 className="">Contact Us</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-cols-2">
            <div className="">
            {
                contacts.map((contact, index)=>(
                    <ItemList {...contact} key={index} />
                ))
            }
            </div>
            <InquiryForm/>
        </div>
    </div>
  )
}

export default Contact