import React from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import image from '../Resources/HeaderBg.png';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Img from '../Resources/HeaderImage.png'
const Item= styled("div")(({theme})=>({
    color:"#b11705",
    fontWeight: 'bold',    
}));
const Header = () => {
  return (
    <Box sx={{
        width:1,
        // height:{xl:"120vh",lg:"110vh",md:"100vh",sm:"90vh",xs:"85vh"},
        backgroundImage:`url(${image})`,
        objectFit:"contain",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}>
        <Navbar/>
     <Box  sx={{
        paddingInline:"6%",
        display:"flex",
        flexDirection:{xl:"row",lg:"row",md:"row",sm:"column",xs:"column"},
        paddingTop:{xl:"0",lg:"0",md:"0",sm:"30px",xs:"30px"},
        alignItems:"center",
       justifyContent:"space-between"
     }}> 
     <Box sx={{marginBottom:{xl:"8rem",lg:"8rem",md:"8rem",sm:"0",xs:"0"}}}>
     <Item sx={{
       fontSize:{xl:"55px",lg:"40px",md:"40px",sm:"30px",xs:"20px"},
       fontWeight:"700",
     
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
       <Typography sx={{
        color:'#672a72',
        fontWeight:'700',
        fontSize:{xl:"22px",lg:"22px",md:"20px",sm:"18px",xs:"17px"}
       }}>Trade Crypto and Fiat Currencies.</Typography>
        
       </Stack>
     </Box>
     
        <img style={{maxWidth:"50%",height:"auto"}} src={Img} alt="" />
      
   
     </Box>
    </Box>
  )
}

export default Header