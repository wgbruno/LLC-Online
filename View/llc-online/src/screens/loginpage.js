import React, { useState } from 'react';
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export default function LoginPage()
{
    const [ currentForm, setCurrentForm ] = useState('login');

    const toggleForm = ( formName ) => {
        setCurrentForm( formName );
    }
    return (
        <div>
            <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        </div> 
    )
}