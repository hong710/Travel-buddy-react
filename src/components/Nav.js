import React from "react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function Nav({setCoordinates}) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            
            <NavLink to="/" exact>
                <img src={logo} height="80" alt="CoolBrand" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/map" exact>
                    <p className="nav-link" aria-current="page">Restaurants</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/map" exact>
                    <p className="nav-link" aria-current="page">Hotels</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/map" exact>
                    <p className="nav-link" aria-current="page">Attractions</p>
                    </NavLink>
                </li>
            </ul>
            <form className="d-flex">
                <SearchBar setCoordinates={setCoordinates}/>
                <NavLink to="/login" exact>
                    <button className="btn btn-link text-success ms-4">Log in</button>
                </NavLink>

                <NavLink to="/signup" exact>
                <button className="btn btn-outline-custom-yellow ms-4">Sign Up</button>
                </NavLink>
            </form>
        </div>
        </div>
    </nav>

    );
}

export default Nav;