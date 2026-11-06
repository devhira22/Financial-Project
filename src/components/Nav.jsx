

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Close all menus
  const closeMenus = () => {
    setShowCategories(false);
    setMobileMenu(false);
  };

  // Toggle category dropdown
  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <header className="site-header">

      {/* LOGO */}
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenus}>
          <span className="brand-mark">M</span>
          <span>
            Money<span className="brand-light">Wise</span>
          </span>
        </Link>

        {/* HAMBURGER MENU */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenu((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? "✕" : "☰"}
        </button>

        {/* NAV LINKS */}
        <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>

          <NavLink to="/" onClick={closeMenus}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenus}>
            About Us
          </NavLink>

          <NavLink to="/blog" onClick={closeMenus}>
            Blog
          </NavLink>

          {/* CATEGORIES DROPDOWN */}
          <div className="category-dropdown">

            <button
              className="category-btn"
              onClick={toggleCategories}
              aria-expanded={showCategories}
            >
              Categories
              <span
                className={showCategories ? "arrow rotate" : "arrow"}
              >
                ▼
              </span>
            </button>

            {showCategories && (
              <div className="category-menu">

                <NavLink
                  to="/categories/budgeting"
                  onClick={closeMenus}
                >
                  Budgeting
                </NavLink>

                <NavLink
                  to="/categories/saving-tips"
                  onClick={closeMenus}
                >
                   Saving Tips
                </NavLink>

                <NavLink
                  to="/categories/money-management"
                  onClick={closeMenus}
                >
                   Money Management
                </NavLink>

                <NavLink
                  to="/categories/financial-education"
                  onClick={closeMenus}
                >
                  Financial Education
                </NavLink>

              </div>
            )}

          </div>

          <NavLink
            to="/contact"
            onClick={closeMenus}
            className="nav-contact"
          >
            Contact Us
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Nav;
