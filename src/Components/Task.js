import React from 'react'
import './Task.css'
const Task=({title,description,deleteTask,index})=>{

 return (
    <div className='task'>
       <div >
       <span className='task-title'>{title}</span>
        <p className='task-desc'>{description}</p>
       </div>
        <button onClick={()=>deleteTask(index)} className='delete-button'>Remove</button>
    </div>
  )
}
export default Task;
