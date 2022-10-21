import React from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import image from '../Resources/Mask.png';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const Item= styled("div")(({theme})=>({
    color:"#b11705",
    fontWeight: 'bold',    
}));
const Header = () => {
  return (
    <Box sx={{
        width:1,
        height:{xl:"120vh",lg:"110vh",md:"100vh",sm:"90vh",xs:"85vh"},
        backgroundImage:`url(${image})`,
        objectFit:"contain",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}>
        <Navbar/>
     <Box sx={{
        paddingLeft:"6%",
        paddingTop:"10%",
        
     }}> 
     <Item sx={{
       fontSize:{xl:"2rem",lg:"1.9rem",md:"1.5rem",sm:"1rem",xs:"1rem"},
       paddingTop:{
        xl:"3rem",lg:"0rem",md:"5rem",sm:"5rem",xs:"8rem"
       }
     }
       
     }>
        NEW GENERATION FAN TOKENS
        <br />
        AND CRYPTOCURRENCY
        <br />
        EXCHANGE
        <br />
        
     </Item>
       <Stack direction="row" spacing={2}>
       <Box variant="contained" sx={{
        // backgroundColor:"#b11705",
         position:"relative"
       }}> <span style={{
        position:"absolute",
        backgroundColor:"#b11705",
        height:"5px",
        top:"30%",
        width:"1rem"
       }}></span></Box>
       <Typography >Trade Crypto and Fiat Currencies.</Typography>
        
       </Stack>
     </Box>
    </Box>
  )
}

export default Header