import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyPaylob = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Paylob?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Payment processing" className="rounded-lg shadow-md" />
          </div>
          <div>
            <ul className="space-y-4">
              <WhyPaylobItem text="Easy integration with your existing systems" />
              <WhyPaylobItem text="24/7 customer support with dedicated account managers" />
              <WhyPaylobItem text="Competitive transaction fees with volume-based discounts" />
              <WhyPaylobItem text="Advanced fraud protection using machine learning algorithms" />
              <WhyPaylobItem text="Customizable checkout experience to match your brand" />
              <WhyPaylobItem text="Comprehensive developer tools and documentation" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyPaylobItem = ({ text }) => (
  <li className="flex items-start">
    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
    <span>{text}</span>
  </li>
);

export default WhyPaylob;