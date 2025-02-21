// "use client";
// import React, { ReactElement } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const courses = [
//   {
//     image: "/images/strategy.jpg",
//     title: "Marketing & Strategy",
//     subtitle: "General Course",
//     description:
//       "Learn to craft effective marketing strategies and business plans to drive growth and success.",
//   },
//   {
//     image: "/images/startupessentials.jpg",
//     title: "Startup Essentials",
//     subtitle: "General Course",
//     description:
//       "Discover the foundational skills needed to launch and scale a startup, from ideation to execution.",
//   },
//   {
//     image: "/images/flutter.jpg",
//     title: "Mobile App Development",
//     subtitle: "Track-based",
//     description:
//       "Build cross-platform mobile applications using modern frameworks like Flutter and React Native.",
//   },
//   {
//     image: "/images/extjs.jpg",
//     title: "Fullstack Web Development",
//     subtitle: "Track-based",
//     description:
//       "Master front-end and back-end development to create dynamic and responsive web applications.",
//   },
//   {
//     image: "/images/python.jpg",
//     title: "Cloud & Backend Engineering",
//     subtitle: "Track-based",
//     description:
//       "Learn cloud computing, server management, and backend development for scalable solutions.",
//   },
//   {
//     image: "/images/react.jpg",
//     title: "Data Analysis",
//     subtitle: "General Course",
//     description:
//       "Gain proficiency in data collection, cleaning, and analysis to make data-driven decisions.",
//   },
//   {
//     image: "/images/programming.jpg",
//     title: "Programming Fundamentals",
//     subtitle: "General Course",
//     description:
//       "Build a strong foundation in programming concepts and problem-solving techniques.",
//   },
//   {
//     image: "/images/systems.jpg",
//     title: "Systems Design and Analysis",
//     subtitle: "General Course",
//     description:
//       "Understand complex systems and learn to design scalable and efficient architectures.",
//   },
// ];



// export const CourseCard = ({
//   subtitle,
//   image,
//   title,
//   description,
// }: ICourse) => {
//   return (
//     <div className="p-4 flex flex-col items-start bg-gradient-to-r from-gray-900  to-gray-800  border border-gray-700 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-out">
//       <Image
//         src={image}
//         alt="image"
//         width={60}
//         height={60}
//         className="mb-4 w-[60px] h-[60px] object-cover rounded-lg"
//       />
//       <div className="flex flex-col">
//         <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>
//         <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
//         <p className="text-xs md:text-sm text-gray-500 mt-1">{description}</p>
//       </div>
//     </div>
//   );
// };
// const CoursesSection = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="px-5 md:px-20 py-5 md:py-0 min-h-screen md:h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col flex-center"
//     >
//       <video
//   autoPlay
//   loop
//   muted
//   playsInline
//   disablePictureInPicture
//   controlsList="nodownload nofullscreen noremoteplayback"
//   className="fixed top-0 left-0 w-full h-full object-cover z-0 bg-cover"
// >
//   <source src="/videos/codingbg.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>

//       <motion.h3
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-xl md:text-4xl z-10"
//       >
//         Our Courses
//       </motion.h3>
//       <motion.p
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="md:text-lg md:w-3/4 mx-auto my-2 z-10 text-center"
//       >
//         Gain hands-on training in software development, business strategy,
//         marketing, and fundraising. Our expert-led courses equip you with the
//         tools to launch and scale your startup successfully.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="grid md:grid-cols-4 mt-4 gap-4 z-10"
//       >
//         {courses.map((course, index) => (
//           <CourseCard {...course} key={index} />
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CoursesSection;

"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const courses = [
  {
    image: "/images/strategy.jpg",
    title: "Marketing & Strategy",
    subtitle: "General Course",
    description:
      "Craft effective marketing strategies and business plans to drive growth and success.",
  },
  {
    image: "/images/startupessentials.jpg",
    title: "Startup Essentials",
    subtitle: "General Course",
    description:
      "Learn the foundational skills needed to launch and scale a startup.",
  },
  {
    image: "/images/flutter.jpg",
    title: "Mobile App Development",
    subtitle: "Track-based",
    description:
      "Build cross-platform mobile applications using modern frameworks like Flutter.",
  },
  {
    image: "/images/extjs.jpg",
    title: "Fullstack Web Development",
    subtitle: "Track-based",
    description:
      "Master front-end and back-end development for dynamic web applications.",
  },
  {
    image: "/images/python.jpg",
    title: "Cloud & Backend Engineering",
    subtitle: "Track-based",
    description:
      "Learn cloud computing, server management, and backend development.",
  },
  {
    image: "/images/react.jpg",
    title: "Data Analysis",
    subtitle: "General Course",
    description:
      "Gain proficiency in data collection, cleaning, and analysis.",
  },
  {
    image: "/images/programming.jpg",
    title: "Programming Fundamentals",
    subtitle: "General Course",
    description:
      "Build a strong foundation in programming concepts and problem-solving.",
  },
  {
    image: "/images/systems.jpg",
    title: "Systems Design and Analysis",
    subtitle: "General Course",
    description:
      "Understand complex systems and design scalable, efficient architectures.",
  },
];

interface ICourse {
  subtitle: string;
  title: string | ReactElement;
  image: string;
  description: string;
}
export const CourseCard = ({
  subtitle,
  image,
  title,
  description,
}: ICourse) => {
  return (
    <motion.div
      className="p-4 flex flex-col items-start bg-opacity-70 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-out"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={image}
        alt={"title"}
        width={80}
        height={80}
        className="mb-4 w-[80px] h-[80px] object-cover rounded-lg"
        priority
      />
      <div className="flex flex-col">
        <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-5 relative md:px-20 py-10 min-h-screen "
    >
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        poster="/images/coding.jpg"
        controlsList="nodownload nofullscreen noremoteplayback"
        className="fixed top-0 left-0 w-full h-full object-cover -z-0 bg-cover"
      >
        <source src="/videos/codingbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="relative z-10 text-center text-white space-y-4">
        <motion.h3 className="text-3xl md:text-5xl font-bold">
          Our Courses
        </motion.h3>
        <motion.p className="md:text-lg md:w-3/4 mx-auto">
          Gain hands-on training in software development, business strategy, and more. Our expert-led courses equip you to launch and scale your startup successfully.
        </motion.p>
      </div>

      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 z-10"
      >
        {courses.map((course, index) => (
          <CourseCard {...course} key={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CoursesSection;
