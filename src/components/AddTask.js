import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/tasksSlice';

const AddTask = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    if(value.trim().length === 0){
      alert('Enter a task!')
      setValue('')
      return;
    }
    dispatch(addTask({
      task: value
    }))   
  
  setValue('')
}

return(
  <div>
    <input 
    type='text' 
    placeholder='Add Task' 
    value={value} 
    onChange={(event)=>setValue(event.target.value)} />

    <button onClick={onSubmit}>Save</button>
  </div>
)
}


export default AddTask