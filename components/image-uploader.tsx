"use client"
import React, {useState} from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useEdgeStore } from '@/lib/edgestore'
import { SingleImageDropzone } from './single-image-dropzone'

const ImageUploader = () => {
    const [file, setFile] = useState<File>()
    const {edgestore} = useEdgeStore()
    const [progress, setProgess] = useState<number>()
    const [urls, setUrls] = useState<{url: string; thumbnailUrl: string|null}>()
  return (
    <div className='flex flex-col items-center m-6 gap-2
    '>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
        dropzoneOptions={{
            maxSize: 1024 * 1024 * 4
        }}
      />
        <div className='h-1.5 w-44 border rounded overflow-hidden'>
            <div className="h-full bg-black transition-all duration-150" style={{
                width: `${progress}%`
            }}></div>
        </div>
        <Button className="bg-black text-fontColor rounded px-2 hover:opacity-80" onClick={async()=>{
            if (file){
                const res = await edgestore.myPublicImages.upload({file, onProgressChange: (progress) => {
                    setProgess(progress)
                }})

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