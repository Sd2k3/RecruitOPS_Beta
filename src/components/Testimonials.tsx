import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'HR Director, TechCorp',
    content: 'RecruitOps has transformed our hiring process. We reduced our time-to-hire by 40% and the quality of candidates has improved dramatically.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Talent Acquisition, Finova',
    content: 'The analytics dashboard alone is worth the price. We now make data-driven decisions about our recruitment strategy.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'David Wilson',
    position: 'CEO, HealthPlus',
    content: 'As a growing startup, we needed a scalable solution. RecruitOps grew with us and helped us build an amazing team.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    position: 'Recruitment Manager, EduTech',
    content: 'The candidate matching algorithm is incredibly accurate. We spend less time screening and more time engaging with top talent.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700 hover:border-[#60A5FA]/50 transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.position}</p>
            </div>
          </div>
          
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
              />
            ))}
          </div>
          
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 text-gray-700 w-8 h-8" />
            <p className="text-gray-300 pl-6">{testimonial.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;