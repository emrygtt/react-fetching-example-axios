
import React from 'react'
import ListView from '../../components/ListView';
import Spinner from '../../components/Spinner';
import { useAppContext } from '../../context/AppContext/AppContext'

const TaskOne = () => {

  const { 
    taskTwoData,
  } = useAppContext(); 

  return (
    <div style={{position: "relative"}}>
      {taskTwoData ? 
      (
        <ListView data={taskTwoData} />
      ) 
      :
      (
        <div style={{position: 'absolute', left: '50%', top: '50%'}}>
          <Spinner/>
        </div>
      )

      }

    </div>
  )
}

export default TaskOne