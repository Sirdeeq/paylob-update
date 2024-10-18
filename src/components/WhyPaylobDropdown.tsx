import React from 'react';
import { Award, BarChart, Monitor, Users, Briefcase, Building, GraduationCap, Target } from 'lucide-react';

const WhyPaylobDropdown = () => {
  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 w-64 z-10">
      <div className="px-4 py-2">
        <h3 className="font-semibold text-gray-800 mb-2">Why Choose Paylob</h3>
        <p className="text-sm text-gray-600 mb-4">Over 200,000 businesses trust Paylob. Here's why.</p>
      </div>
      <ul>
        <DropdownItem href="/success-rates" icon={BarChart} text="Success Rates" />
        <DropdownItem href="/demo" icon={Monitor} text="Demo" />
        <div className="border-t border-gray-200 my-2"></div>
        <h4 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Your Growth Stage</h4>
        <DropdownItem href="/for-entrepreneurs" icon={Users} text="For Entrepreneurs" />
        <DropdownItem href="/for-corporates" icon={Building} text="For Corporates" />
        <DropdownItem href="/for-global-brands" icon={Briefcase} text="For Global Brands" />
        <DropdownItem href="/for-startups" icon={Target} text="For Startups" />
        <div className="border-t border-gray-200 my-2"></div>
        <h4 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Your Business Type</h4>
        <DropdownItem href="/for-fintechs" icon={Award} text="For Fintechs" />
        <DropdownItem href="/for-agencies" icon={Users} text="For Agencies" />
        <DropdownItem href="/for-schools" icon={GraduationCap} text="For Schools" />
        <DropdownItem href="/for-betting" icon={Target} text="For Betting" />
      </ul>
    </div>
  );
};

const DropdownItem = ({ href, icon: Icon, text }) => (
  <li>
    <a href={href} className="flex items-center px-4 py-2 hover:bg-gray-100">
      <Icon className="h-5 w-5 text-blue-600 mr-3" />
      <span className="text-sm text-gray-700">{text}</span>
    </a>
  </li>
);

export default WhyPaylobDropdown;