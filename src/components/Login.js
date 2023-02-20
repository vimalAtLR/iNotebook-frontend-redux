import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [creds, setCreds] = useState({email: "", password:""});
    let navigate = useNavigate();

    // handling submit button and call login api
    const handleSubmit = async (e) => {
        e.preventDefault();     // preventing from loading page

        let response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: Array.isArray(creds.email) ? creds.email[0] : "", password: Array.isArray(creds.password) ? creds.password[0] : ""})
        });
        response = await response.json();

        if (response.success) {
            localStorage.setItem('token', response.authtoken);
            navigate("/");
            props.showAlert("Logged in Successfully.", "success");
        } else {
            props.showAlert("Invalid Credentials!", "danger");
        }
    }

    // for change input value
    const onChange = (e) => {
        setCreds({...creds, [e.target.name] : [e.target.value] });
    }
    return (
        <div className='container'>
            <h2>Login for continue iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={creds.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" value={creds.password} onChange={onChange} name='password' id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
