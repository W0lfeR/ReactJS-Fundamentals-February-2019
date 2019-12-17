import React from 'react'
import './styles.css'
import { NavLink } from "react-router-dom";


const Navbar = props => {
    const { loggedIn, isAdmin, logout, } = props;
    const userId = localStorage.getItem("userId");
  
    return (

        <div className="bs-component">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                <NavLink className="nav-link-right" to="/">Home</NavLink>
                {isAdmin && (
              <NavLink className="nav-link-right" to="/create"> </NavLink>
            )}
            {!loggedIn && (
              <NavLink className="nav-link-right" to="/login">Login</NavLink>
            )}
            {!loggedIn && (
              <NavLink className="nav-link-right" to="/register">Register</NavLink>
            )}
            {loggedIn && (
              <a href="/" className="nav-link-right" onClick={logout}>Logout</a>
            )}
                </ul>
            </div>
        </nav>
    </div>

    )
}

export default Navbar;