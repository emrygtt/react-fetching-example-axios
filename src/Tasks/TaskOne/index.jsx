import React from 'react'
import ListView from '../../components/ListView';
import { useAppContext } from '../../context/AppContext/AppContext'

const TaskOne = () => {

  const { 
    taskOneData,

  } = useAppContext(); 


  return (
    <div>
      <ListView data={taskOneData} />
    </div>
  )
}

export default TaskOne