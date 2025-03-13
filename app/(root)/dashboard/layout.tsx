"use client";
import { useUserStore } from "@/store/user-store";
import React, { ReactNode } from "react";

const layout = ({
  applicant,
  visitor,
  facilitator,
  student
}: {
  applicant: ReactNode;
  visitor: ReactNode;
  facilitator: ReactNode;
  student: ReactNode;
}) => {
  const { user } = useUserStore();
  switch (user?.role) {
    case "applicant":
      return applicant;
    case "visitor":
      return visitor;
    case "facilitator":
      return facilitator;
    case "student":
      return student;
    default:
      break;
  }
};

export default layout;
