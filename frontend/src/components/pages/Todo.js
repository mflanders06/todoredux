import React from 'react';
import { Link } from "react-router-dom";
import TaskInput from '../TaskInput';
import ActiveTaskList from '../ActiveTaskList';

function Todo() {
    return(
        <>
            <div>This is the ToDo page</div>
            <Link to="/">Back to Welcome</Link>
            <div><TaskInput /></div>
            <div><ActiveTaskList /></div>
        </>
    )
}

export default Todo;