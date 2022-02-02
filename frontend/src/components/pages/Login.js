import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import * as actions from '../../components/store/Actions';
import store from '../../components/store/Store';
import { connect } from 'react-redux';

function Login(props) {

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
                console.log(res);
                setAuthTrue();
            } )
            .catch( e => { console.log(e)})

        console.log(loginEmail);
        console.log(loginPassword);
    }

    function onClickReg(){

        let email = regEmail;
        let pass1 = regPassword1;
        let pass2 = regPassword2;

        console.log("pass1 is: ", pass1, "pass2 is: ", pass2)

        if(!(pass1 === pass2)){
            return alert('Passwords do not match')
        }

        let password = pass1;

        axios
            .post('/api/auth/register', {email, password})
            .then( res => {
                console.log(res)
            })
            .catch( e => console.log(e) )


        console.log(regEmail);
        console.log(regPassword1);
        console.log(regPassword2);
        console.log('This is redux', props.auth)
    }

    function setAuthTrue()      { props.authTrue(); return }
    function setAuthFalse()     { props.authFalse(); return }

    function consoleRedux() {
        return console.log(props.auth)
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
                <div className="testerButton">
                    <input type="button" id="checkRedux" value="Check Redux" onClick={ e => consoleRedux()}></input>
                </div>
                <Link to="/">Back to Welcome</Link>
            </div>
        </>
    )
}

function mapStateToProps(state){
    return state
}

let mapDispatchtoProps = {
    authTrue: actions.authTrue,
    authFalse: actions.authFalse
}

export default connect(mapStateToProps, mapDispatchtoProps) (Login);