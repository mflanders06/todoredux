import React from 'react';
import { Link } from "react-router-dom";
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';

function Todo() {
    return(
        <>
            <div>This is the ToDo page</div>
            <Link to="/">Back to Welcome</Link>
            <div><TaskInput /></div>
            <div><TaskList /></div>
        </>
    )
}

export default Todo;