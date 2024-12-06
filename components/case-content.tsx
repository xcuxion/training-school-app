import React from 'react'

interface CaseContentProps {
    title: string;
    body?: string;
    listedContent?: string[]
}

const CaseContent = ({title, body, listedContent}: CaseContentProps) => {
  return (
    <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="">{body && body}</p>
        {
            listedContent && 
                <ul>
                    {
                        listedContent.map((text, index) => (
                            <li key={index}>{text}</li>

                        ))
                    }
                </ul>
            
        }
    </div>
  )
}

export default CaseContent