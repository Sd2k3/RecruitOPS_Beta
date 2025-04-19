import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Clock, ArrowLeft, Search, Building2, BarChart2, PieChart as PieChartIcon, TrendingUp, Users2, X, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useForm } from 'react-hook-form';
import JobDetailsModal from '../components/JobDetailsModal';

// Country code data
const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
  // Add more country codes as needed
];

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    posted: '2 days ago',
    description: 'We are seeking an experienced Frontend Developer to join our innovative team. You will be responsible for building and maintaining high-performance web applications, collaborating with cross-functional teams, and mentoring junior developers.',
    requirements: [
      'React.js expertise',
      'TypeScript proficiency',
      '5+ years experience',
      'Strong UI/UX skills',
      'Experience with modern frontend tools',
      'Knowledge of responsive design',
      'Testing frameworks (Jest, React Testing Library)'
    ],
    responsibilities: [
      'Lead frontend development initiatives',
      'Optimize application performance',
      'Implement responsive designs',
      'Code review and mentoring',
      'Collaborate with UX/UI designers'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Unlimited PTO',
      'Remote work options',
      '401(k) matching'
    ],
    companyInfo: {
      description: 'TechCorp Solutions is a leading software development company specializing in enterprise applications and cloud solutions.',
      size: '500-1000 employees',
      industry: 'Technology',
      website: 'https://techcorp.example.com'
    }
  },
  // ... (rest of the jobs array remains the same)
];

const applicationData = [
  { month: 'Jan', applications: 150, interviews: 45, hires: 15 },
  { month: 'Feb', applications: 200, interviews: 60, hires: 20 },
  { month: 'Mar', applications: 180, interviews: 54, hires: 18 },
  { month: 'Apr', applications: 250, interviews: 75, hires: 25 },
  { month: 'May', applications: 300, interviews: 90, hires: 30 },
  { month: 'Jun', applications: 280, interviews: 84, hires: 28 }
];

const industryData = [
  { name: 'Technology', value: 40 },
  { name: 'Finance', value: 25 },
  { name: 'Healthcare', value: 20 },
  { name: 'Education', value: 15 }
];

const COLORS = ['#60A5FA', '#C084FC', '#F472B6', '#34D399'];

// Application Form Modal Component
const ApplicationFormModal = ({ isOpen, onClose, jobTitle, companyName }: { isOpen: boolean, onClose: () => void, jobTitle: string, companyName: string }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

  const onSubmit = (data: any) => {
    const formData = {
      ...data,
      phone: `${selectedCountryCode} ${data.phone}`,
      resume: selectedFile?.name || '',
      jobTitle,
      companyName
    };
    console.log('Application submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
    reset();
    setSelectedFile(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-[#1E293B] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
      >
        <div className="sticky top-0 bg-[#1E293B] p-4 border-b border-gray-700 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Apply for {jobTitle}</h2>
            <p className="text-gray-400 text-sm">{companyName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                {...register('firstName', { required: 'First name is required' })}
                className="w-full bg-[#0F172A]/50 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border border-gray-700"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                {...register('lastName', { required: 'Last name is required' })}
                className="w-full bg-[#0F172A]/50 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border border-gray-700"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full bg-[#0F172A]/50 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border border-gray-700"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  className="bg-[#0F172A]/50 text-white rounded-l-lg py-2 px-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#60A5FA]"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  className="flex-1 bg-[#0F172A]/50 rounded-r-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border-t border-r border-b border-gray-700"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <input
                id="experience"
                type="number"
                min="0"
                max="50"
                {...register('experience', { 
                  required: 'Experience is required',
                  min: {
                    value: 0,
                    message: 'Experience cannot be negative'
                  }
                })}
                className="w-full bg-[#0F172A]/50 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border border-gray-700"
              />
              {errors.experience && (
                <p className="mt-1 text-sm text-red-500">{errors.experience.message as string}</p>
              )}
            </div>

            <div className="flex items-end">
              <div className="flex items-center h-10">
                <input
                  id="immediateJoiner"
                  type="checkbox"
                  {...register('immediateJoiner')}
                  className="w-4 h-4 rounded bg-[#0F172A]/50 border-gray-700 focus:ring-[#60A5FA]"
                />
                <label htmlFor="immediateJoiner" className="ml-2 text-sm text-gray-300">
                  Available for immediate joining
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">
                Resume <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <label className="flex-1 cursor-pointer">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-[#60A5FA]/50 transition-colors">
                    <Upload className="w-8 h-8 mb-2 text-gray-400" />
                    <p className="text-sm text-gray-400">
                      {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max. 5MB)</p>
                  </div>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
              {!selectedFile && (
                <p className="mt-1 text-sm text-red-500">Please upload your resume</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedFile}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#60A5FA] to-[#C084FC] text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Application
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<{title: string, company: string} | null>(null);

  const handleViewDetails = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsDetailsModalOpen(true);
  };

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJobForApplication({
      title: job.title,
      company: job.company
    });
    setIsApplicationModalOpen(true);
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
            Available Jobs
          </h1>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full bg-[#0F172A]/50 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border border-gray-700"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Location..."
                  className="w-full bg-[#0F172A]/50 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] border border-gray-700"
                />
              </div>
              <button className="bg-gradient-to-r from-[#60A5FA] to-[#C084FC] text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1E293B]">
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6 mb-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700 hover:border-[#60A5FA]/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 4).map((req, i) => (
                      <span
                        key={i}
                        className="bg-[#0F172A]/50 text-sm text-gray-300 px-3 py-1 rounded-full border border-gray-700"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleApply(job)}
                    className="bg-gradient-to-r from-[#60A5FA] to-[#C084FC] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1E293B]"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={() => handleViewDetails(job)}
                    className="text-[#60A5FA] hover:text-[#60A5FA]/80 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-6 py-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BarChart2 className="w-6 h-6 text-[#60A5FA]" />
            Job Market Analytics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Application Trends */}
            <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#60A5FA]" />
                Application Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={applicationData}>
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

            {/* Industry Distribution */}
            <div className="bg-[#1E293B]/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-[#C084FC]" />
                Industry Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {industryData.map((entry, index) => (
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
              { label: 'Active Jobs', value: '2,450', icon: Briefcase, color: '#60A5FA' },
              { label: 'Total Applications', value: '12,680', icon: Users2, color: '#C084FC' },
              { label: 'Companies Hiring', value: '380', icon: Building2, color: '#F472B6' },
              { label: 'Avg. Salary', value: '$95,000', icon: DollarSign, color: '#34D399' }
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

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          job={selectedJob}
        />
      )}

      {/* Application Form Modal */}
      {selectedJobForApplication && (
        <ApplicationFormModal
          isOpen={isApplicationModalOpen}
          onClose={() => setIsApplicationModalOpen(false)}
          jobTitle={selectedJobForApplication.title}
          companyName={selectedJobForApplication.company}
        />
      )}
    </div>
  );
};

export default Jobs;