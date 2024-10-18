import React from 'react';
import { CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-purple-400 mr-2" />
              <span className="text-xl font-bold">Paylob</span>
            </div>
            <p className="text-gray-400">Secure and seamless payment solutions for businesses worldwide.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Subscribe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status Page</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Decode Fintech</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Brand</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Media Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Brand Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Logos</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2024 TechLife NG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;