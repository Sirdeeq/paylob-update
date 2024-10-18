import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WhyPaylobDropdown from './WhyPaylobDropdown';
import DeveloperDropdown from './DeveloperDropdown';
import LearnDropdown from './LearnDropdown';
import CountryDropdown from './CountryDropdown';

const Header = () => {
  const [showWhyPaylobDropdown, setShowWhyPaylobDropdown] = useState(false);
  const [showDeveloperDropdown, setShowDeveloperDropdown] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleMouseOver = (setDropdownState: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    setDropdownState(true);
  };

  const handleMouseOut = (setDropdownState: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    setDropdownState(false);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="container mx-auto px-4 py-4 flex flex-col-reverse md:flex-row md:justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/path-to-your-logo.png"
            alt="Paylob Logo"
            className="h-8 w-auto cursor-pointer"
            onClick={() => navigate('/')} // Navigate to home page
          />
        </div>

        {/* Menu items */}
        <ul
          className={`w-full md:px-6 md:mt-5 bg-white md:w-auto md:flex md:flex-row md:space-x-6 md:order-1 md:m-6 md:p-6 items-center transition-all duration-300 ease-in-out z-20
            ${isMenuOpen ? 'block' : 'hidden'} md:block`}
        >
          <li
            className="relative py-2 md:py-0"
            onMouseOver={() => handleMouseOver(setShowWhyPaylobDropdown)}
            onMouseOut={() => handleMouseOut(setShowWhyPaylobDropdown)}
          >
            <button className="text-gray-600 hover:text-purple-600 flex items-center">
              Why Paylob
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showWhyPaylobDropdown && <WhyPaylobDropdown />}
          </li>

          <li
            className="relative py-2 md:py-0"
            onMouseOver={() => handleMouseOver(setShowDeveloperDropdown)}
            onMouseOut={() => handleMouseOut(setShowDeveloperDropdown)}
          >
            <button className="text-gray-600 hover:text-purple-600 flex items-center">
              Developers
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showDeveloperDropdown && <DeveloperDropdown />}
          </li>

          <li
            className="relative py-2 md:py-0"
            onMouseOver={() => handleMouseOver(setShowLearnDropdown)}
            onMouseOut={() => handleMouseOut(setShowLearnDropdown)}
          >
            <button className="text-gray-600 hover:text-purple-600 flex items-center">
              Learn
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showLearnDropdown && <LearnDropdown />}
          </li>

          {/* Pricing Link */}
          <li className="py-2 md:py-0">
            <button
              onClick={() => navigate('/pricing')}
              className="text-gray-600 hover:text-purple-600"
            >
              Pricing
            </button>
          </li>

          {/* Support Link */}
          <li className="py-2 md:py-0">
            <button
              onClick={() => navigate('/support')}
              className="text-gray-600 hover:text-purple-600"
            >
              Support
            </button>
          </li>
        </ul>

        {/* Right side with "Get Started" and "Login" always visible */}
        <div className="flex items-center space-x-4 md:order-2">
          {/* Get Started Button */}
          <button
            onClick={() => navigate('/signup')}
            className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white transition"
          >
            Get Started
          </button>

          {/* Login Button */}
          <button
            onClick={() => navigate('/login')}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>

          {/* Country Dropdown for larger screens */}
          <div className="relative hidden md:block">
            <button
              className="text-gray-600 hover:text-purple-600 flex items-center"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              Nigeria
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showCountryDropdown && <CountryDropdown />}
          </div>

          {/* Hamburger menu button for mobile */}
          <button
            className="md:hidden block text-gray-600 hover:text-purple-600 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
