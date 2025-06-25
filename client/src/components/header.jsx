import { Link } from "react-router-dom";
import useOnline from "../mockdata/useOnline";
import { useSelector } from "react-redux";
import { IoCartSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import Profile from "./Profile"; // Updated Profile will accept onClose prop

const Header = () => {
  const isonline = useOnline();
  const cartitems = useSelector((store) => store.cart.items);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <nav className="header flex justify-between items-center px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <img
          src="https://www.templateupdates.com/sites/default/files/2023-01/Hotel%20Logo%20Designs.jpg"
          alt="food-logo"
          className="h-12 w-auto"
        />

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 text-lg font-medium">
          <li className="text-gray-700">Online status: {isonline ? "✅" : "🔴"}</li>
          <li><Link to="/body" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/About" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/Contact" className="hover:text-blue-500">Contact</Link></li>

          {/* Cart Icon with Badge */}
          <li className="relative">
            <Link to="/cart">
              <span className="text-2xl"><IoCartSharp /></span>
              {cartitems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartitems.length}
                </span>
              )}
            </Link>
          </li>

          {/* Profile Icon */}
          <li>
            <button onClick={toggleProfile} className="text-2xl">
              <FaCircleUser />
            </button>
          </li>
        </ul>
      </nav>

      {/* Profile Modal */}
      {isProfileOpen && <Profile onClose={toggleProfile} />}
    </>
  );
};

export default Header;
