import React from 'react';
import { Code, Book, Zap, Activity } from 'lucide-react';

const DeveloperDropdown = () => {
  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 w-64 z-10">
      <ul>
        <DropdownItem href="/documentation" icon={Book} text="Documentation" />
        <DropdownItem href="/api-reference" icon={Code} text="API Reference" />
        <DropdownItem href="/integrations" icon={Zap} text="Integrations" />
        <DropdownItem href="/status" icon={Activity} text="Status Page" />
      </ul>
    </div>
  );
};

const DropdownItem = ({ href, icon: Icon, text }) => (
  <li>
    <a href={href} className="flex items-center px-4 py-2 hover:bg-gray-100">
      <Icon className="h-5 w-5 text-purple-600 mr-3" />
      <span className="text-sm text-gray-700">{text}</span>
    </a>
  </li>
);

export default DeveloperDropdown;