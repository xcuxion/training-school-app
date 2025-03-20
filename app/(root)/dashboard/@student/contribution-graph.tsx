// File: components/contribution-graph.tsx
"use client"
import { useEffect, useState } from "react";

export default function ContributionGraph() {
  const [graphData, setGraphData] = useState<number[][]>([]);
  
  useEffect(() => {
    // Generate random data for the contribution graph
    // In a real app, this would come from an API
    const generateData = () => {
      const data = [];
      for (let i = 0; i < 7; i++) {
        const weekData = [];
        for (let j = 0; j < 18; j++) {
          weekData.push(Math.floor(Math.random() * 4)); // 0 to 3 for activity levels
        }
        data.push(weekData);
      }
      return data;
    };
    
    setGraphData(generateData());
  }, []);
  
  // Function to get the appropriate color based on activity level
  const getActivityColor = (level: number) => {
    switch (level) {
      case 0: return "bg-zinc-800";
      case 1: return "bg-emerald-900";
      case 2: return "bg-emerald-700";
      case 3: return "bg-emerald-500";
      default: return "bg-zinc-800";
    }
  };
  
  // Days of the week
  const days = ["Mon", "Wed", "Fri"];
  
  // Months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[750px]">
        <div className="flex">
          <div className="w-8 mr-2">
            {days.map((day, index) => (
              <div key={index} className="h-4 flex items-center justify-end">
                <span className="text-xs text-zinc-500">{day}</span>
              </div>
            ))}
          </div>
          
          <div className="flex-grow">
            <div className="flex justify-between mb-1">
              {months.map((month, index) => (
                <span key={index} className="text-xs text-zinc-500">{month}</span>
              ))}
            </div>
            
            <div className="flex gap-1">
              {graphData.map((weekData, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {weekData.map((level, dayIndex) => (
                    <div 
                      key={dayIndex} 
                      className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`}
                      title={`${level} activities on this day`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}