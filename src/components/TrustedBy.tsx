import React from 'react';

const TrustedBy = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by 20,000+ Businesses</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img src="https://via.placeholder.com/150x50?text=Company+1" alt="Company 1" className="h-12 object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Company+2" alt="Company 2" className="h-12 object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Company+3" alt="Company 3" className="h-12 object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Company+4" alt="Company 4" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;