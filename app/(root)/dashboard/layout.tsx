"use client";
import { useUserStore } from "@/store/user-store";
import React, { ReactNode } from "react";

const layout = ({
  applicant,
  visitor,
}: {
  applicant: ReactNode;
  visitor: ReactNode;
}) => {
  const { user } = useUserStore();
  switch (user?.role) {
    case "applicant":
      return applicant;
    case "visitor":
      return visitor;
    default:
      break;
  }
};

export default layout;
