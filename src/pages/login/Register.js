import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div className="div-margin-top">
                <form className="div-form">
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" className="form-control" placeholder="Enter full name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">sign in?</Link>
                    </p>
                </form>
            </div>
        );
    }
}