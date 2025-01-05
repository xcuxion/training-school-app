"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { DialogTitle } from "@radix-ui/react-dialog";

interface IFormModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  buttonText: string;
}

const FormModal = ({
  isOpen,
  onClose,
  children,
  title,
  buttonText,
}: IFormModal) => {
  const { pending } = useFormStatus();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="capitalize text-2xl font-bold">{title}</DialogTitle>
        {children}
        {/* <Button type="submit" disabled={pending}>
          {buttonText}
        </Button> */}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
