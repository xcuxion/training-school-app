"use client";
import React from "react";
import AdminHeader from "./admin-header";
import HeaderTitle from "./header-title";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Hide the Sidebar on /school/admission-portal
  const shouldShowHeader = pathname !== "/school/administrator-office";
  return (
    <>
      {shouldShowHeader && (
        <>
          <AdminHeader />
          <HeaderTitle />
        </>
      )}
      <main className="px-10">{children}</main>
    </>
  );
};

export default layout;
