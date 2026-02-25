import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaCertificate, FaBell, FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Certification Tracker</h2>

      <Link to="/">
        <FaHome /> Dashboard
      </Link>

      <Link to="/add">
        <FaPlusCircle /> Add Certification
      </Link>

      <Link to="/my-certificates">
        <FaCertificate /> My Certificates
      </Link>

      <Link to="/alerts">
        <FaBell /> Expiry Alerts
      </Link>

      <Link to="/login">
        <FaSignInAlt /> Login
      </Link>

      <Link to="/signup">
        <FaUserPlus /> Sign Up
      </Link>
    </div>
  );
}

export default Sidebar;