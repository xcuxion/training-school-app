"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Layout, Sidebar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const data = [
  { name: 'Mon', xp: 400 },
  { name: 'Tue', xp: 300 },
  { name: 'Wed', xp: 500 },
  { name: 'Thu', xp: 280 },
  { name: 'Fri', xp: 390 },
  { name: 'Sat', xp: 430 },
  { name: 'Sun', xp: 380 },
];

const Dashboard = () => {
  return (
    <div className="bg-[#1A1A2E] text-[#E0E0E0] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">TechQuest Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-[#0F3460]">Level 15</span>
            <span className="bg-[#16213E] px-3 py-1 rounded">Code Ninja</span>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#16213E] p-4 rounded-lg">
            <h2 className="text-xl mb-2">Current Quest</h2>
            <p>Debug the Ancient Algorithm</p>
            <Progress value={65} className="mt-2" />
          </Card>
          <Card className="bg-[#16213E] p-4 rounded-lg">
            <h2 className="text-xl mb-2">Guild Rank</h2>
            <p className="text-2xl font-bold text-[#0F3460]">#3</p>
            <p>Rising Stars Guild</p>
          </Card>
          <Card className="bg-[#16213E] p-4 rounded-lg">
            <h2 className="text-xl mb-2">Next Boss Battle</h2>
            <p>Legacy Code Refactor</p>
            <p className="text-sm mt-2 text-[#50C878]">2 days remaining</p>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl mb-4">XP Gained This Week</h2>
          <div className="bg-[#16213E] p-4 rounded-lg" style={{height: '300px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#E0E0E0" />
                <YAxis stroke="#E0E0E0" />
                <Tooltip 
                  contentStyle={{backgroundColor: '#1A1A2E', border: 'none'}}
                  itemStyle={{color: '#E0E0E0'}}
                />
                <Bar dataKey="xp" fill="#0F3460" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#16213E] p-4 rounded-lg">
            <h2 className="text-xl mb-4">Active Quests</h2>
            <ul className="space-y-2">
              <li>• Optimize the Quantum Database</li>
              <li>• Design UI for Time Machine App</li>
              <li>• Implement AI for Smart City Project</li>
            </ul>
          </Card>
          <Card className="bg-[#16213E] p-4 rounded-lg">
            <h2 className="text-xl mb-4">Recent Achievements</h2>
            <ul className="space-y-2">
              <li>🏆 Code Efficiency Master</li>
              <li>🌟 Bug Slayer Level 5</li>
              <li>🚀 First Production Deployment</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;