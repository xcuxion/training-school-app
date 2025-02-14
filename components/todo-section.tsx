import React from "react";
import { FiPlus } from "react-icons/fi";

const todayDate = new Date().getDay();
const month = new Date().toLocaleString("default", { month: "short" });

const displayDays = () => {
  const days = [];
  for (let index = 1; index <= 5; index++) {
    days.push(index + todayDate);
  }
  return days;
};

interface Task {
  content: string;
  state: "Uncompleted" | "Completed";
  period: string;
}

const Tasks = ({ content, state, period }: Task) => {
  return (
    <div className="p-2 bg-black  rounded-md">
      <p className="font-semibold">{content}</p>
      <div className="flex items-center space-x-10 mt-1 text-sm">
        <span className="">
          {state}
        </span>
        <p className="">{period}</p>
      </div>
    </div>
  );
};

const TodoSection = () => {
  return (
    <>
      <div className="w-full bg-secondary border border-outline rounded-md p-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold leading-tight">To-Dos</h1>
          <span className="w-6 h-6 flex flex-center bg-secondary hover:bg-fuchsia-300 hover:cursor-pointer rounded-sm" >
            <FiPlus/>
          </span>
        </div>
        <div className=" w-full grid grid-cols-5 my-3">
          {displayDays().map((day, index) => (
            <div
              key={index}
              className={`flex flex-col px-2 py-1 rounded-sm items-center justify-center ${
                index === 0 ? "bg-secondary" : "opacity-60"
              }`}
            >
              <span className="text-xl font-semibold">{day}</span>
              <span className="text-sm">{month}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Tasks
            content="Complete use case for E-commerce System"
            state="Uncompleted"
            period="10:00am - 2:34pm"
          />
          <Tasks
            content="Complete use case for E-commerce System"
            state="Uncompleted"
            period="10:00am - 2:34pm"
          />
          <Tasks
            content="Complete use case for E-commerce System"
            state="Uncompleted"
            period="10:00am - 2:34pm"
          />
        </div>
      </div>
    </>
  );
};

export default TodoSection;
