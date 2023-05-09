import React from "react";

function ToDoList({ todolist, deleteToDo, completeToDo, editToDo }) {

console.log(todolist)
  return <div className="to-do-list-container">
    {todolist.map(todo => {
      return <div className="to-do-list" key={todo.id}>
        <input className='to-do-list-input' style={{ textDecoration: todo.complete ? "line-through" : "" }} type="text" value={todo.task} readOnly />
        <button className="toDoListButtons done-btn" onClick={completeToDo} id={todo.id}>Done<i className='fa fa-check'></i></button>
        <button className="toDoListButtons "  disabled={todo.complete}id={todo.id} onClick={editToDo}>Edit <i className='fa fa-edit'></i></button>
        <button className="toDoListButtons delete-btn" onClick={deleteToDo} id={todo.id} >Delete <i className='fa fa-trash'></i></button> <hr />
      </div>
    })}
  </div>
}
export default ToDoList