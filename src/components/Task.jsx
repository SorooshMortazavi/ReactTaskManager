import React from "react";

export default function Task(props) {

  
  const handleDeleteTask = () => {
    props.deleteTask(props.title);
  }  

  const handleEditTask = () => {
      props.editTask(props.title);
  }

  return (
    <tr className="border">
      <th className="border-right" scope="row">{props.index}</th>
      <td className="border-right">{props.title}</td>
      <td>
        <div className="d-flex justify-content-around">
          <span className="material-icons text-danger font-weight-bold" style={{cursor:'pointer'}} onClick={handleDeleteTask}>
            delete
          </span>
          <span className="material-icons text-success font-weight-bold" style={{cursor:'pointer'}} onClick={handleEditTask}>
            create
          </span>
        </div>
      </td>
    </tr>
  );
}
