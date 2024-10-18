import React from 'react';

const countries = [
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'Uganda', flag: '🇺🇬' },
  { name: 'Tanzania', flag: '🇹🇿' },
];

const CountryDropdown = () => {
  return (
    <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 w-48 z-10">
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
              <span className="mr-2">{country.flag}</span>
              <span className="text-sm text-gray-700">{country.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDropdown;