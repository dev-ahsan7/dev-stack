import { HiMenu } from 'react-icons/hi';
import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="w-full border-b border-[#F1F5F9]">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
        {/* hamburger - mobile only, static */}
        <HiMenu size={24} className="md:hidden text-gray-700" />

        {/* logo */}
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="" />
        </div>

        {/* Navlinks */}
        <ul className="hidden md:flex items-center gap-8 text-[14px]">
          <li>
            <a href="#" className="text-pink-600 font-medium">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* buttons */}
        <div className="flex items-center gap-3 md:gap-6">
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Sign In
          </a>
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-full cursor-pointer transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
