import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TW | Adventurer's Guild",
    description: "The Adventurer's Guild",
  };

const layout = (
    {children}: {children: React.ReactNode}
) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout
