import React, { useState } from "react";
import { loginStyles, loginLabelStyles, loginInputStyles, loginButtonStyles, loginLinkStyles } from "../style/Login.style";

export const Register = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    var user = {
      email: email,
      password: pass,
      first_name: firstName,
      last_name: lastName
    }
    console.log(JSON.stringify(user));
    try {
      let response = await fetch('/account', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });
      const result = response.json();
      alert("Account Registered! Please login.");
    } catch (error) {
      alert("Account failed to register. Error: ", error);
    }
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