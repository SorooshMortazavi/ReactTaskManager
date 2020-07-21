import React, { Component } from "react";

export default class TaskInput extends Component {

    state={inputValue:""}

    handleOnChange = (event) => {
        this.setState({inputValue:event.target.value})
    }

    handleOnClick = () => {
        this.props.addTask(this.state.inputValue);
        this.setState({inputValue:""});
    }

  render() {
    return (
      <>
        <form className="form-control border-0 mt-4 d-flex justify-content-center">
          <input className="w-75" value={this.state.inputValue}  onChange={this.handleOnChange} placeholder="write task title:" type="text" />
          <input className="w-25 btn btn-success" type="button" value="ADD TASK" onClick={this.handleOnClick} />
        </form>
      </>
    );
  }
}
