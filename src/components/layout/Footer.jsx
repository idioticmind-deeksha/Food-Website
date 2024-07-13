import React from 'react';
import { Box,Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign: 'center', bgcolor:"#1A1A19" , color: "white", p:3}}>
        <Box sx={{my: 3, "& svg":{fontSize: "1rem", cursor: "pointeer", mr: 2,}, "& svg:hover": {
            color: "goldenrod",
            transform: "translateY(-2px)",
            transition: 'all ease-in 400ms',
        }, }}>
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
        </Box>
        <Typography variant='p' sx={{"@media(max-width:600px)":{ fontSize: "0.9rem",},}}>
             All Rights Reserved &copy; food-website
        </Typography>
        
      </Box>
    </>
  )
}

export default Footer
