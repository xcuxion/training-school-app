"use client";
import { useUserStore } from "@/store/user-store";
import React, { ReactNode } from "react";

const layout = ({
  applicant,
  visitor,
  facilitator,
}: {
  applicant: ReactNode;
  visitor: ReactNode;
  facilitator: ReactNode;
}) => {
  const { user } = useUserStore();
  switch (user?.role) {
    case "applicant":
      return applicant;
    case "visitor":
      return visitor;
    case "facilitator":
      return facilitator;
    default:
      break;
  }
};

export default layout;
