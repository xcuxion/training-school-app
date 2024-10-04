"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface LevelCardProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
}

const LevelCard = ({
    title, description, 
    primaryButtonText, secondaryButtonText,
    primaryButtonOnClick, secondaryButtonOnClick
}:LevelCardProps) => {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {
            primaryButtonText && (
                <Button className='rounded-full' onClick={primaryButtonOnClick}>{primaryButtonText}</Button>
            )
        }
        {
            secondaryButtonText && (
                <Button className='rounded-full' onClick={secondaryButtonOnClick}>{secondaryButtonText}</Button>
            )
        }
        <Button className='rounded-full' variant='destructive'>Hi</Button>
        <Button className='rounded-full' variant='outline'>Hi</Button>
        <Button className='rounded-full' variant='secondary'>Hi</Button>
        <Button className='rounded-full' variant='ghost'>Hi</Button>
        <Button className='rounded-full' variant='link'>Hi</Button>
      </CardFooter>
    </Card>
  )
}

export default LevelCard
