import React from 'react'
import './App'
const Header = () => {
  return (
    <div>
        <div className="container">
            <div className='todobox'>
             <h1 className='heading'>To-do App</h1>
            </div>

        <div className="sidebar-container">
          <aside className="text-sidebar">
              <h1 className='build-text'>BUILD</h1>
              <h3 className='todoapp-text'>To-do app</h3>
              <p className='reactjs-text'><span className='with'>With</span>React JS</p>
          
              <ul className="short-text">
                <li className='crud'>Reactjs CRUD Operations</li>
                <h2 className='localstore'>Local Storage</h2>
                <h3 className='animations'>Animation</h3>
              </ul>
          </aside>
        </div>
    </div>  
  </div>
  )
}

export default Header