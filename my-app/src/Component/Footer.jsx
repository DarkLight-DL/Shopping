import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: 'rgb(72, 118, 172)',
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position:'relative',
        }}
      >
        <Typography textAlign="center" color="white" width="70%">
          Copyright © 2025 All rights reserved | This template is made with ❤️ by Asik
        </Typography>

        <Button
          variant="contained"
          onClick={scrollToTop}
          sx={{
            color: 'white',
            p:0,
            position:'absolute',
            top:'30px',
            right:'20px',
            height:'35px',
            minWidth:'35px',
            borderRadius:'50px',
            backgroundColor: 'rgb(41, 185, 204)',
            boxShadow:'5px 5px 10px black',
            '&:hover': {
              backgroundColor: 'rgb(31, 45, 61)',
            },
          }}
        >
          <KeyboardArrowUpIcon sx={{fontSize:'30px'}} />
        </Button>
      </Box>
    </>
  )
}

export default Footer
