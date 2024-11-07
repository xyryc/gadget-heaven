import { NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { getCartList, getStoredWishList } from "../utility/addToLs";
import Banner from "./Banner";
import Header from "./Header";

const Navbar = () => {
  const cartList = getCartList();
  const wishList = getStoredWishList();

  const { pathname } = useLocation();

  const renderBannerOrHeader = () => {
    if (
      pathname === "/" ||
      pathname === "/category/All%20Product" ||
      pathname === "/category/Laptops" ||
      pathname === "/category/Phones" ||
      pathname === "/category/Accessories" ||
      pathname === "/category/Smartwatches" ||
      pathname === "/category/Macbook" ||
      pathname === "/category/Iphone"
    ) {
      return <Banner />;
    } else if (pathname === "/statistics") {
      return (
        <Header
          title="Statistics"
          description="Explore detailed insights on product prices, ratings, and availability to make informed purchasing decisions on Gadget Heaven."
        />
      );
    } else if (pathname === "/dashboard") {
      return (
        <Header
          title="Dashboard"
          description="Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!"
        />
      );
    } else if (pathname === "/about") {
      return (
        <Header
          title="Welcome to Gadget Heaven"
          description="Explore the newest tech and gadgets, all in one place. Find the latest devices and accessories to elevate your experience."
        />
      );
    }
    return null;
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "underline" : ""}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            `${isActive ? "text-[#9538E2] font-bold" : ""}`
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${isActive ? "text-[#9538E2] font-bold" : ""}`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#9538E2] font-bold" : ""}`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div
        className={`navbar container mx-auto md:mt-3 px-4 ${
          pathname === "/" ||
          pathname === "/category/All%20Product" ||
          pathname === "/category/Laptops" ||
          pathname === "/category/Phones" ||
          pathname === "/category/Accessories" ||
          pathname === "/category/Smartwatches" ||
          pathname === "/category/Macbook" ||
          pathname === "/category/Iphone"
            ? "bg-[#9538E2] md:rounded-t-[32px] lg:text-white"
            : "bg-white"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl font-bold">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle bg-white text-black"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartList.length}
              </span>
            </div>
          </div>

          <a className="btn btn-circle">
            <div className="indicator">
              <FaRegHeart />
              <span className="badge badge-sm indicator-item">
                {wishList.length}
              </span>
            </div>
          </a>
        </div>
      </div>

      {renderBannerOrHeader()}
    </div>
  );
};

export default Navbar;
