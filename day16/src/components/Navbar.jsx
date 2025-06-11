// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Optional CSS file for styling

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
    textDecoration: "underline",
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>{" "}
      |{" "}
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Contact
      </NavLink>
    </nav>
  );
}
