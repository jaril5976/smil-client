import React from 'react';
import { Link } from "react-router-dom";
import Auth from "../helper/auth";

function Header() {
  return (
    <ul>
        <li>
            <Link to="/register">Register Page</Link>
        </li>
        {Auth.isLoggedIn() ? <li>
            <Link to="/logout">Logout Page</Link>
        </li>:
        <li>
            <Link to="/login">Login Page</Link>
        </li>}
        <li>
            <Link to="/home">Home Page</Link>
        </li>
    </ul>
  );
}

export default Header;
