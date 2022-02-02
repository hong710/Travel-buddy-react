import React from "react";
import logo from "../assets/logo.png";

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        
        <div className="container">
                <i className="">
                    <img src={logo} height="80" alt="CoolBrand" />
                </i>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mt-4">
                        <p className="nav-item nav-link text-custom-blue">
                        Destinations
                        </p>
                        <p href="#" className="nav-item nav-link text-custom-blue">
                            Hotels
                        </p>
                        <p href="#" className="nav-item nav-link text-custom-blue">
                            Restaurants
                        </p>
                        <p href="#" className="nav-item nav-link text-custom-blue">
                            Attractions
                        </p>
                    </div>
                    <div className="navbar-nav ms-auto mt-4">
                        <p className="nav-item nav-link text-custom-blue">
                            LOGIN
                        </p>

                        <p className="nav-item nav-link text-white btn btn-custom-yellow px-2">
                            Sign Up
                        </p>
                    </div>
                </div>
            </div>
    </nav>
    );
}

export default Nav;