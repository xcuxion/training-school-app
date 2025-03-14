"use client";
import FormModal from "@/components/form-modal";
import { post_resource } from "@/server/actions/library.actions";
// import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useFormState } from "react-dom";

const UploadResource = ({
    show,
    onClose,
  }: {
    show: boolean;
    onClose: () => void;
  }) => {
      const formRef = useRef<HTMLFormElement>(null);
      // const router = useRouter();
      const [formState, formAction] = useFormState(post_resource, undefined);

  return (
    <FormModal isOpen={show} onClose={onClose} title="Create New Task">
      <form action={formAction} ref={formRef}>
        {formState?.errors.description}
      </form>
    </FormModal>  )
}

export default UploadResource