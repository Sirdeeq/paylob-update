import React from 'react';
import { BarChart } from 'lucide-react';

const SuccessRates = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <BarChart className="h-10 w-10 text-blue-600 mr-4" />
        Success Rates
      </h1>
      <p className="text-xl mb-8">Get the best transaction success rates in the industry with Paylob.</p>
      {/* Add more content about success rates here */}
    </div>
  );
};

export default SuccessRates;