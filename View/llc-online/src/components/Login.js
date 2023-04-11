import React, { useState } from "react";
import { loginStyles, loginLabelStyles, loginInputStyles, loginButtonStyles, loginLinkStyles } from "../style/Login.style";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div style={loginStyles} className="auth-form-container">
            <h2 style={{marginBottom: '20px'}}>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label style={loginLabelStyles} htmlFor="email">Email:</label>
                <input style={loginInputStyles} value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label style={loginLabelStyles} htmlFor="password">Password:</label>
                <input style={loginInputStyles} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button style={loginButtonStyles} type="submit">Log In</button>
            </form>
            <a style={loginLinkStyles} onClick={() => props.onFormSwitch('register')}>Don't have an account with LLC? Register here.</a>
        </div>
    )
}