
//Using a class component, as a refresher on how to do it the old way, including class state.
import axios from 'axios';
import React, { Component } from 'react';

class TaskInput extends Component{
    constructor(){
        super();
        this.state={
            titleInput:"",
            taskInput:"",
            dueDateInput:"",
            taskList:""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /*
    getActiveTasks = () => {
        axios.get('/api/tasks/activeTasks')
        .then(tasks => {
            this.setState({taskList: tasks.data})
        })
    }
    */
   
    createTask = () => {

        const {titleInput, taskInput, dueDateInput} = this.state;

        if(this.state.titleInput.length > 0 && this.state.taskInput.length > 0 && this.state.dueDateInput.length > 0){
            axios.post('api/tasks/tasks', {titleInput, taskInput, dueDateInput})
                .then( res => {
                    console.log(res)
                })
                .catch((e) => {
                    console.log(e);
                })
            this.setState({ titleInput: "", taskInput: "", dueDateInput: ""});
            //this.getActiveTasks();
        }else{
            return alert('Please fill in all task fields');
        }
    }

    render(){
        return(
            <>

                <div>Title: </div>
                <input name="titleInput" type="text" value={this.state.titleInput} onChange={this.handleChange} ></input>

                <div>Task: </div>
                <input name="taskInput" type="text" value={this.state.taskInput} onChange={this.handleChange} ></input>

                <div>Due Date: </div>
                <input name="dueDateInput" type="date" value={this.state.dueDateInput} onChange={this.handleChange} ></input>

                <input type="button" value="Create" onClick={this.createTask} ></input>
            </>
        )
    }

}

export default TaskInput;