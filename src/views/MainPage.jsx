import { Container } from '@mui/system'
import { Button as TextButton, Grid } from '@mui/material'

import React, { useState } from 'react'
import TaskOne from '../Tasks/TaskOne';
import TaskTwo from '../Tasks/TaskTwo';
import TaskThree from '../Tasks/TaskThree';



const MainPage = () => {

  const [toggleButton, setToggleButton] = useState(0);

  const toggleButtons = [
    "Task 1 ",
    "Task 2 ",
    "Task 3 "
  ]

  const toggleData = [
    {
      content: <TaskOne/>
    },
    {
      content: <TaskTwo/>
    },
    {
      content: <TaskThree/>
    }

  ]


  return (
    <Container>
      <Grid container spacing={3} direction="row">
        <Grid  item xs= {12} style= {{height: '10%'}}>
          <Grid container direction= 'row'>
            {toggleButtons.map((b, ind) => {
              return (
                <TextButton
                key={`btn${ind}`}
                style= {{
                  backgroundColor: ind === toggleButton ? "white" : undefined,
                  color: ind === toggleButton ? undefined : "green"
                }}
                onClick={() => setToggleButton(ind)}>
                  {b}
                </TextButton>
              )
            })
            }
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {toggleData[toggleButton].content}
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainPage