"use client"
import React, {useState} from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useEdgeStore } from '@/lib/edgestore'

const ImageUploader = () => {
    const [file, setFile] = useState<File>()
    const {edgestore} = useEdgeStore()
    const [urls, setUrls] = useState<{url: string; thumbnailUrl: string|null}>()
  return (
    <div className='flex flex-col items-center m-6 gap-2
    '>
        <Input type='file' onChange={(e) => {setFile(e.target.files?.[0])}}/>
        <Button className="bg-white text-black rounded px-2 hover:opacity-80" onClick={async()=>{
            if (file){
                const res = await edgestore.myPublicImages.upload({file})
                setUrls({
                    url: res.url,
                    thumbnailUrl: res.thumbnailUrl
                })
            }
        }}>Upload</Button>
    </div>
  )
}

export default ImageUploader