"use client"
import { fetch_all_applications } from '@/lib/actions/admission.actions'
import React, { useEffect } from 'react'

const AdmissionPage = () => {
  useEffect(()=>{
    const fetch = async () => {
      const data = await fetch_all_applications()
      console.log(data)
    }
    fetch()
  }, [])
  return (
    <div>
      hi
    </div>
  )
}

export default AdmissionPage