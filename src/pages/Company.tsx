import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, ArrowLeft, BarChart2, PieChart as PieChartIcon, TrendingUp, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import HRProfileModal from '../components/HRProfileModal';

const hrList = [
  {
    id: 1,
    name: 'Jennifer Parker',
    position: 'Senior HR Manager',
    company: 'TechCorp Solutions',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    experience: '8 years',
    specialization: 'Tech Recruitment',
    email: 'jennifer.p@techcorp.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Michael Chang',
    position: 'HR Director',
    company: 'Innovate Inc',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    experience: '12 years',
    specialization: 'Executive Hiring',
    email: 'michael.c@innovate.com',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    position: 'Talent Acquisition Lead',
    company: 'Future Dynamics',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    experience: '6 years',
    specialization: 'Graduate Recruitment',
    email: 'sarah.w@futuredynamics.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX'
  }
];

const hiringData = [
  { month: 'Jan', applications: 150, hires: 15, interviews: 45 },
  { month: 'Feb', applications: 200, hires: 20, interviews: 60 },
  { month: 'Mar', applications: 180, hires: 18, interviews: 54 },
  { month: 'Apr', applications: 250, hires: 25, interviews: 75 },
  { month: 'May', applications: 300, hires: 30, interviews: 90 },
  { month: 'Jun', applications: 280, hires: 28, interviews: 84 }
];

const departmentData = [
  { name: 'Engineering', value: 45 },
  { name: 'Sales', value: 25 },
  { name: 'Marketing', value: 15 },
  { name: 'Operations', value: 15 }
];

const COLORS = ['#60A5FA', '#C084FC', '#F472B6', '#34D399'];

const Company: React.FC = () => {
  const [selectedHR, setSelectedHR] = useState<typeof hrList[0] | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleViewProfile = (hr: typeof hrList[0]) => {
    setSelectedHR(hr);
    setIsProfileModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]">
            Company Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* HR List Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-[#60A5FA]" />
                HR Representatives
              </h2>
            </div>

            <div className="space-y-4">
              {hrList.map((hr, index) => (
                <motion.div
                  key={hr.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1E293B]/50 rounded-xl p-4 border border-gray-700 hover:border-[#60A5FA]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={hr.avatar}
                      alt={hr.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{hr.name}</h3>
                      <p className="text-gray-400 text-sm">{hr.position}</p>
                      <p className="text-gray-400 text-sm">{hr.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Experience</div>
                      <div className="font-semibold text-[#60A5FA]">{hr.experience}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Specialization: {hr.specialization}
                    </span>
                    <button 
                      onClick={() => handleViewProfile(hr)}
                      className="text-[#60A5FA] hover:text-[#60A5FA]/80 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-1"
                    >
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Chat Section */}
          <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700 h-[600px] flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-[#C084FC]" />
              <h2 className="text-xl font-semibold">AI Assistant</h2>
            </div>

            <div className="flex-1 bg-[#0F172A]/50 rounded-xl p-4 mb-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="bg-[#C084FC]/20 p-2 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-[#C084FC]" />
                  </div>
                  <div className="bg-[#1E293B] rounded-lg p-3 text-sm">
                    Hello! I'm your AI recruitment assistant. How can I help you today?
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-[#0F172A]/50 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C084FC] border border-gray-700"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C084FC] hover:text-[#C084FC]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BarChart2 className="w-6 h-6 text-[#60A5FA]" />
            Recruitment Analytics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hiring Trends */}
            <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#60A5FA]" />
                Hiring Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hiringData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
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
                  <Line type="monotone" dataKey="applications" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="interviews" stroke="#C084FC" strokeWidth={2} />
                  <Line type="monotone" dataKey="hires" stroke="#34D399" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Department Distribution */}
            <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-[#C084FC]" />
                Department Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
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

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: 'Total Applications', value: '1,360', icon: Users2, color: '#60A5FA' },
              { label: 'Interviews Scheduled', value: '408', icon: Users2, color: '#C084FC' },
              { label: 'Positions Filled', value: '136', icon: Users2, color: '#F472B6' },
              { label: 'Time to Hire (avg)', value: '18 days', icon: Users2, color: '#34D399' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-opacity-20`} style={{ backgroundColor: `${stat.color}20` }}>
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* HR Profile Modal */}
      {selectedHR && (
        <HRProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          hr={selectedHR}
        />
      )}
    </div>
  );
};

export default Company;