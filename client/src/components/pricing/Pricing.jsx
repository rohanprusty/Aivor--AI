import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for exploring AI art',
    features: [
      '50 images/month',
      'Standard quality',
      '5 art styles',
      'Community support'
    ],
    buttonText: 'Get Started',
    buttonOutline: true,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For serious creators',
    badge: 'Most Popular',
    features: [
      '1,000 images/month',
      '4K resolution',
      '50+ art styles',
      'AI prompt assistant',
      'Priority generation',
      'Commercial license'
    ],
    buttonText: 'Start Pro',
    buttonOutline: false,
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$79',
    period: '/month',
    description: 'For teams and studios',
    features: [
      'Unlimited images',
      '8K resolution',
      'All art styles',
      'API access',
      'Custom model fine-tuning',
      'Dedicated support'
    ],
    buttonText: 'Contact Sales',
    buttonOutline: true,
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 flex flex-col h-full 
              ${plan.highlight ? 'bg-black/60 border border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.15)] scale-105 z-10' : 'glass-panel border-white/5 bg-white/[0.02]'}
            `}
          >
            {plan.badge && (
              <div className="absolute top-6 right-6 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#a855f7]">
                {plan.badge}
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-gray-400 font-medium mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-display font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                )}
              </div>
              <p className="text-gray-500 text-sm mt-4">{plan.description}</p>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className={`w-4 h-4 mt-0.5 ${plan.highlight ? 'text-purple-400' : 'text-blue-400'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300
                ${plan.buttonOutline 
                  ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' 
                  : 'bg-[#a855f7] hover:bg-[#9333ea] text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'}
              `}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
