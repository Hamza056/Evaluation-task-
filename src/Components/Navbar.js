import React from 'react'
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import img from '../Resources/v2flogo.png';
import { styled } from '@mui/system';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';
const Item= styled("div")(({theme})=>({
    cursor:"pointer",
    alignItems:"center"
    
}));

const Navbar = () => {
  return (
    <Box direction="row" sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems: 'center',
        paddingInline:{xl:"6%",lg:"5",md:"3%",sm:"2%",xs:"1%"},
        paddingTop:'3px'
    }}>
        {/* <Typography sx={{
            width:"100%"
        }}><img style={{
            height:"100%",
            width:"30%"
        }} src={img} alt="" /></Typography>  */}
        <img style={{maxWidth:"150px", height:"auto"}} src={img} alt="" />
        <Stack style={{
            display:"flex",
            alignItems:"center"
        }} direction="row" spacing={{xl:5,lg:4,md:3,sm:2,xs:1}}>
            
        <Item sx={{
            color:"#b11705",
            fontWeight: 'bold',
            display:{xl:"inline-block",lg:"inline-block",md:"inline-block",sm:"none",xs:"none"}
        }} >Home</Item>
    <Item sx={{
         display:{xl:"inline-block",lg:"inline-block",md:"inline-block",sm:"none",xs:"none"}
    }}>Announcments</Item>
    <Item sx={{
         display:{xl:"inline-block",lg:"inline-block",md:"inline-block",sm:"none",xs:"none"}
    }}>VIP fan token</Item>
    <Item sx={{
         display:{xl:"inline-block",lg:"inline-block",md:"inline-block",sm:"none",xs:"none"}
    }}>Help</Item>
   
    <SearchOutlinedIcon sx={{
        cursor:"pointer",
        color:"#b11705",
        
            display:{xl:"inline-block",lg:"inline-block",md:"inline-block",sm:"inline-block",xs:"none"}
       
    }}/>
    <Item sx={{
        color:"#b11705",
        fontWeight:"bold"
        
    }}>Sign in</Item>
    <Item><Button sx={{
         paddingBlock:{xl:"12px",lg:"12px",md:"5px",sm:"5px",xs:"10px"},
         paddingInline:{xl:"12px",lg:"12px",md:"8px",sm:"7px",xs:"7px"},
        background: "linear-gradient(115deg, #662a74 6%, #802255 95%)",
        color:"#fff",
       fontSize:{md:"17px",sm:"9px",xs:"10px"}
    }}>Get Started</Button></Item>
        </Stack>
   
  </Box>
  )
}

export default Navbar