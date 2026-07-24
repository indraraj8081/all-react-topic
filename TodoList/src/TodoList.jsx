import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function TodoList() {
let [todos , setTodos] = useState([{task:'sample task' , id:uuidv4(), isDone: false}]);
let [newTodo , setnewTodo] = useState('');

   let addNewTask = ()=>{
    setTodos((prevTodos)=>{
      [...prevTodos, {task:newTodo, id:uuidv4(),isDone:false }];
    });

    setnewTodo("");
   };


   let updateTodoValue =(event)=>{
    setnewTodo(event.target.value);
   };
   let deleteTodo =(id) =>{
    setTodos((prevTodos) => todos.filter((prevTodos)=>prevTodos.id != id));
   };

   let upperCaseAll = () =>{
    setTodos(todos.map((todo) =>{
      return {
        ...todo , task:todo.task.toUpperCase(),
      };
    }));
   };


  return (
    <div>
        <input placeholder='add a task' value={newTodo} onChange={updateTodoValue}></input>
        <br></br>
        <button onClick={addNewTask}>Add task</button>

        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo)=> (
            <li key={todo.id}>
            <span>{todo.task}</span>  
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=> deleteTodo(todo.id)}>delete</button>
            </li>
          ))}  
        </ul>
        <button onClick={upperCaseAll}>upperCaseAll</button>
    </div>
  )
}

export default TodoList