import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../src/logo.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100 px-8 sticky top-0 z-50 bg-gray-100">
      <div className="navbar-start ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li className="font-bold">Home</li>
            </Link>
            <Link to="/services">
              <li className="font-bold">Services</li>
            </Link>
            <Link to="/blog">
              <li className="font-bold">Blog</li>
            </Link>
            {user?.email ? (
              <>
                <Link to="/reviews">
                  <li className="font-bold">My Reviews</li>
                </Link>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-serif btn-outline"
        >
          <img src={logo} alt="" height={30} width={30} />
          Wild Photography
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <Link to="/">
            <li className="font-bold mx-4">Home</li>
          </Link>
          <Link to="/services">
            <li className="font-bold mx-4">Services</li>
          </Link>
          <Link to="/blog">
            <li className="font-bold mx-4">Blog</li>
          </Link>
          {user?.email ? (
            <>
              <Link to="/reviews">
                <li className="font-bold mx-4">My Reviews</li>
              </Link>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
