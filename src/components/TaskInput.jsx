import React, { Component } from "react";

export default class TaskInput extends Component {

    state={inputValue:""}

    handleOnChange = (event) => {
        this.setState({inputValue:event.target.value})
    }

    handleOnClick = () => {
        if(this.props.editTaskTitle){
            this.props.addAndUpdateTask(this.state.inputValue,this.props.editTaskTitle);
        }else{
            this.props.addAndUpdateTask(this.state.inputValue);
        }
        
        this.setState({inputValue:""});
    }


    componentDidUpdate(prevProps){
        if(prevProps.editTaskTitle !== this.props.editTaskTitle && this.props.editTaskTitle !== null){
            this.setState({inputValue:this.props.editTaskTitle});
        }
    }
    
  render() {    
      
        let buttonValue ="ADD TASK";
        if(this.props.editTaskTitle){
            buttonValue = 'DONE EDITING';
        }

    return (
      <>
        <form className="form-control border-0 mt-4 d-flex justify-content-center">
          <input className="w-75" value={this.state.inputValue}  onChange={this.handleOnChange} placeholder="write task title:" type="text" />
          <input className="w-25 btn btn-success" type="button" value={buttonValue} onClick={this.handleOnClick} />
        </form>
      </>
    );
  }
}
