import React, { useState } from 'react';
import { CreditCard, ChevronDown } from 'lucide-react';
import WhyPaylobDropdown from './WhyPaylobDropdown';
import DeveloperDropdown from './DeveloperDropdown';
import LearnDropdown from './LearnDropdown';
import CountryDropdown from './CountryDropdown';

const Header = () => {
  const [showWhyPaylobDropdown, setShowWhyPaylobDropdown] = useState(false);
  const [showDeveloperDropdown, setShowDeveloperDropdown] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <CreditCard className="h-8 w-8 text-purple-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Paylob</span>
        </div>
        <ul className="flex space-x-6 items-center">
          <li className="relative">
            <button
              className="text-gray-600 hover:text-purple-600 flex items-center"
              onMouseEnter={() => setShowWhyPaylobDropdown(true)}
              onMouseLeave={() => setShowWhyPaylobDropdown(false)}
            >
              Why Paylob
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showWhyPaylobDropdown && <WhyPaylobDropdown />}
          </li>
          <li className="relative">
            <button
              className="text-gray-600 hover:text-purple-600 flex items-center"
              onMouseEnter={() => setShowDeveloperDropdown(true)}
              onMouseLeave={() => setShowDeveloperDropdown(false)}
            >
              Developers
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showDeveloperDropdown && <DeveloperDropdown />}
          </li>
          <li className="relative">
            <button
              className="text-gray-600 hover:text-purple-600 flex items-center"
              onMouseEnter={() => setShowLearnDropdown(true)}
              onMouseLeave={() => setShowLearnDropdown(false)}
            >
              Learn
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showLearnDropdown && <LearnDropdown />}
          </li>
          <li><a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-purple-600">Support</a></li>
          <li><a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Login</a></li>
          <li className="relative">
            <button
              className="text-gray-600 hover:text-purple-600 flex items-center"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              Nigeria
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showCountryDropdown && <CountryDropdown />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;