import React from 'react'
import { CircularProgress } from '@mui/material';

const Spinner = ({size, value, color}) => {
  return (
    <CircularProgress size={size} value={value} color={color} />
  )
}

export default Spinner