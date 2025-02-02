import React, { useState } from "react";
import FormModal from "../form-modal";
import { useFormState } from "react-dom";
import { new_case } from "@/lib/actions/case.actions";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tiptap from "../Tiptap";

type TCase = {
  title: string;
  description: string;
  module: string;
  requirements: string[];
  makePublic: boolean;
};

const initialValues: TCase = {
  title: "",
  description: "",
  module: "",
  requirements: [],
  makePublic: false,
};

const CaseForm = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [state, action] = useFormState(new_case, undefined);
  const [values, setValues] = useState<TCase>(initialValues);

  return (
    <FormModal title="Case Form" onClose={onClose} isOpen={show}>
      <form action={action}>
        <>
          <Input
            id="title"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
          {state?.errors?.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </>
        <>
          <Textarea
            id="description"
            name="description"
            placeholder="description"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
          {state?.errors?.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </>
        <span className="">
          <Label>Should this case be made public?</Label>
          <RadioGroup
            defaultValue="no"
            className="flex gap-x-6 h-9 items-center"
            name="makePublic"
            onValueChange={(choice) => {
              setValues({ ...values, makePublic: choice==="yes"?true: false});
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </span>
        <span className="">
          <Label>Module</Label>
          <Select
            onValueChange={(choice) => setValues({ ...values, module: choice })}
            name="module"
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="productManagement">
                Kwame Nkrumah University of Science and Technology
              </SelectItem>
              <SelectItem value="softwareEngineering">University of Ghana - Legon</SelectItem>
              <SelectItem value="marketing">Ashesi University</SelectItem>
              <SelectItem value="strategy">Not a student</SelectItem>
              <SelectItem value="startupBusiness">Not a student</SelectItem>
            </SelectContent>
          </Select>

          {state?.errors?.module && (
            <p className="text-sm text-red-500">{state.errors.module}</p>
          )}
        </span>
        {/* <Tiptap/> */}
      </form>
    </FormModal>
  );
};

export default CaseForm;
