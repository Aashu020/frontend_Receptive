import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      {/* Upper Header */}
      <div
        style={{
          background: "var(--primary)",
          color: "var(--accent)",
          fontSize: "14px",
          padding: "5px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>📞 +91 98765 43210 | ✉️ info@receptivegroup.com</span>
        <div>
          <Link to="/login" style={{ color: "var(--accent)", marginRight: "15px" }}>
            Login
          </Link>
          <Link to="/register" style={{ color: "var(--accent)" }}>
            Register
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Logo */}
        <h1 style={{ fontFamily: "Raleway, sans-serif", color: "var(--primary)" }}>
          Receptive Group
        </h1>

        {/* Links */}
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0 }}>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "var(--primary)" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none", color: "var(--primary)" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" style={{ textDecoration: "none", color: "var(--primary)" }}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none", color: "var(--primary)" }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Lower / Dropdown Header */}
      <div
        style={{
          background: "var(--accent)",
          color: "var(--primary)",
          padding: "10px 20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/visa" style={{ color: "var(--primary)" }}>
          Visa Categories
        </Link>
        <Link to="/resources" style={{ color: "var(--primary)" }}>
          Resources
        </Link>
        <Link to="/news" style={{ color: "var(--primary)" }}>
          News & Updates
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
