import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BadgeCheck, Zap, Award } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 job postings',
      '100 applications/month',
      'Basic analytics',
      'Email support'
    ],
    popular: false,
    color: 'from-[#60A5FA] to-[#4688F1]'
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing businesses with more needs',
    features: [
      'Up to 50 job postings',
      '500 applications/month',
      'Advanced analytics',
      'Priority support',
      'ATS integration'
    ],
    popular: true,
    color: 'from-[#C084FC] to-[#9B6BDB]'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited job postings',
      'Unlimited applications',
      'Premium analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'Dedicated account manager'
    ],
    popular: false,
    color: 'from-[#F472B6] to-[#D1589E]'
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border ${
            plan.popular 
              ? 'border-[#C084FC] ring-1 ring-[#C084FC]/30' 
              : 'border-gray-700'
          } hover:transform hover:-translate-y-2 transition-all duration-300`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C084FC] to-[#9B6BDB] text-white text-xs font-bold px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400">{plan.period}</span>
            </div>
            <p className="text-gray-400">{plan.description}</p>
          </div>
          
          <div className="mb-8">
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#34D399] flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button
            className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C084FC]`}
          >
            Get Started
          </button>
          
          {plan.popular && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <BadgeCheck className="w-4 h-4 text-[#C084FC]" />
              <span>Recommended for most businesses</span>
            </div>
          )}
        </motion.div>
      ))}
      
      <div className="md:col-span-3 p-8 bg-[#1E293B]/50 rounded-2xl backdrop-blur-lg border border-gray-700 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="text-yellow-400" />
              Additional Services
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-[#60A5FA]/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <h4 className="font-semibold">Premium Support</h4>
                  <p className="text-gray-400 text-sm">24/7 dedicated support with 1-hour response time</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#C084FC]/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-[#C084FC]" />
                </div>
                <div>
                  <h4 className="font-semibold">Implementation Services</h4>
                  <p className="text-gray-400 text-sm">Our experts will help you set up and optimize your workflow</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Frequently Asked</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Can I change plans later?</h4>
                <p className="text-gray-400 text-sm">Yes, you can upgrade or downgrade at any time with no penalty.</p>
              </div>
              <div>
                <h4 className="font-semibold">Is there a free trial?</h4>
                <p className="text-gray-400 text-sm">We offer a 14-day free trial for all plans with no credit card required.</p>
              </div>
              <div>
                <h4 className="font-semibold">What payment methods do you accept?</h4>
                <p className="text-gray-400 text-sm">We accept all major credit cards and PayPal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;