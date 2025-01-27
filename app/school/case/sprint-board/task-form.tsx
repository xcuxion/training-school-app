"use client";
import FormModal from "@/components/form-modal";
import { new_task } from "@/lib/actions/sprint.actions";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect } from "react";
import { useFormState } from "react-dom";

const TaskForm = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [formState, formAction] = useFormState(new_task, undefined);

  useEffect(() => {
    if (formState?.success && formState?.data) {
      // update(formState.data);
      formRef.current?.reset();
      if (formState?.data.applicant?.id) {
        router.push("/admission-portal");
      } else if (formState?.data.facilitator?.id) {
        router.push("/admission-portal");
      }
    }
  }, [formState]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Create New Task">
      <form action={formAction} ref={formRef}>
        
      </form>
    </FormModal>
  );
};

export default TaskForm;
