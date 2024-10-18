import React from 'react';
import { Monitor } from 'lucide-react';

const Demo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Monitor className="h-10 w-10 text-blue-600 mr-4" />
        Paylob Demo
      </h1>
      <p className="text-xl mb-8">See the Paylob Checkout Form and Dashboard in action.</p>
      {/* Add demo content or embed a video here */}
    </div>
  );
};

export default Demo;