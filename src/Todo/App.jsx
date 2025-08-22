import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import List from './List'
import './App.css'

const App = () => {
   const [todos,setTodos]=useState([]);
   const[editTodo,setEditTodo]=useState(null);
  console.log(editTodo);
   return (
    <div>
        <Header/>
        <Input setTodos={setTodos} todos={todos} editTodo={editTodo}/>
        <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        
        
    </div>
  )
}

export default App