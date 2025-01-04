"use client"
import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'

interface IFormModal {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title: string
    buttonText: string
  }
  
  const FormModal = ({isOpen, onClose, children, title, buttonText}:IFormModal) => {
  const { pending } = useFormStatus();

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogHeader>{title}</DialogHeader>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogFooter>
            <Button type='submit' disabled={pending}>
                {buttonText}
            </Button>
        </DialogFooter>
      </Dialog>
    )
  }

export default FormModal