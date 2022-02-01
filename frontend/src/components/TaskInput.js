import React from 'react';


function TaskInput() {

    function createTask(){
        console.log("hi");
        return;
    }

    return(
        <>
            <div>This is the display for task inputs</div>

            <div>Title: </div>
            <input type="text"></input>

            <div>Task: </div>
            <input type="text"></input>

            <div>Due Date: </div>
            <input type="date"></input>

            <input type="button" value="Create" onClick={createTask} ></input>
        </>
    )
}

export default TaskInput;