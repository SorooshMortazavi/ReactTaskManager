import React, { Component } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList'

export default class TaskManager extends Component {

    state={
        tasks:[
            {title:"sample: go shopping"},
            {title:"sample: buy mask for family"},
            {title:"sample: study react"}
        ],
        editTaskTitle:null
    }

    addTask = (taskTitle) => {
      this.setState({
          ...this.state,
          tasks:[
              ...this.state.tasks,
              {title:taskTitle}
          ]
      })
    }
    
    deleteTask = (taskTitle) => {
        let tasks = [...this.state.tasks]
        tasks = tasks.filter(task => task.title !== taskTitle);
        this.setState({
            ...this.state,
            tasks:tasks
        })
    }

    
    render() {
        return (
            <div>
                <TaskInput addTask={this.addTask}/>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            </div>
        )
    }
}
