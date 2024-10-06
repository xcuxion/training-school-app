"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export interface LevelCardProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  isDojo?: boolean
}

const LevelCard = ({
    title, description, 
    primaryButtonText, secondaryButtonText,
    primaryButtonLink, secondaryButtonLink, isDojo = false
}:LevelCardProps) => {
  return (
    <Card className={`w-full h-full ${isDojo && isDojo === true? 'bg-accent-light' : 'bg-secondary-light'}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {
            primaryButtonText && (
              <Link href={primaryButtonLink!}>
                <Button className='rounded-full' >{primaryButtonText}</Button>
              </Link>
            )
        }
        {
            secondaryButtonText && (
              <Link href={secondaryButtonLink!}>
                <Button className='rounded-full' variant={'outline'} >{secondaryButtonText}</Button>
              </Link>
            )
        }
      </CardFooter>
    </Card>
  )
}

export default LevelCard
