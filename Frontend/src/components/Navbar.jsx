import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="relative z-50">
        {/* mobile menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div
            onClick={openNav}
            className="text-3xl p-5 flex justify-end cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="flex flex-col items-center gap-6 text-lg font-medium text-gray-700 mt-10">
            <li>
              <Link onClick={openNav} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">About</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">Models</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">Our Team</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">Contact</Link>
            </li>
             <li>
              <Link onClick={openNav} to="/login">Login</Link>
            </li>
             <li>
              <Link onClick={openNav} to="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* desktop navbar */}
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" className="h-10" />
            </Link>
          </div>

          {/* links */}
          <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
            <li>
              <Link className="hover:text-red-600 transition" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition" to="/about">About</Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition" to="/models">Vehicle Models</Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition" to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition" to="/team">Our Team</Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* buttons */}
          <div className="hidden lg:flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100 transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Register
            </Link>
          </div>

          {/* mobile hamburger */}
          <div className="lg:hidden text-2xl cursor-pointer" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
