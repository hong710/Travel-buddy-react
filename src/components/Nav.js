import React from "react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav({setCoordinates}) {

    function logOutHandle(e){
        e.preventDefault();
        localStorage.removeItem("username");
        localStorage.removeItem("jwt");
        document.location.reload();
        
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            
            <Link to="/">
                <img src={logo} height="80" alt="CoolBrand" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {
                    localStorage.getItem('username')
                    ?
                    <li className="nav-item">
                        <Link to="/plan" >
                            <p className="nav-link" aria-current="page">Your Plan</p>
                        </Link>
                    </li>
                    :
                    <>
                    <li className="nav-item">
                        <Link to="/map" >
                        <p className="nav-link" aria-current="page">Restaurants</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/map">
                        <p className="nav-link" aria-current="page">Hotels</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/map">
                        <p className="nav-link" aria-current="page">Attractions</p>
                        </Link>
                    </li>
                    </>
                }
                
            </ul>



            <form className="d-flex">
                <SearchBar setCoordinates={setCoordinates}/>
                {                
                localStorage.getItem('username') 
                ? 
                <div className="btn-group ms-3">
                    <button type="button" className="btn btn-custom-yellow dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcome, {localStorage.getItem('username')}
                    </button>
                    <ul className="dropdown-menu">
                        <li><span className="dropdown-item">Profile</span></li>
                        <li><span className="dropdown-item">Your plan</span></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li> <span className="dropdown-item" onClick={logOutHandle}>Logout</span></li>
                    </ul>
                </div>
                :                 
                <>
                <Link to="/login">
                    <button className="btn btn-outline-custom-blue ms-4 px-3">Login </button>
                </Link>

                <Link to="/signup">
                <button className="btn btn-outline-custom-yellow ms-4">Sign Up</button>
                </Link>
                </>                
                }
                
            </form>
        </div>
        </div>
    </nav>

    );
}

export default Nav;