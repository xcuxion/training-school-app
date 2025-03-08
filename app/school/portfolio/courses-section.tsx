// "use client";
// import React, { ReactElement } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const courses = [
//   {
//     index: 1,
//     title: "Marketing & Strategy",
//     topics: [
//       "Digital Marketing",
//       "SEO",
//       "Social Media Marketing",
//       "Growth Hacking",
//       "User Behavior Analysis",
//     ],
//     description:
//       "Craft effective marketing strategies and business plans to drive growth and success. Learn digital marketing, branding, customer acquisition, and data-driven strategies to position products effectively in competitive markets.",
//   },
//   {
//     index: 2,
//     title: "Startup Essentials",
//     topics: [
//       "Lean Startup Methodology",
//       "MVP Development",
//       "Business Model Generation",
//       "Fundraising & Pitching",
//       "Revenue Strategies",
//     ],
//     description:
//       "Learn the foundational skills needed to launch and scale a startup. This includes identifying market gaps, creating viable business models, and securing funding to turn innovative ideas into thriving businesses.",
//   },
//   {
//     index: 3,
//     title: "Mobile App Development",
//     topics: [
//       "Flutter",
//       "Dart",
//       "State Management",
//       "Database Integration",
//       "Platform-Specific APIs",
//       "Deployment",
//     ],
//     description:
//       "Build cross-platform mobile applications using modern frameworks like Flutter. Learn to develop high-performance apps for Android and iOS, integrate databases, and optimize UI/UX for a seamless user experience.",
//   },
//   {
//     index: 4,
//     title: "Fullstack Web Development",
//     topics: [
//       "JavaScript",
//       "React",
//       "Next.js",
//       "Node.js",
//       "Express.js",
//       "Databases",
//       "Authentication",
//       "Deployment",
//     ],
//     description:
//       "Master modern web and software development with a focus on front-end, back-end, and database technologies. This program is designed for aspiring software engineers who want to build robust, scalable applications.",
//   },
//   {
//     index: 5,
//     title: "Data Analysis & Visualization",
//     topics: [
//       "Python",
//       "Pandas",
//       "NumPy",
//       "SQL",
//       "Data Visualization",
//       "Machine Learning Basics",
//     ],
//     description:
//       "Extract meaningful insights from data using analytical and visualization tools. Learn Python for data manipulation, SQL for querying databases, and visualization libraries to present data effectively.",
//   },
//   {
//     index: 6,
//     title: "Backend Engineering & DevOps",
//     topics: ["Python", "FastAPI", "AWS", "Docker", "Kubernetes", "CI/CD"],
//     description:
//       "Design and develop scalable backend systems. Learn API development, microservices architecture, DevOps practices, and cloud computing with AWS. Implement security measures and automate deployments.",
//   },
//   {
//     index: 7,
//     title: "Fundamentals of Programming",
//     topics: [
//       "Python",
//       "JavaScript",
//       "Data Structures & Algorithms",
//       "OOP",
//       "Debugging",
//       "Recursion",
//     ],
//     description:
//       "Understand the core principles of programming. Build problem-solving skills through algorithmic thinking, object-oriented programming, and debugging techniques in Python and JavaScript.",
//   },
//   {
//     index: 8,
//     title: "Systems Analysis & Design",
//     topics: [
//       "Software Development Life Cycle",
//       "Agile Methodologies",
//       "Requirement Gathering",
//       "Database Modeling",
//       "System Architecture",
//     ],
//     description:
//       "Learn how to analyze, design, and document software systems. Understand system requirements, database architecture, and Agile development for efficient software engineering.",
//   },
//   {
//     index: 9,
//     title: "UI/UX Design",
//     topics: [
//       "Design Principles",
//       "Figma",
//       "Adobe XD",
//       "Wireframing",
//       "Prototyping",
//       "Accessibility Standards",
//     ],
//     description:
//       "Create user-friendly and visually appealing digital experiences. Learn UI/UX principles, prototyping, and usability testing to design effective interfaces that enhance user satisfaction.",
//   },
// ];

