import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Briefcase, UserCheck, Bot, Plus, Search, Building2, MessageSquare, Upload } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const jobPosts = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    applicants: 45,
    status: 'Active',
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Inc',
    location: 'New York, NY',
    applicants: 32,
    status: 'Active',
    posted: '3 days ago'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    applicants: 28,
    status: 'Active',
    posted: '1 week ago'
  }
];

const candidates = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Frontend Developer',
    experience: '5 years',
    status: 'Shortlisted',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    experience: '7 years',
    status: 'In Review',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'DevOps Engineer',
    experience: '4 years',
    status: 'New',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const applicationData = [
  { month: 'Jan', applications: 150, interviews: 45, hires: 15 },
  { month: 'Feb', applications: 200, interviews: 60, hires: 20 },
  { month: 'Mar', applications: 180, interviews: 54, hires: 18 },
  { month: 'Apr', applications: 250, interviews: 75, hires: 25 },
  { month: 'May', applications: 300, interviews: 90, hires: 30 },
  { month: 'Jun', applications: 280, interviews: 84, hires: 28 }
];

const COLORS = ['#60A5FA', '#C084FC', '#F472B6', '#34D399'];

const HR: React.FC = () => {
  const [showAI, setShowAI] = useState(false);
  const [showCreateJobPost, setShowCreateJobPost] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      {/* Header */}
      <header className="bg-[#1E293B]/50 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]">
                HR Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAI(!showAI)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#C084FC] to-[#F472B6] text-white rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#1E293B]"
              >
                <Bot className="w-5 h-5 mr-2" />
                AI Assistant
              </button>
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-[#60A5FA]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#60A5FA]/20 rounded-xl">
                <Briefcase className="w-6 h-6 text-[#60A5FA]" />
              </div>
              <div>
                <h2 className="text-sm text-gray-400">Active Job Posts</h2>
                <p className="text-2xl font-bold text-[#60A5FA]">24</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C084FC]/20 rounded-xl">
                <Users className="w-6 h-6 text-[#C084FC]" />
              </div>
              <div>
                <h2 className="text-sm text-gray-400">Total Candidates</h2>
                <p className="text-2xl font-bold text-[#C084FC]">156</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#F472B6]/20 rounded-xl">
                <UserCheck className="w-6 h-6 text-[#F472B6]" />
              </div>
              <div>
                <h2 className="text-sm text-gray-400">Shortlisted</h2>
                <p className="text-2xl font-bold text-[#F472B6]">45</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 flex-wrap mb-8">
          <button
            onClick={() => setShowCreateJobPost(true)}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-[#60A5FA] to-[#C084FC] text-white rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1E293B]"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Job Post
          </button>
          <button
            className="flex items-center px-6 py-3 bg-[#1E293B] border border-gray-700 text-white rounded-xl hover:border-[#60A5FA]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1E293B]"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload Job Description
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Posts */}
            <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">Active Job Posts</h2>
              <div className="space-y-4">
                {jobPosts.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0F172A]/50 rounded-xl p-4 border border-gray-700 hover:border-[#60A5FA]/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <div className="text-sm text-gray-400">
                          {job.company} • {job.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#60A5FA]">{job.applicants} applicants</div>
                        <div className="text-xs text-gray-400">{job.posted}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Candidates */}
            <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">Recent Candidates</h2>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0F172A]/50 rounded-xl p-4 border border-gray-700 hover:border-[#60A5FA]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{candidate.name}</h3>
                        <div className="text-sm text-gray-400">
                          {candidate.role} • {candidate.experience}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#60A5FA]/20 text-[#60A5FA]">
                          {candidate.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Assistant */}
          {showAI && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700 h-[600px] flex flex-col"
            >
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
            </motion.div>
          )}
        </div>

        {/* Analytics */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Recruitment Analytics</h2>
          <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#60A5FA" strokeWidth={2} />
                <Line type="monotone" dataKey="interviews" stroke="#C084FC" strokeWidth={2} />
                <Line type="monotone" dataKey="hires" stroke="#34D399" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HR;