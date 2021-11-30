import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {

    const [loginEmail, setLoginEmail]       = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regEmail, setRegEmail]           = useState('');
    const [regPassword1, setRegPassword1]   = useState('');
    const [regPassword2, setRegPassword2]   = useState('');

    function onChangeLoginEmail(val)     { setLoginEmail( prevEmail => val) }
    function onChangeLoginPassword(val)  { setLoginPassword( prevPass => val) }
    function onChangeRegEmail(val)       { setRegEmail( prevEmail => val) }
    function onChangeRegPass1(val)       { setRegPassword1( prevPass => val ) }
    function onChangeRegPass2(val)       { setRegPassword2( prevPass => val ) }

    function onClickLogin(){
        let email = loginEmail;
        let password = loginPassword;

        axios
            .post('/api/auth/login', {email, password})
            .then( (res) => {
                console.log(res)
            } )
            .catch( e => { console.log(e)})
            
        console.log(loginEmail);
        console.log(loginPassword);
    }

    function onClickReg(){
        console.log(regEmail);
        console.log(regPassword1);
        console.log(regPassword2);
    }

    return(
        <>
            <div className="placeholder">
                <div className="loginForm">
                    <h2>Login</h2>
                    <label>email:</label>
                    <input type="text" id="loginEmail"onChange={e => onChangeLoginEmail(e.target.value)} ></input>

                    <label>password:</label>
                    <input type="password" id="loginPassword" onChange={e => onChangeLoginPassword(e.target.value)} ></input>

                    <input type="button" id="submitLogin" name="submitLogin" value="Login" onClick={ e => onClickLogin()}></input>
                </div>
                <div className="regForm">
                    <h2>Register</h2>
                    <label>email:</label>
                    <input type="text" id="regEmail" onChange={e => onChangeRegEmail(e.target.value)} ></input>

                    <label>password:</label>
                    <input type="password" id="regPassword1" onChange={e => onChangeRegPass1(e.target.value)} ></input>

                    <label>confirm password:</label>
                    <input type="password" id="regPassword2" onChange={e => onChangeRegPass2(e.target.value)} ></input>

                    <input type="button" id="submitRegister" value="Register" onClick={ e => onClickReg()}></input>
                </div>
                <Link to="/">Back to Welcome</Link>
            </div>
        </>
    )
}

export default Login;