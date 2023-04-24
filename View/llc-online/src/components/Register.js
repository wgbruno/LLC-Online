import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginStyles, loginLabelStyles, loginInputStyles, loginButtonStyles, loginLinkStyles } from "../style/Login.style";
import axios from 'axios';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:4000/account";
        
    let user = {
      email,
      password: pass,
      first_name: firstName,
      last_name: lastName
    };

    console.log(JSON.stringify(user));
  
    axios.post(baseURL, user)
      .then((response) => {
        let path = '/login';
        navigate(path);
      })
      .catch((error) => {
        console.log('Registration Error');
        console.log(error);
      });
  }

  return (
    <div style={loginStyles} className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label style={loginLabelStyles} htmlFor="firstName">First Name:</label>
        <input style={loginInputStyles} value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} placeholder="John" id="firstName"/>
        <label style={loginLabelStyles} htmlFor="lastName">Last Name:</label>
        <input style={loginInputStyles} value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} placeholder="Doe" id="lastName"/>
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