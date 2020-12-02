import React from 'react';
import { navigate } from "@reach/router";
import { loginUser } from "../Services/service";

export default function Login() {

    function handleLogin() {
        loginUser("1234").then(data => {
            if (data === "") {
                navigate('/Details');
            }
        });
    }

    return (
        <div class="main">
            <p class="sign" align="center">LOGIN</p>
            <form class="form1">
                <input class="tb" type="text" align="center" placeholder="ID" />
                <input class="tb" type="text" align="center" placeholder="Email" />
                <input class="tb" type="password" align="center" placeholder="Password" />
                <a class="submit" align="center" onClick={() => handleLogin()}>Login</a>
            </form>
        </div>
    )
}