// interface ICourse {
//   title: string | ReactElement;
//   description: string;
//   topics: string[];
//   index: number;
// }
// export const CourseCard = ({ title, description, index, topics }: ICourse) => {
//   return (

//     <motion.div
//       className="p-4 flex flex-col items-start bg-opacity-70 bg-gradient-to-br from-gray-800 to-gray-900 border-b-4 border-outline shadow-lg hover:scale-105 transition-transform duration-0 ease-out"
//       whileHover={{ scale: 1.05 }}
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.2 }}
//     >
//       <div className="flex flex-col">
//         <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
//         <p className="text-sm text-gray-300 mt-2">{description}</p>
//         {topics.length > 0 && (
//           <p className="text-xs text-gray-400 mt-2">
//             <span className="font-semibold text-gray-300">Topics: </span>
//             {topics.join(", ")}
//           </p>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// const CoursesSection = () => {
//   return (
//     <motion.div className="relative gap-6 mt-8 z-10">
//       <motion.span className="">
//         <motion.p>
//           At XCUXION School, we offer specialized programs designed to equip
//           students with in-demand skills across multiple disciplines. Each
//           program is structured to provide both foundational knowledge and
//           advanced expertise through intensive coursework and projects.
//         </motion.p>
//         <motion.div></motion.div>
//       </motion.span>
//       <motion.span className="grid grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <CourseCard {...course} key={course.index} />
//         ))}
//       </motion.span>
//     </motion.div>
//   );
// };

// export default CoursesSection;


"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    index: 1,
    title: "Marketing & Strategy",
    topics: [
      "Digital Marketing",
      "SEO",
      "Social Media Marketing",
      "Growth Hacking",
      "User Behavior Analysis",
    ],
    description:
      "Master digital marketing, branding, and data-driven strategies to effectively position products in competitive markets.",
  },
  {
    index: 2,
    title: "Startup Essentials",
    topics: [
      "Lean Startup Methodology",
      "MVP Development",
      "Business Model Generation",
      "Fundraising & Pitching",
      "Revenue Strategies",
    ],
    description:
      "Learn to identify market gaps, create viable business models, and secure funding to turn innovative ideas into thriving startups.",
  },
  {
    index: 3,
    title: "Mobile App Development",
    topics: ["Flutter", "Dart", "State Management", "Database Integration", "Deployment"],
    description:
      "Develop high-performance mobile apps using Flutter, optimizing UI/UX for a seamless experience.",
  },
  {
    index: 4,
    title: "Fullstack Web Development",
    topics: ["JavaScript", "React", "Next.js", "Node.js", "Express.js", "Databases", "Authentication"],
    description:
      "Master modern web development with a focus on front-end, back-end, and database integration to build scalable applications.",
  },
  {
    index: 5,
    title: "Data Analysis & Visualization",
    topics: ["Python", "Pandas", "NumPy", "SQL", "Data Visualization"],
    description:
      "Extract meaningful insights using Python, SQL, and visualization tools to present data effectively.",
  },
];
interface ICourse {
  title: string | ReactElement;
  description: string;
  topics: string[];
  index: number;
}
const CourseCard = ({ title, description, topics, index }: ICourse) => {
  return (
    <motion.div
      className="p-3 md:p-6 bg-secondary rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col gap-3"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-white text-sm md:text-base">{description}</p>
      <div className="text-sm text-gray-300 font-medium mt-2">
        <span className="font-bold text-white">Topics: </span>
        {topics.join(", ")}
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  return (
    <div className="py-12 md:px-6 max-w-5xl mx-auto">
      <motion.p
        className="text-center text-white max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Gain hands-on experience with our industry-focused courses designed to equip you with in-demand skills.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {courses.map((course) => (
          <CourseCard key={course.index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
