import React from "react";
import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sign">Sign</NavLink>
        </li>
        <li>
          <NavLink to="/loading">Loading</NavLink>
        </li>
        <li>
          <NavLink to="/carousel">Carousel</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PublicNavBar;
