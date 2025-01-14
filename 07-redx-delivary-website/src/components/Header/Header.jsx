import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="full-website">
      <div className="navbar bg-base-100">
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
              <li>
                <NavLink
                  to="/enterprice"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "  bg-red-500 px-8 py-2 rounded"
                      : ""
                  }
                >
                  এন্টারপ্রাইজ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/curier"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " bg-red-500 px-8 py-2 rounded"
                      : ""
                  }
                >
                  কুরিয়ার
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={`/`} className="btn btn-ghost normal-case text-xl">
            <img src="https://i.ibb.co/Hrqsk3m/new-redx-logo.png" alt="" />
          </Link>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <NavLink
                  to="/enterprice"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "  bg-red-500 px-8 py-2 rounded"
                      : ""
                  }
                >
                  এন্টারপ্রাইজ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/curier"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " bg-red-500 px-8 py-2 rounded"
                      : ""
                  }
                >
                  কুরিয়ার
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <img
            className="mr-3 hidden lg:block md:block"
            src="https://i.ibb.co/JpZ8HSV/phone-icon.png"
            alt=""
          />
          <a href="#" className="hidden lg:block md:block">
            CALL US <span className="text-red-600 mr-6 ml-2"> 09610007339</span>
          </a>
          <Link to={`/login`} className="btn border-2 btn-outline px-10 btn-error">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
