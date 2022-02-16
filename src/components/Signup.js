import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const usersAPI = "http://localhost:3000/api/v1";


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")
    // const [lastName, setLastName] = useState("")

    function handleEmailOnChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordOnChange(event) {
        setPassword(event.target.value);
    }

    function handleUserNameOnChange(event) {
        setUsername(event.target.value)
    }

    // function handleLastNameOnChange(event) {
    //     setLastName(event.target.value)
    // }

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({user: {username, email, password}}),
    };
    function handleSignUpSubmit(e) {
        e.preventDefault();

        fetch(`${usersAPI}/users`, configObj)
        .then((res) => res.json())
        .then((json) => console.log(json));
            

        setUsername("")
        // setLastName("")
        setEmail("")
        setPassword("")
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                    <p className=" mb-5">Welcome! Your adventure starts here.</p>

                                    <form onSubmit={handleSignUpSubmit}>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="first_name"
                                            id="first_name"
                                            className="form-control form-control-lg"
                                            onChange={handleUserNameOnChange}
                                            value={username}
                                        />
                                        <label className="form-label" htmlFor="email">
                                            User Name
                                        </label>
                                    </div>

                                    {/* <div className="form-outline mb-4">
                                        <input
                                            type="last_name"
                                            id="last_name"
                                            className="form-control form-control-lg"
                                            onChange={handleLastNameOnChange}
                                            value={lastName}
                                        />
                                        <label className="form-label" htmlFor="email">
                                            Last name
                                        </label>
                                    </div> */}
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control form-control-lg"
                                            onChange={handleEmailOnChange}
                                            value={email}
                                        />
                                        <label className="form-label" htmlFor="email">
                                            Email
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control form-control-lg"
                                            onChange={handlePasswordOnChange}
                                            value={password}
                                        />
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                    </div>

                                    {/* <div className="form-outline mb-4">
                                        <input type="password" id="confirm_password" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                                    </div> */}

                                    <button
                                        className="btn btn-outline-custom-yellow btn-lg px-5"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button> 
                                </form>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        Already have an account?{" "} </p>
                                    <Link to="/login">
                                        <p className="fw-bold">Sign In</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
