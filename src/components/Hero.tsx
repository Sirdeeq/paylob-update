import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Seamless Payments for Your Business</h1>
          <p className="text-xl mb-8">Accept payments from anywhere in the world with Paylob's secure and easy-to-use payment gateway. Boost your revenue and streamline your financial operations.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">Get Started</a>
            <a href="#" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition duration-300 flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;