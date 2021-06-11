import React, {Component} from 'react';
import "./NavbarStyle.css";
import avatar from "../../img/avatar.png";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <>

                <div className="NavBar">
                    <nav className="nav">
                        <div className="profile">
                            <img src={avatar} alt="Jaxongir Abdusalomov"/>
                        </div>
                        <ul className="nav-items">
                            <li className="nav-item">
                                <NavLink className={"a"} to="/" exact activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"a"} to="/about" exact activeClassName="active">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"a"} to="/portfolios" exact
                                         activeClassName="active">Portfolios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"a"} to="/blogs" exact activeClassName="active">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"a"} to="/contact" exact activeClassName="active">Contact</NavLink>
                            </li>
                        </ul>
                        <footer className="footer">
                            <p>@2021 Jaxongir Abdusalomov</p>
                        </footer>
                    </nav>
                </div>

            </>
        );
    }
}

export default Navbar;