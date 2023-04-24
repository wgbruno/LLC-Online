import React, { useState } from 'react';
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export default function LoginPage() {
    const [ currentForm, setCurrentForm ] = useState('login');

    const toggleForm = ( formName ) => {
        setCurrentForm( formName );
    }

    const loginPageStyles = {
        backgroundColor: '#209765', // Dark green background color
        height: '100vh', // Set height of the container to full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        color: '#FFF',
        borderRadius: '20px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        padding: '40px'
    }

    return (
        <div style={loginPageStyles}>
            { currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> }
        </div>
    )
}