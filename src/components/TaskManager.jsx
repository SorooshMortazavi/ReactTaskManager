import React, { Component } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Header from './Header';

export default class TaskManager extends Component {
  state = {
    tasks: [
        {title:'this is a test'}
    ],
    //when we want to edit a task we put task`s title in editTaskTitle inside states and send this to Task input as props.
    editTaskTitle: null,
  };

  //this callback function do both add task and editing task
  addAndUpdateTask = (newtaskTitle,oldTaskTitle) => {
      
        // with this if statement we check the title dont be repetitive or empty
        if(this.state.tasks.filter(task => task.title === newtaskTitle).length > 0 || newtaskTitle.length ===0){
            alert('please dont use repetitive or empty title')
            return;
        }

      if(!this.state.editTaskTitle){
        this.setState({
            ...this.state,
            tasks: [...this.state.tasks, { title: newtaskTitle }],
          });
      }else{
        let tasks = [...this.state.tasks];
        //update task list with new task title come from TaskInput
        tasks = tasks.map(task => {
            if(task.title === oldTaskTitle){
               return {title:newtaskTitle};
            }else{
                return task
            }
            
        });
        //Updating state with now tasklist
        this.setState({
            ...this.state,
            tasks:tasks
        })

        this.setState({editTaskTitle:null})
      }
    
  };

  // callback function for deleting tasks
  deleteTask = (taskTitle) => {
    if (window.confirm(`are you sure for delete: \n ${taskTitle}`)) {
      let tasks = [...this.state.tasks]
      tasks = tasks.filter(task => task.title !== taskTitle);
      this.setState({
          ...this.state,
          tasks:tasks
      })
    }else{
        return;
    }
  };


  //this callback is for put editing task inside tasktitles
  editTask = (taskTitle) => {
    this.setState({editTaskTitle:taskTitle})
  }
 

  componentDidMount(){
      // read state from local storage and load it
      let state = JSON.parse(localStorage.getItem('state'))
      this.setState(state)
  }

  componentDidUpdate(prevProps,prevState,snapshot){
     // saving 
    localStorage.setItem('state',JSON.stringify(this.state))
  }

  render() {
    return (
      <div>
        <Header  editTaskTitle={this.state.editTaskTitle}/>
        <TaskInput addAndUpdateTask={this.addAndUpdateTask} editTaskTitle={this.state.editTaskTitle} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} />
      </div>
    );
  }
}
