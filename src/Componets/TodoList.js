import React from 'react'
import Todo from './Todo';
import { useState } from 'react';
import Todoform from './Todoform';

export default function Todolist() {
  
//   state array which hold all todo 


const [todos, setTodos]= useState([]);

// adding todos 
const addTask =task=>{
    if(!task.text){

    }

    const newTodos = [task ,...todos]
    setTodos (newTodos)
   
}

    
 const removeTask = id=>{
    let updatedTask =[...todos].filter(task=>task.id!==id)
    setTodos (updatedTask)
 }


const completeTask = id =>{
    let updatedTask = todos.map(todo =>{
        if(todo.id ===id){
            todo.iscomplete =true;
        }
        return todo;
    })
    setTodos(updatedTask)
}

    return <div>
        <Todoform addTask={addTask}></Todoform>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>
}
