import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {

    const [theTaskList, setTheTaskList] = useState();

    let getTaskList = async() => {
        await axios
            .get('/api/tasks/tasks')
            .then(tasks => {
                setTheTaskList(tasks.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let editClick = (task_key) => {
        return console.log(task_key)
    }

    function deleteClick(task_key){
        return console.log(task_key)
    }

    //console.log(theTaskList);

    useEffect(() => {
        getTaskList();
    },[]);

    if (!theTaskList){
        return(<>Loading</>)
    }
    else{
        return(
            <>
                {theTaskList.map((value, index) => (
                    <div key={value.task_key}>
                        {value.task_name}
                        {value.task_description}
                        {value.created_date}
                        {value.due_date}
                        <input type="button" value="Edit" onClick={() => editClick(value.task_key)}></input>
                        <input type="button" value="Delete" onClick={() => deleteClick(value.task_key)}></input>
                    </div>
                ))}
                <div>This is the display for the task list</div>

            </>
        )
    }
}

export default TaskList;