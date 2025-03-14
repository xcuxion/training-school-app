"use client";
import FormModal from "@/components/form-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { new_task } from "@/server/actions/sprint.actions";
import React, { useRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tiptap from "@/components/Tiptap";
import SubmitButton from "@/components/submit-button";

const initials = {
  status: "todo",
  title: "",
  description: "",
  priority: "",
  due_date: "",
  module: "",
  assignees: [],
};

const TaskForm = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(new_task, undefined);
  const [values, setValues] = useState(initials);
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
    }
  }, [formState]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Create New Task">
      <p className="opacity-75">
        Required fields are marked with an asterisk{" "}
        <span className="text-red-500">*</span>
      </p>
      <form action={formAction} ref={formRef}>
        <section className="">
          <div className="">
            <Label></Label>
            <Input
              type="date"
              onChange={(e) =>
                setValues({ ...values, due_date: e.target.value })
              }
              name=""
              value={values.due_date}
            />
          </div>
          <div className="">
            <Label></Label>
            <Select
              onValueChange={(choice) =>
                setValues({ ...values, status: choice })
              }
              name="country"
            >
              <SelectTrigger>
                <SelectValue placeholder="To-do" />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                <SelectItem value="todo">To-do</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label>Title</Label>
            <Input
              type="text"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              name=""
              value={values.title}
            />
          </div>
          <div className="">
            <Label>Description</Label>
            <Tiptap description={values.description} onChange={(e)=>setValues({...values, description: e})}/>
          </div>
        </section>
        <SubmitButton buttonText="Save"/>
      </form>

    </FormModal>
  );
};

export default TaskForm;
