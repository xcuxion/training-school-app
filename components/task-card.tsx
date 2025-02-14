import React from "react";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";

const facilitatorData = {
  image: "/images/bayat.jpg",
  name: "Bayat Osman",
  summary:
    "Excited about innovations in blockchain technology and financial forecasting",
  email: "bayatosman123@gmail.com",
  link: "bayat.com",
  linkedIn: "https://linkedin.com/in/bayat-123",
  role: "Software Engineer",
  x: "https://x.com/bayati",
};

const TaskCard = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
      </div>

      <div className="flex flex-row gap-3">
        <Link
          href={facilitatorData.link}
          className="flex bg-black p-2 mb-2"
        >
          <FaRegFilePdf className="text-xl" /> Course Materials
        </Link>

        <Link href={facilitatorData.link}
        className="flex bg-black p-2 mb-2 rounded-lg ">
          <FaRegFilePdf />
          Assignment(s)
        </Link>

        <Link href={facilitatorData.link}
        className="flex bg-black p-2 mb-2 rounded-lg ">
          <FaRegFilePdf />
          Activities
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
