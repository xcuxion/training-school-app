"use client";
import React from "react";
import AdminHeader from "./admin-header";
import HeaderTitle from "./header-title";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Define paths where the header should be hidden
  const exclusions = [
    "/school/administrator-office",
    "/school/administrator-office/confirmation",
  ];

  // Check if the pathname matches exactly any exclusion
  const shouldShowHeader = !exclusions.includes(pathname);

  return (
    <>
      {shouldShowHeader && (
        <>
          {/* <AdminHeader /> */}
          {/* <HeaderTitle /> */}
        </>
      )}
      <main className="px-10">{children}</main>
    </>
  );
};

export default Layout;
