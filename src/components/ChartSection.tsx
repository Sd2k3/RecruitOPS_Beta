import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const COLORS = ['#60A5FA', '#C084FC', '#34D399', '#FBBF24'];

const monthlyData = [
  { name: 'Jan', applications: 4000, hires: 2400 },
  { name: 'Feb', applications: 3000, hires: 1398 },
  { name: 'Mar', applications: 2000, hires: 9800 },
  { name: 'Apr', applications: 2780, hires: 3908 },
  { name: 'May', applications: 1890, hires: 4800 },
  { name: 'Jun', applications: 2390, hires: 3800 },
];

const pieData = [
  { name: 'Tech', value: 400 },
  { name: 'Finance', value: 300 },
  { name: 'Healthcare', value: 300 },
  { name: 'Others', value: 200 }
];

const ChartSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700">
        <h3 className="text-2xl font-semibold mb-6 text-center">Monthly Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsLineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: 'none',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="applications" 
              stroke="#60A5FA" 
              strokeWidth={2} 
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="hires" 
              stroke="#34D399" 
              strokeWidth={2} 
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700">
        <h3 className="text-2xl font-semibold mb-6 text-center">Industry Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: 'none',
                borderRadius: '0.5rem'
              }} 
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;