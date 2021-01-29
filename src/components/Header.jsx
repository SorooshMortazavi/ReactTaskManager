import React from 'react'

export default function Header(props) {

    //choose headerTitle based on editTaskTitle
    const headerTitle=()=>{
        if(props.editTaskTitle){
            return 'Editing Mode'
        }else{
            return 'Add Task Mode'
        }
    }
    return (
        <h1 className="d-flex justify-content-center">{headerTitle()}</h1>
    )
}
