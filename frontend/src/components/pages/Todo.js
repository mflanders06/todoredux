import React from 'react';
import { Link } from "react-router-dom";

function Todo() {
    return(
        <>
            <div>This is the ToDo page</div>
            <Link to="/">Back to Welcome</Link>
        </>
    )
}

export default Todo;