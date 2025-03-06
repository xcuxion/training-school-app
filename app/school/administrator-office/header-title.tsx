"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import RegisterAdmin from "./register-admin";

const subNavs = [
  {
    starter: "",
    navs: [],
    title: "",
  },
  {
    starter: "human-resource",
    navs: [
      {
        label: "Students",
        href: "/human-resource/students",
      },
      {
        label: "Facilitators",
        href: "/human-resource/facilitators",
      },
    ],
    title: "People",
  },
  {
    starter: "admissions",
    navs: [
      {
        label: "Pending",
        href: "/admissions/prospects",
      },
      {
        label: "Admitted",
        href: "/admissions/admitted",
      },
    ],
    title: "Admissions Office",
  },
  {
    starter: "modules",
    navs: [
      {
        label: "Design",
        href: "/modules/design",
      },
      {
        label: "Engineering",
        href: "/modules/engineering",
      },
    ],
    title: "Course Management",
  },
];

const HeaderTitle = () => {
  const pathname = usePathname();

  const currentSection = subNavs.find((section) =>
    pathname.startsWith(`/administrator-office/${section.starter}`)
  );

  const title = currentSection ? currentSection.title : "";
  const navs = currentSection ? currentSection.navs : [];

  return (
    <div className="mb-4 px-10 sticky py-1 top-0 left-0 z-10 bg-black">
      <h1 className="text-4xl font-semibold mb-2">{title}</h1>
      <nav className="flex flex-row text-lg gap-4">
        {navs.map((link, index) => {
          const active = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={
                active ? "text-fontColor font-medium" : "font-medium opacity-50"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

    </div>
  );
};

export default HeaderTitle;
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// const subNavs = [
//     {
//       starter: "human-resource",
//       navs: [
//         {
//           label: "Students",
//           href: "/human-resource/students",
//         },
//         {
//           label: "Facilitators",
//           href: "/human-resource/facilitators",
//         },
//       ],
//       title: "People",
//     },
//     {
//       starter: "admissions",
//       navs: [
//         {
//           label: "Pending",
//           href: "/admissions/prospects",
//         },
//         {
//           label: "Admitted",
//           href: "/admissions/admitted",
//         },
//       ],
//       title: "Admissions Office",
//     },
//     {
//       starter: "modules",
//       navs: [
//         {
//           label: "Design",
//           href: "/modules/design",
//         },
//         {
//           label: "Engineering",
//           href: "/modules/engineering",
//         },
//       ],
//       title: "Course Management",
//     },
//   ];

// interface navLink {
//   route: string;
//   label: string;
// }

// interface HeaderTitleProps {
//   title: string;
//   starter: string;
//   navs: navLink[];
// }

// const HeaderTitle = () => {
//   const pathname = usePathname();
//   return (
//     <div className="mb-4 px-10 sticky py-1 top-0 left-0 z-10 bg-black">
//       <h1 className="text-4xl font-semibold mb-2">{title}</h1>
//       <nav className="flex flex-row text-lg gap-4">
//         {navs.map((link, index) => {
//           const active =
//             (link.route === `/${starter}` &&
//               pathname === `/${starter}`) ||
//             (pathname.startsWith(link.route) &&
//               link.route !== `/${starter}`);
//           return (
//             <Link
//               key={index}
//               href={link.route}
//               className={
//                 active ? "text-fontColor font-medium" : "font-medium opacity-50"
//               }
//             >
//               {link.label}
//             </Link>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default HeaderTitle;
