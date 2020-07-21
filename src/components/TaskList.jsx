import React from "react";
import Task from './Task'

export default function TaskList(props) {

    const taskRender = () => {
       return props.tasks.map((task,index) => {
                return(
                    <Task index={index+1} title={task.title} key={index} deleteTask={props.deleteTask}/>
                );
         } )
    }
  return (
    <div>
      <table className="table mt-4 table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">N</th>
            <th className="w-50 text-center" scope="col">title</th>
            <th className="w-25 text-center" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {taskRender()}
        </tbody>
      </table>
    </div>
  );
}
