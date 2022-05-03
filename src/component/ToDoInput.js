import React, { useState } from 'react'
import ToDoList from './ToDoList';

function ToDoInput() {
    let [inputValue, setInputValue] = useState('');
    let [toDoList, setToDoList] = useState([]);
    let [complete, setComplete] = useState(false);

    // adding Todo to the list
    function idGenerator() {
        return Math.random().toString().slice(2, 5);
    }

    function addToDo() {
        let todo = {
            task: inputValue,
            id: idGenerator(),
            complete: complete,
        }
        if (inputValue === "") {
            return;
        }
        for (const task of toDoList) {
            if (task.task.toLowerCase() === inputValue.toLowerCase()) {
                return;
            }
        }
        setToDoList([...toDoList, todo]);
    }

    //delete Todo
    function deleteToDo(e) {
        setToDoList(toDoList.filter(toDo => toDo.id !== e.target.id));
    }

    // complete Todo
    function handleComplete() {
        setComplete(!complete);
    }

    function completeToDo(e) {
        let todo = toDoList.find((toDo) => toDo.id === e.target.id);
        todo.complete = complete;
        handleComplete();
    }

    //edit to do 
    function editToDo(e) {
        let editToDo = e.target.parentElement.firstChild;
        setInputValue(editToDo.value);
        setToDoList(toDoList.filter(toDo => toDo.id !== e.target.id));
    }


    return <div className="to-do-input">
        <input type="text" placeholder='Enter your new task' onClick={(e) => e.target.placeholder = ""} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={addToDo}>Add</button>
        <ToDoList todolist={toDoList} deleteToDo={deleteToDo} completeToDo={completeToDo} editToDo={editToDo} />
    </div>
}

export default ToDoInput;