import React from "react";

function ToDoList({ todolist,deleteToDo,completeToDo, editToDo }) {

 
  return <div>
    {todolist?.map(todo => {
      return <div className="todolist" key={todo.id}>
        <input className='to-do-list-input' style={{ textDecoration: todo.complete ? "line-through" : "" }}type="text" value={todo.task} readOnly/>
        <button className="toDoListButtons" onClick={completeToDo} id={todo.id}>Done<i className='fa fa-check'></i></button>
        <button className="toDoListButtons" id={todo.id} onClick={editToDo}>Edit <i className='fa fa-edit'></i></button>
        <button className="toDoListtButtons" onClick={deleteToDo} id={todo.id} >Delete <i className='fa fa-trash'></i></button> <hr />
      </div>
    })}
  </div>
}
export default ToDoList