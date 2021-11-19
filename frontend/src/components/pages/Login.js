import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword1, setRegPassword1] = useState('');
    const [regPassword2, setRegPassword2] = useState('');

    function onChangeLoginEmail(val)    { setLoginEmail( prevEmail => val) }
    function onChangeLoginPassword(val) { setLoginPassword( prevPass => val) }
    function onChangeRegEmail(val)      { setRegEmail( prevEmail => val) }
    function onChangeRegPass1(val)       { setRegPassword1( prevPass => val ) }
    function onChangeRegPass2(val)       { setRegPassword2( prevPass => val ) }

    return(
        <>
            <div className="placeholder">
                <div className="loginForm">
                    <h2>Login</h2>
                    <form>
                        <label for="loginEmail">email:</label>
                        <input type="text" id="loginEmail" name="loginEmail"></input>

                        <label for="loginPassword">password:</label>
                        <input type="password" id="loginPassword" name="loginPassword"></input>
                    </form>
                </div>
                <div className="regForm">
                    <h2>Register</h2>
                    <form>
                        <label for="regEmail">email:</label>
                        <input type="text" id="regEmail" name="regEmail"></input>

                        <label for="regPassword1">password:</label>
                        <input type="password" id="regPassword1" name="regPassword1"></input>

                        <label for="regPassword2">confirm password:</label>
                        <input type="password" id="regPassword2" name="regPassword2"></input>
                    </form>
                </div>
                <Link to="/">Back to Welcome</Link>
            </div>
        </>
    )
}

export default Login;