import "./ActiveLink.css";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="bg-primary text-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-4xl"
              onClick={toggleDropdown}
            >
              <FaAlignJustify />
            </div>
            {isDropdownOpen && (
              <ul
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 text-secondary text-xl"
                onClick={closeDropdown}
              >
                <h1 className="text-2xl py-2 text-center font-bold">
                  Doctors Appointment
                </h1>
                <hr className="pb-2" />
                <li>
                  <Link to="/" onClick={closeDropdown}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/appointment" onClick={closeDropdown}>
                    Appointment
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <a className="text-2xl hidden lg:flex font-bold">
            Doctors Appointment
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl gap-4">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/appointment">Appointment</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
