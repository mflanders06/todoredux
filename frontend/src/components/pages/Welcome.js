import React from 'react';
import { Link } from "react-router-dom";

function Welcome() {
    return(
        <>
            <div className="placeholder">
                <h1>Welcome to todo!</h1>
                <p>If you'd like to take some quick notes, feel free to type below... but if you really want to organize your life, register, and login.</p>
                <Link to="/login" className="loginBtn">Login</Link>
                <textarea></textarea>
            </div>
        </>
    )
}

export default Welcome;