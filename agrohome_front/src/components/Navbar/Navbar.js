import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import logo_agro from "../../resources/Logo/agro-logo-full.png";
import "./Navbar.css";
import Dropdown from "./Dropdown";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            dropdown: false,
        };
    }

    handleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <nav className="NavItems">
                <div className="navbar-logo">
                    <img src={logo_agro} alt="AgroHome Logo" />
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i
                        className={
                            this.state.clicked ? "fas fa-times" : "fas fa-bars"
                        }
                    ></i>
                </div>
                <ul
                    className={
                        this.state.clicked ? "nav-menu active" : "nav-menu"
                    }
                >
                    <li>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active-link"
                            className="nav-links"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li onClick={this.handleDropdown}>
                        <div
                            className={
                                this.state.dropdown
                                    ? "nav-links active-link"
                                    : "nav-links"
                            }
                        >
                            Categories
                            <i
                                className="fa fa-caret-down"
                                aria-hidden="true"
                            ></i>
                        </div>
                        {this.state.dropdown && <Dropdown />}
                    </li>

                    <NavLink
                        exact
                        to="/contactus"
                        activeClassName="active-link"
                        className="nav-links"
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        exact
                        to="/about"
                        activeClassName="active-link"
                        className="nav-links"
                    >
                        About
                    </NavLink>

                    <NavLink
                        exact
                        to="/cart"
                        activeClassName="active-link"
                        className="nav-links"
                    >
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                    </NavLink>

                    <NavLink
                        exact
                        to="/signup"
                        activeClassName="active-link"
                        className="nav-links-mobile"
                    >
                        Sign Up
                    </NavLink>
                </ul>
                <Button to="/signup">Sign Up</Button>
            </nav>
        );
    }
}

export default Navbar;
