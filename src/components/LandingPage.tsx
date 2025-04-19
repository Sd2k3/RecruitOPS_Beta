import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Users, LineChart, Briefcase, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Target, Clock, Shield, Menu, X, Github, Linkedin, Twitter, Facebook, Star, DollarSign, Play, Zap, Globe, Users2, BrainCircuit } from 'lucide-react';
import Typed from 'typed.js';
import GetStartedModal from './GetStartedModal';

// Lazy loaded components
const ChartSection = lazy(() => import('../components/ChartSection.tsx'));
const Testimonials = lazy(() => import('../components/Testimonials.tsx'));
const Pricing = lazy(() => import('../components/Pricing.tsx'));

gsap.registerPlugin(ScrollTrigger);

// Constants
const COLORS = ['#60A5FA', '#C084FC', '#34D399', '#FBBF24'];

// Types
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: { icon: React.ReactNode; text: string }[];
  borderColor: string;
  delay: number;
  benefits: string[];
  integrations?: string[];
  stats?: { value: string; label: string }[];
};

type StatCardProps = {
  value: number;
  label: string;
  color: string;
};

type ContactItemProps = {
  icon: React.ReactNode;
  text: string;
  delay: number;
};

// Components
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, features, borderColor, delay, benefits, integrations, stats }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-[#1E293B]/50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700 hover:border-[${borderColor}]/50 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group`}
      aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}-title`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered ? { x: '100%', opacity: 0.1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      <div className="flex items-start gap-6">
        <div className={`p-3 bg-[${borderColor}]/10 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}-title`} className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-sm text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-gray-600 transition-colors"
                >
                  {feature.icon}
                  <span className="ml-2">{feature.text}</span>
                </motion.span>
              ))}
            </div>

            {stats && (
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {benefits && benefits.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {integrations && integrations.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((integration, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2.5 py-1.5 rounded-full border border-gray-600/50 hover:border-gray-500 transition-colors"
                    >
                      {integration}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 text-sm text-[${borderColor}] hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[${borderColor}] rounded-lg px-3 py-1.5`}
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard: React.FC<StatCardProps> = ({ value, label, color }) => {
  const statRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (statRef.current) {
      gsap.to(statRef.current, {
        scrollTrigger: {
          trigger: statRef.current,
          start: 'top center',
          once: true,
        },
        innerHTML: value,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
      });
    }
  }, [value]);

  return (
    <div 
      className="p-6 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700 transform hover:scale-105 transition-all duration-300 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
      tabIndex={0}
    >
      <h3 ref={statRef} className={`stat-number text-4xl font-bold text-[${color}] mb-2`}>0</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-4"
  >
    {icon}
    <p className="text-gray-300">{text}</p>
  </motion.div>
);

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const typedRef = useRef<HTMLSpanElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Smart onboarding^1000', 'Smarter decisions^1000', 'Better hiring^1000'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        scrollTrigger: {
          start: 'top top',
          end: '+=100',
          toggleActions: 'play none none reverse',
        },
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        backdropFilter: 'blur(10px)',
        duration: 0.3,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#60A5FA]" aria-hidden="true" />,
      title: "Unified Application Platform",
      description: "Apply seamlessly to multiple positions through our streamlined platform. Track all your applications in one place.",
      features: [
        { icon: <Zap className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />, text: "One-click apply" },
        { icon: <Target className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />, text: "Smart matching" },
        { icon: <Globe className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />, text: "Global reach" }
      ],
      benefits: [
        "Reduce application time by 75%",
        "Automated resume parsing",
        "Real-time application status",
        "Personalized job recommendations"
      ],
      integrations: [
        "LinkedIn",
        "Indeed",
        "Glassdoor",
        "ZipRecruiter"
      ],
      stats: [
        { value: "75%", label: "Time Saved" },
        { value: "100+", label: "Integrations" }
      ],
      borderColor: "#60A5FA",
      delay: 0.1
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#C084FC]" aria-hidden="true" />,
      title: "Company Portal",
      description: "Register your company and unlock powerful hiring tools. Post unlimited job opportunities and manage candidates efficiently.",
      features: [
        { icon: <Shield className="w-4 h-4 text-[#C084FC]" aria-hidden="true" />, text: "Verified profiles" },
        { icon: <Clock className="w-4 h-4 text-[#C084FC]" aria-hidden="true" />, text: "Quick setup" },
        { icon: <Users2 className="w-4 h-4 text-[#C084FC]" aria-hidden="true" />, text: "Team collaboration" }
      ],
      benefits: [
        "Customizable hiring workflows",
        "Advanced candidate filtering",
        "Team collaboration tools",
        "Automated interview scheduling"
      ],
      integrations: [
        "Google Calendar",
        "Slack",
        "Microsoft Teams",
        "Zoom"
      ],
      stats: [
        { value: "50%", label: "Faster Hiring" },
        { value: "90%", label: "Team Adoption" }
      ],
      borderColor: "#C084FC",
      delay: 0.2
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#F472B6]" aria-hidden="true" />,
      title: "AI-Powered Analytics",
      description: "Leverage advanced AI and machine learning to optimize your hiring process with comprehensive analytics and insights.",
      features: [
        { icon: <LineChart className="w-4 h-4 text-[#F472B6]" aria-hidden="true" />, text: "Real-time metrics" },
        { icon: <Target className="w-4 h-4 text-[#F472B6]" aria-hidden="true" />, text: "Predictive analytics" },
        { icon: <Zap className="w-4 h-4 text-[#F472B6]" aria-hidden="true" />, text: "Smart insights" }
      ],
      benefits: [
        "Data-driven decision making",
        "Predictive hiring metrics",
        "Custom report generation",
        "Trend analysis"
      ],
      integrations: [
        "Tableau",
        "Power BI",
        "Looker",
        "Metabase"
      ],
      stats: [
        { value: "2x", label: "Better Matches" },
        { value: "85%", label: "Accuracy" }
      ],
      borderColor: "#F472B6",
      delay: 0.3
    },
    {
      icon: <Users className="w-8 h-8 text-[#34D399]" aria-hidden="true" />,
      title: "End-to-End Hiring",
      description: "A complete hiring solution from job posting to onboarding with automated workflows and seamless integration.",
      features: [
        { icon: <CheckCircle2 className="w-4 h-4 text-[#34D399]" aria-hidden="true" />, text: "Automated workflow" },
        { icon: <Target className="w-4 h-4 text-[#34D399]" aria-hidden="true" />, text: "Smart onboarding" },
        { icon: <Shield className="w-4 h-4 text-[#34D399]" aria-hidden="true" />, text: "Compliance ready" }
      ],
      benefits: [
        "Streamlined onboarding process",
        "Automated document handling",
        "Compliance management",
        "Performance tracking"
      ],
      integrations: [
        "Workday",
        "BambooHR",
        "ADP",
        "Greenhouse"
      ],
      stats: [
        { value: "90%", label: "Less Paperwork" },
        { value: "3x", label: "Faster Onboarding" }
      ],
      borderColor: "#34D399",
      delay: 0.4
    }
  ];

  const stats = [
    { value: 1000, label: "Companies Registered", color: "#60A5FA" },
    { value: 50000, label: "Job Applications", color: "#C084FC" },
    { value: 5000, label: "Successful Hires", color: "#F472B6" },
    { value: 95, label: "Client Satisfaction %", color: "#34D399" }
  ];

  const contactItems = [
    { icon: <Phone className="w-6 h-6 text-[#60A5FA]" aria-hidden="true" />, text: "+1 (555) 123-4567", delay: 0.1 },
    { icon: <Mail className="w-6 h-6 text-[#C084FC]" aria-hidden="true" />, text: "contact@recruitops.com", delay: 0.2 },
    { icon: <MapPin className="w-6 h-6 text-[#F472B6]" aria-hidden="true" />, text: "123 Tech Street, San Francisco, CA 94105", delay: 0.3 }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" aria-hidden="true" />, label: "LinkedIn", color: "hover:text-[#60A5FA]" },
    { icon: <Twitter className="w-6 h-6" aria-hidden="true" />, label: "Twitter", color: "hover:text-[#C084FC]" },
    { icon: <Facebook className="w-6 h-6" aria-hidden="true" />, label: "Facebook", color: "hover:text-[#F472B6]" },
    { icon: <Github className="w-6 h-6" aria-hidden="true" />, label: "GitHub", color: "hover:text-[#34D399]" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      {/* Navigation */}
      <nav ref={navRef} className="fixed w-full z-50 transition-all duration-300 bg-[#0F172A]/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6] focus:outline-none"
              tabIndex={0}
            >
              RECRUIT OPS
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Features", ref: featuresRef },
                { label: "Statistics", ref: statsRef },
                { label: "Testimonials", ref: testimonialsRef },
                { label: "Pricing", ref: pricingRef },
                { label: "Contact", ref: contactRef }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-md px-2 py-1"
                  onClick={() => scrollToSection(item.ref)}
                  aria-label={`Scroll to ${item.label} section`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-[#60A5FA] to-[#C084FC] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Login to Recruit Ops"
              >
                Login
              </motion.button>
            </div>

            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1E293B] border-t border-gray-700"
            >
              <div className="px-4 py-2">
                {[
                  { label: "Features", ref: featuresRef },
                  { label: "Statistics", ref: statsRef },
                  { label: "Testimonials", ref: testimonialsRef },
                  { label: "Pricing", ref: pricingRef },
                  { label: "Contact", ref: contactRef }
                ].map((item) => (
                  <button
                    key={item.label}
                    className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors focus:outline-none focus:bg-gray-700 px-2 rounded"
                    onClick={() => scrollToSection(item.ref)}
                    aria-label={`Scroll to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  className="block w-full text-left py-3 text-blue-500 hover:text-blue-400 transition-colors focus:outline-none focus:bg-gray-700 px-2 rounded"
                  aria-label="Login to Recruit Ops"
                >
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <picture>
          <source srcSet="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" type="image/jpeg" />
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Office workspace background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            loading="lazy"
          />
        </picture>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 to-[#1E293B]/70"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]"
            tabIndex={0}
          >
            RECRUIT OPS
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-8 text-gray-300 h-20"
            aria-live="polite"
          >
            <span ref={typedRef} aria-hidden="true"></span>
            <span className="sr-only">Smart onboarding, Smarter decisions, Better hiring</span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStartedClick}
            className="bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6] text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-semibold hover:shadow-lg transform transition-all duration-300 flex items-center gap-3 mx-auto focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-blue-500"
            aria-label="Get started with Recruit Ops"
          >
            Get Started <ArrowRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </motion.button>

          {/* Demo video button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-gray-300 hover:text-white mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2"
            aria-label="Watch demo video"
          >
            <Play className="w-5 h-5" aria-hidden="true" />
            <span>Watch Demo</span>
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-[#0F172A]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]"
            tabIndex={0}
          >
            Why Choose RecruitOps?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-[#0F172A]/20 to-[#1E293B]/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]"
            tabIndex={0}
          >
            Our Impact
          </motion.h2>
          
          <Suspense fallback={<LoadingSpinner />}>
            <ChartSection />
          </Suspense>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-[#0F172A]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]"
            tabIndex={0}
          >
            What Our Clients Say
          </motion.h2>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Testimonials />
          </Suspense>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 bg-gradient-to-r from-[#0F172A]/20 to-[#1E293B]/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]"
            tabIndex={0}
          >
            Simple, Transparent Pricing
          </motion.h2>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Pricing />
          </Suspense>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-[#0F172A]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6]"
            tabIndex={0}
          >
            Get in Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6" tabIndex={0}>Contact Information</h3>
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <ContactItem key={index} {...item} />
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4" tabIndex={0}>Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`text-gray-400 ${link.color} transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6" tabIndex={0}>Get Started</h3>
              <p className="text-gray-300 mb-6">Ready to transform your recruitment process? Fill out our form and we'll get back to you shortly.</p>
              <a 
                href="https://forms.gle/6tD5ARHFvcZq7KLU7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Fill out contact form"
              >
                Fill Out Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0F172A] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6] mb-4 md:mb-0">
              RECRUIT OPS
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RecruitOps. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LandingPage;