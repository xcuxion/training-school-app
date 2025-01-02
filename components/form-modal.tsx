"use client"
import React, { useActionState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Button } from './ui/button'

interface IFormModal {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title: string
    formAction: any,
    buttonText: string
  }
  
  const FormModal = ({isOpen, onClose, children, title, buttonText, formAction}:IFormModal) => {
  const [state, action] = useActionState(formAction, undefined)
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogHeader>{title}</DialogHeader>
        <DialogContent>
            <form action={action}>
            {children}
            </form>
        </DialogContent>
        <DialogFooter>
            <Button>
                {buttonText}
            </Button>
        </DialogFooter>
      </Dialog>
    )
  }

export default FormModal