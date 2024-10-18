import React from 'react';
import { Users } from 'lucide-react';

const ForEntrepreneurs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Users className="h-10 w-10 text-blue-600 mr-4" />
        For Entrepreneurs
      </h1>
      <p className="text-xl mb-8">Empower your business with Paylob's payment solutions tailored for entrepreneurs.</p>
      {/* Add more content specific to entrepreneurs */}
    </div>
  );
};

export default ForEntrepreneurs;