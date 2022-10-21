import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
const Item= styled("div")(({theme})=>({
    color:"#fff",
    fontWeight: 'bold',
    flex:1    
}));
const News = () => {
    const[newsdata,setnewsdata]=useState();
    const[error,seterror]=useState("");
    const [isFetching, setIsFetching] = useState(true); 
    const getApiData= async ()=>{
        try{
            const res = await axios.get("https://rest.exchange.staging.v2f.exchange/api/public/getNews?type=COIN") 
            setnewsdata(res.data);
            setIsFetching(false);
        }catch(error){
            console.log(error);
            seterror(error.message);
            setIsFetching(false);
        }
    }
    useEffect(()=>{
        getApiData();
    },[]);
  
  return (
    <Box sx={{
        paddingBlock:"1rem",
        backgroundColor:"#b5142a"
    }}>
        <Stack direction={{xl:'row',lg:'row',md:'column',sm:'column',xs:'column'}} sx={{
              display:"flex",
              justifyContent:"space-between",
              paddingInline:"10%",
              
        }}>
          
           { error !== " " &&  <h2>{error}</h2>
          }
         
         <Item>{newsdata?.data[0]?.en?.title}</Item> 
         {
            isFetching && <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}><CircularProgress /></Box>
          }
         <Item>{newsdata?.data[0]?.en?.details}</Item>
         <Button variant="contained" sx={{
            paddingInline:"2rem",
            backgroundColor:"#fff",
            color:"#b11705",
            fontWeight:"bold",
             maxWidth:"150px",
            "&:hover":{
                backgroundColor:"#fff",
            }
         }}>Buy | View</Button>
        </Stack>
    </Box>
  )
}

export default News