import React, { useEffect, useState } from 'react'

const Input = ({setTodos,todos,editTodo}) => {
const [todo,setTodo]=useState("");
useEffect(()=>{
  console.log(editTodo)
if(editTodo){
  setTodo(editTodo.text)
}
},[editTodo])

  return (
    <div className='input-container'>
        <input type="text" value={todo} placeholder='Write your task' onChange={(e)=>{
            setTodo(e.target.value)
        }}/> 
       <button className='add-btn' onClick={()=>{
        if(editTodo){ 
          setTodos(
            todos.map((ele)=>{
            return editTodo.key==ele.key?{...ele,text:todo}:ele;
            })
          )
          }else{
            setTodos([...todos,{key:Date.now(),text:todo}])
          }
       }}>Add</button>
       <button className='reset-btn'onClick={()=>{
        setTodo('');
       }}>Reset</button>
       
    </div>
  )
}

export default Input