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
                        {value.task_name}{value.task_description}{value.created_date}{value.due_date}
                    </div>
                ))}
                <div>This is the display for the task list</div>

            </>
        )
    }
}

export default TaskList;