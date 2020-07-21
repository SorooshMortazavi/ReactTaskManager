import React from "react";

export default function Task(props) {


  const handleDelete = () => {
    props.deleteTask(props.title)
  }  

  return (
    <tr className="border">
      <th className="border-right" scope="row">{props.index}</th>
      <td className="border-right">{props.title}</td>
      <td>
        <div className="d-flex justify-content-around">
          <span className="material-icons text-danger font-weight-bold" onClick={handleDelete}>
            delete
          </span>
          <span className="material-icons text-success font-weight-bold">
            create
          </span>
        </div>
      </td>
    </tr>
  );
}
