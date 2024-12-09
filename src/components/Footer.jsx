import { PiHouseBold, PiNotePencilBold } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";
import ProfilePic from './ProfilePic';

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row items-end justify-between space-x-3 py-8 text-white px-4 bg-gray-900 fixed bottom-0 w-full">
        <nav className="md:hidden flex flex-row items-center justify-center space-x-10">
          <a
            href="/home"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <PiHouseBold className="text-2xl" />
          </a>
          <a
            href="/post"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <PiNotePencilBold className="text-2xl" />
          </a>
          <a
            href="/community"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <IoGridOutline className="text-2xl" />
          </a>
          <a href="/profile" className="ml-auto">
            <ProfilePic />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;