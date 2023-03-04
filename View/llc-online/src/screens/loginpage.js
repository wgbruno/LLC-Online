import React, { useState } from 'react';
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export default function LoginPage()
{
    const [ currentForm, setCurrentForm ] = useState('login');

    const toggleForm = ( formName ) => {
        setCurrentForm( formName );
    }
    return ( // IMPORTANT: form switch from login to register when button is pressed
        <div className="LoginPage">
        {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        </div> 
    )
}