import { Breadcrumbs, Container, Link } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Navbar = () => {
  return (
    <Container fixed>
      <Box  sx={{
        height: 300,
        backgroundColor: 'blue',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }} />
    </Container>
  )
}

export default Navbar