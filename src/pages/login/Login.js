import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import './Login.css'

const Login =  (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const request = await axios.post('http://localhost:8000/users/login', {
            email,
            password
        })
        localStorage.setItem('userData', JSON.stringify(request.data))
        props.history.push('/books')
    }

    return (
        <div className="div-margin-top">
            <form className="div-form" onSubmit={handleLogin}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}

export default withRouter(Login)