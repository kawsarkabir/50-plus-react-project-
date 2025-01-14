import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar px-5 mt-3 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
            >
              Statisties
            </NavLink>
            <NavLink
              to="/appliedjob"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
            >
              Apply Job
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
            >
              Blogs
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
          >
            Statisties
          </NavLink>
          <NavLink
            to="/appliedjob"
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
          >
            Apply Job
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
          >
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Start Applying</a>
      </div>
    </nav>
  );
};

export default Navbar;
