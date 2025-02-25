"use client";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const initial = {
  name: "",
  skillsets: [],
  yearsOfExperience: "",
  portfoioLink: "",
  cv: "",
};

const CenterApplicationPage = () => {
  const [value, setValue] = useState(initial);
  return (
    <form className="">
      <Input
        name="name"
        value={value.name}
        onChange={(e) => setValue({...value, name: e.target.value})}
      />
      <Input
        name="name"
        value={value.portfoioLink}
        onChange={(e) => setValue({...value, portfoioLink: e.target.value})}
      />
      <Input
        name="name"
        value={value.cv}
        onChange={(e) => setValue({...value, cv: e.target.value})}
      />
      <SubmitButton buttonText="Join" />
    </form>
  );
};

export default CenterApplicationPage;
