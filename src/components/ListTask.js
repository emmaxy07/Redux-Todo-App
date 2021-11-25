import React from 'react';
import Task from './Task'
import { useSelector } from 'react-redux';

const ListTask = () => {
  const tasks = useSelector((state)=>{
    return state.tasks
  })

  return(
    <ul>
      {
        tasks.map((task) => (
          <Task id={task.id} title={task.name} completed={task.status} />
        ))
      }
    </ul>
  )
}

export default ListTask