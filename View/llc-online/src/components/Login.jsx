import React, { useState } from "react";

export default function Login()
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const manageSubmit = (e) => {
        e.preventDefault();
        console.log( email );
    }

    return (
        <form>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input value={pass} type="password" placeholder="**********" id="password" name="password" />
            <button>Log In</button>
        </form>
    )
}