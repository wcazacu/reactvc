import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "../App.css";

export default function Root() {
  return (
    <>
      <nav>
        <ul className="NavBar">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list-apartment"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              List Apartment
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
