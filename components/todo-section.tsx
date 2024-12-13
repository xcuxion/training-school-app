import React from 'react';
import { FiPlus } from "react-icons/fi";

const todayDate = new Date().getDay();
const month = new Date().toLocaleString('default', { month: 'short' });

const displayDays = () => {
  const days = []; 
  for (let index = 1; index <= 6; index++) { 
    days.push(index + todayDate);
  }
  return days;
};

interface Task {
  content: string;
  state: 'Uncompleted' | 'Completed';
  period: string;
}

const Tasks = ({ content, state, period }: Task) => {
  return (
    <div className='m-3 p-2 bg-violet-100'>
      <p>{content}</p>
      <div className='flex justify-between mt-2'>
         <span className={`status ${state}`}>
          {state === 'Completed' ? 'Completed' : 'UnCompleted'}
        </span>
        <p>{period}</p>
       
      </div>
    </div>
  );
};

const TodoSection = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-school-neutral p-6">
        <div className='flex justify-between mb-4'>
        <h1>To-Dos</h1>
        <FiPlus className='text-4xl bg-slate-200 px-2 rounded-lg hover:bg-slate-300 '/>
        </div>
        
        <div className=" w-full mb-6 flex justify-between">
          {
            displayDays().map((day, index) => (
              <div key={index} className={`flex flex-col px-2 py-1 rounded-sm items-center justify-center ${index === 0? 'bg-violet-200': ' '}`}>
                <span className="">{day}</span>
                <span className="">{month}</span>
              </div>
            ))
          }
        </div>
        
        <div>
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