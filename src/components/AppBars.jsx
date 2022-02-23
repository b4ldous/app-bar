import { Container, Typography } from '@mui/material'
import React from 'react'
import AppBarColor from './AppBarColor'

const AppBars = () => {
  return (
    <> 
    <Container fixed>
        <Typography variant='h1' textAlign='center'>App Bars</Typography>

        <br></br>
        <AppBarColor/>

    </Container>
    
    </>
  )
}

export default AppBars