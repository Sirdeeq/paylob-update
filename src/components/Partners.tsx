import React from 'react';

const Partners = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img src="https://via.placeholder.com/150x50?text=Partner+1" alt="Partner 1" className="h-16 object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Partner+2" alt="Partner 2" className="h-16 object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Partner+3" alt="Partner 3" className="h-16 object-contain" />
          <img src="https://via.placeholder.com/150x50?text=Partner+4" alt="Partner 4" className="h-16 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partners;