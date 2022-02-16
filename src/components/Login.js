import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
const loginAPI = "http://localhost:3000/api/v1"

function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    function loginUsernameOnChange(event) {
        setLoginUsername(event.target.value);
    }

    function loginPasswordOnChange(event) {
        setLoginPassword(event.target.value);
    }

    const configObj = {
        method: "POST",
        headers: {
            Accepts: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({user: {username: loginUsername, password: loginPassword}}),
    };


    function handleLoginSubmit(e) {
        e.preventDefault();

        fetch(`${loginAPI}/login`, configObj)
        .then((res) => res.json())
        .then((json) => {
            localStorage.setItem('jwt',json.jwt );
            setMessage(json.message)
            //console.log(json)
            
            if (!json.message){
                return navigate('/map');
            }           
        });

        setLoginUsername("");
        setLoginPassword("");

    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card" >
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleLoginSubmit}>
                                <div className="mb-md-5 mt-md-4 ">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className=" mb-5">Please enter your login and password!</p>
                                    <p className="text-danger mmb-5">{message&& message}</p>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="typeEmailX" className="form-control form-control-lg" value={loginUsername} onChange={loginUsernameOnChange} />
                                        <label className="form-label" htmlFor="typeEmailX">Username</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" value={loginPassword} onChange={loginPasswordOnChange} />
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-custom-yellow btn-lg px-5" type="submit" >Login</button>
                                </div>
                                </form>

                                <div>
                                    <p className="mb-0">Don't have an account?</p> <Link to="/signup">
                                        <p className="fw-bold">Sign Up</p>
                                    </Link>
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
