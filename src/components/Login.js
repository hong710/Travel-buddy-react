import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const loginAPI = "http://localhost:3000/login"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailOnChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordOnChange(event) {
        setPassword(event.target.value);
    }

    console.log(email)
    console.log(password)

    const userCreds = {
        email: email,
        password: password,
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userCreds),
    };
    function handleLoginSubmit(e) {
        e.preventDefault();

        fetch(loginAPI, configObj)
            .then((resp) => {
                if (resp.ok) {
                    return window.location.href = "/"
                }
                return resp.json()
            }).then((data) => console.log(data));

        setPassword("")
        setEmail("")
    }



    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card" >
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 ">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className=" mb-5">Please enter your login and password!</p>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={handleEmailOnChange} />
                                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={handlePasswordOnChange} />
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-custom-yellow btn-lg px-5" type="submit" onClick={handleLoginSubmit}>Login</button>
                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account?</p> <NavLink to="/signup">
                                        <p className="fw-bold">Sign Up</p>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
