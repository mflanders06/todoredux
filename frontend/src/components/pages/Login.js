import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    return(
        <>
            <div className="placeholder">
                I made it to Login!
                <Link to="/">Back to Welcome</Link>
            </div>
        </>
    )
}

export default Login;