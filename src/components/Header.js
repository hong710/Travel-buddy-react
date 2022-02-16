import React from 'react';


function Header() {


    return (
        <header id="header-img"  className="d-flex justify-content-center align-items-center">
            <div className="container ">
                <div className="row col-6" >
                    <h5 className="text-custom-yellow">BEST DESTINATIONS AROUND THE WORLD</h5>
                    <h1 className="text-custom-dark custom-heading display-3">Search, plan and travel for your next trip here.</h1>
                    
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <button className="btn btn-outline-light px-4 btn-sm px-5 py-2 ">READ MORE</button>
                </div>
            </div>
        </header>
    )}

export default Header;
