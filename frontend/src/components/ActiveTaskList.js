import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ActiveTaskList() {

    const [theActiveTaskList, setTheActiveTaskList] = useState();

    let getTaskList = async() => {
        await axios
            .get('/api/tasks/tasks')
            .then(tasks => {
                setTheActiveTaskList(tasks.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let editClick = (task_key) => {
        return console.log(task_key)
    }

    function deleteClick(task_key){
        axios
            .delete(`/api/tasks/delete/${task_key}`)
            .then(getTaskList())
            .catch((error) => {console.log(error)})
    }

    //console.log(theTaskList);

    useEffect(() => {
        getTaskList();
    },[]);

    let activeTask = `<input type="button" value="Complete" onClick={() => completeClick(value.task_key)}></input>`;
    let completedTask = `<input type="button" value="Reopen" onClick={() => reopenClick(value.task_key)}></input>`;

    if (!theActiveTaskList){
        return(<>Loading</>)
    }
    else{
        return(
            <>
                {theActiveTaskList.map((value, index) => (
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

export default ActiveTaskList;