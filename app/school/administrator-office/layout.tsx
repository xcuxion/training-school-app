import React from "react";
import AdminHeader from "./admin-header";
import HeaderTitle from "./header-title";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminHeader />
      <HeaderTitle/>
      <main className="px-10">{children}</main>
    </>
  );
};

export default layout;
