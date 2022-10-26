import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import Container from '@mui/material/Container';

const Item= styled("div")(({theme})=>({
    color:"#fff",
    fontWeight: 'bold',
    flex:1,
   
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
           <Container sx={{
            display:'flex',
            justifyContent:'space-between',
            alighnItems:'center',
            flexDirection:{xl:"row",lg:"row",md:"row",sm:"",xs:"column"}
           }}>
          <Item className='text-flow' style={{maxWidth:'90vw',display:'flex',alignItems:'center'}}>{newsdata?.data[0]?.en?.details}</Item>
         {
            isFetching && <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}><CircularProgress /></Box>
            
          }
            { error !== " " &&  <h2>{error}</h2>
          }
         <Button style={{maxWidth:'100%'}} variant="contained" sx={{
            paddingInline:"2rem",
            backgroundColor:"#fff",
            color:"#b11705",
            fontWeight:"bold",
             maxWidth:"150px",
             display:'flex',
             alignSelf:'center',
           
            "&:hover":{
                backgroundColor:"#fff",
            }
         }}>Buy | View</Button>
        </Container>
       
    </Box>
  )
}

export default News