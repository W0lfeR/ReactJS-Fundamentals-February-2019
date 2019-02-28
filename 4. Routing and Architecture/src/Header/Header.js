import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';


class Header extends Component {
    render() {
        return (
            <header> <NavLink exact to="/" className="logo">Interactive IMDB</NavLink>
                <div className="header-right">
                    {this.props.username ?
                        <span>
                            <NavLink exact to="/">Welcome {this.props.username}</NavLink>
                            {this.props.isAdmin ?
                            <NavLink to="/create">Create</NavLink> : ""}
                            <NavLink to="/logout" onClick={() => {
                                // this.props.isLogedOut()   
                            }}>Logout</NavLink>
                        </span> :
                        <span>
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </span>
                    }

                </div>
            </header>
        );
    }
}

export default Header;
