import React from 'react'
const List = ({todos,setTodos,setEditTodo}) => {
    
    console.log(todos);


    return (
    <div>
        <ul className='list-container'>
            {
            todos.map((ele)=>{
                console.log(ele)
                 return<li className='list' key={ele.key}>{ele.text}
                 
                 <button className='list-edit' onClick={()=>{
                    setEditTodo(ele)
                 }}>Edit</button>

                 <button className='list-del' onClick={()=>{
                    let filterData=todos.filter((item)=>{
                        return item.key!=ele.key
                    })
                    setTodos(filterData)
                 }}>Del</button></li>
                })
            }
        </ul>   
    </div>
  )
}

export default List