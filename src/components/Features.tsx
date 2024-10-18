import React from 'react';
import { Globe, Shield, Zap, CreditCard, PieChart, Users } from 'lucide-react';

const features = [
  { icon: Globe, title: 'Global Payments', description: 'Accept payments from customers worldwide in multiple currencies' },
  { icon: Shield, title: 'Secure Transactions', description: 'Bank-grade security and fraud protection for all your transactions' },
  { icon: Zap, title: 'Instant Payouts', description: 'Get your money faster with instant payouts to your bank account' },
  { icon: CreditCard, title: 'Multiple Payment Methods', description: 'Support for cards, bank transfers, mobile money, and more' },
  { icon: PieChart, title: 'Advanced Analytics', description: 'Gain insights into your business with detailed transaction reports' },
  { icon: Users, title: 'Customer Management', description: 'Easily manage customer information and payment history' },
];

const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;