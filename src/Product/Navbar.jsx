import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  Home, 
  Activity, 
  Grid, 
  User, 
  Menu, 
  X, 
  LogOut
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
     ${
       isActive
         ? "text-blue-900 bg-blue-50/80"
         : "text-gray-500 hover:text-blue-900 hover:bg-gray-50"
     }`;

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5">
              <span className="text-lg font-bold text-gray-900">
                Le<span className="text-blue-900">Relais</span>
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={linkClass}>
                <Home size={16} /> Home
              </NavLink>
              <NavLink to="/allproducts" className={linkClass}>
                <Activity size={16} /> Requests
              </NavLink>
              <NavLink to="/personaldashboard" className={linkClass}>
                <Grid size={16} /> Dashboard
              </NavLink>
              <NavLink to="/profile" className={linkClass}>
                <User size={16} /> Profile
              </NavLink>

              <div className="w-px h-4 bg-gray-200 mx-3" />

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-red-600 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDE DRAWER (Left side) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-50">
            <span className="text-lg font-bold text-gray-900">
              Le<span className="text-blue-900">Relais</span>
            </span>
            <button 
              onClick={() => setOpen(false)}
              className="p-2 text-gray-500 hover:bg-gray-50 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 px-4 py-6 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
              <Home size={18} /> Home
            </NavLink>
            <NavLink to="/allproducts" onClick={() => setOpen(false)} className={linkClass}>
              <Activity size={18} /> Requests
            </NavLink>
            <NavLink to="/personaldashboard" onClick={() => setOpen(false)} className={linkClass}>
              <Grid size={18} /> Dashboard
            </NavLink>
            <NavLink to="/profile" onClick={() => setOpen(false)} className={linkClass}>
              <User size={18} /> Profile
            </NavLink>
          </div>

          {/* Drawer Footer (Logout) */}
          <div className="p-4 border-t border-gray-50">
            <button
              onClick={() => {
                setOpen(false);
                handleLogout();
              }}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;