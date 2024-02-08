import "./ActiveLink.css";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-primary text-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-2xl">
            <FaAlignJustify />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 text-secondary text-xl"
            >
              <h1 className="text-2xl py-2 text-center font-bold">
                Doctors Appointment
              </h1>
              <hr className="pb-2" />
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="appointment">Appointment</Link>
              </li>
            </ul>
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
          <a className="btn btn-secondary text-white">Button</a>
        </div>
      </div>
    </div>
  );
}
