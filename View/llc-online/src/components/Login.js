import React, { useState } from "react";
import { loginStyles, loginLabelStyles, loginInputStyles, loginButtonStyles, loginLinkStyles } from "../style/Login.style";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email and password to the server
    fetch('/api/accounts/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (response.ok) {
          // Redirect user to home page
          props.history.push('/');
          alert('Login Successful!');
        } else {
          // Display an error message
          alert('Invalid email or password');
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  }

  return (
    <div style={loginStyles} className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label style={loginLabelStyles} htmlFor="email">Email:</label>
        <input style={loginInputStyles} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label style={loginLabelStyles} htmlFor="password">Password:</label>
        <input style={loginInputStyles} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button style={loginButtonStyles} type="submit">Login</button>
      </form>
      <a style={loginLinkStyles} onClick={() => props.onFormSwitch('Register')}>Don't have an account with LLC? Register here.</a>
    </div>
  );
}