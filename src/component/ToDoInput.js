import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList';

function ToDoInput() {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState(() => {
        const savedToDoList = JSON.parse(localStorage.getItem('todolist'));
        return savedToDoList || [];
    });
    let complete = false;


    //local storage handle
    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDoList));
    }, [toDoList])

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
        // setLocalStorage();
    }

    //delete Todo
    function deleteToDo(e) {
        setToDoList(toDoList.filter(toDo => toDo.id !== e.target.id));
        // setLocalStorage();
    }

    // complete Todo

    function completeToDo(e) {
        let todo = toDoList.find((toDo) => toDo.id === e.target.id);
        todo.complete = !todo.complete;
        setToDoList([...toDoList]);
        // setLocalStorage();
    }

    //edit to do 
    function editToDo(e) {
        let editToDo = e.target.parentElement.firstChild;
        setInputValue(editToDo.value);
        setToDoList(toDoList.filter(toDo => toDo.id !== e.target.id));
        // setLocalStorage();
    }


    return <div className="to-do-input">
        <input type="text" placeholder='Enter your new task' onClick={(e) => e.target.placeholder = ""} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={addToDo}>Add</button>
        <ToDoList todolist={toDoList} deleteToDo={deleteToDo} completeToDo={completeToDo} editToDo={editToDo} />
    </div>
}

export default ToDoInput;