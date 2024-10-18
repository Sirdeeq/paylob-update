import React from 'react';
import { BookOpen, FileText, Video, Radio } from 'lucide-react';

const LearnDropdown = () => {
  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 w-64 z-10">
      <ul>
        <DropdownItem href="/blog" icon={BookOpen} text="Blog" description="Original lessons about making the internet work for your business" />
        <DropdownItem href="/guides" icon={FileText} text="Guides" description="Big ideas in payments, explained in simple English" />
        <DropdownItem href="/video-tutorials" icon={Video} text="Video Tutorials" description="Quick video tutorials on how to use Paystack" />
        <DropdownItem href="/decode-fintech" icon={Radio} text="Decode Fintech" description="The trade email newsletter and podcast for leaders in African fintech" />
      </ul>
    </div>
  );
};

const DropdownItem = ({ href, icon: Icon, text, description }) => (
  <li>
    <a href={href} className="flex items-start px-4 py-3 hover:bg-gray-100">
      <Icon className="h-5 w-5 text-purple-600 mr-3 mt-1" />
      <div>
        <span className="text-sm font-semibold text-gray-700">{text}</span>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </a>
  </li>
);

export default LearnDropdown;