import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../JS/tasksSlice";

const Task = ({ id, title }) => {
  const dispatch = useDispatch()

  const removeTask=()=>{
    dispatch(deleteTask({
      id: id
    })
  )
}

return (
  <div>
    <li>
      <div>
        {title}
      </div>
      <div>
        <button onClick={()=>{removeTask()}}>Delete</button>
      </div>
    </li>
  </div>
)
}

export default Task