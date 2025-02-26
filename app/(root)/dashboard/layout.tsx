import React from "react";

const LandingLayout = ({
  children,
  admissionPortal,
  learning,
}: {
  children: React.ReactNode;
  admissionPortal: React.ReactNode;
  learning: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {learning}
      {admissionPortal}
    </div>
  );
};

export default LandingLayout;
