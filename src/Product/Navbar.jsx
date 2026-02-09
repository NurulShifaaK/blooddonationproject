import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, Package, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition
     ${
       isActive
         ? "bg-blue-100 text-blue-400"
         : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
     }`;

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold">
            BloodCare
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={linkClass}>
              <Home size={18} />
              Home
            </NavLink>
            <NavLink to="/allproducts" className={linkClass}>
              <ShoppingBag size={18} />
              Requests
            </NavLink>
            

              <NavLink
            to="/orders"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <Package size={18} />
            Dashboard
          </NavLink>
            <NavLink to="/profile" className={linkClass}>
              <User size={18} />
              Profile
            </NavLink>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-lg font-semibold ">
            BloodCare
          </h2>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-2 mt-6 px-4">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/allproducts"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <ShoppingBag size={18} />
            Requests
          </NavLink>

            <NavLink
            to="/personaldashboard"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <Package size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <User size={18} />
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
