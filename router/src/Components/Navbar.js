import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const auth = useAuth
  return (
    <nav>
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">About</NavLink>
      <NavLink style={navLinkStyle} to="/products">Products</NavLink>
      <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
{
  !auth.user &&(
    <NavLink style={navLinkStyle} to="/login">Login</NavLink>

  )
}
    </nav>
  );
}

export default Navbar;

// Navlink : it have an class .active with it , used for navbar . breadcrumbs etc
// Link : it have href arg and navigate to another page