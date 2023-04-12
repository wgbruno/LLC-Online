import React, { useState } from "react";
import { loginStyles, loginLabelStyles, loginInputStyles, loginButtonStyles, loginLinkStyles } from "../style/Login.style";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div style={loginStyles} className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label style={loginLabelStyles} htmlFor="name">Full Name:</label>
            <input style={loginInputStyles} value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="John Doe" id="name"/>
            <label style={loginLabelStyles} htmlFor="email">Email:</label>
            <input style={loginInputStyles} value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label style={loginLabelStyles} htmlFor="password">Password:</label>
            <input style={loginInputStyles} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button style={loginButtonStyles} type="submit">Register</button>
          </form>
          <a style={loginLinkStyles} onClick={() => props.onFormSwitch('Login')}>Already have an account with LLC? Login here.</a>
        </div>
      )
}