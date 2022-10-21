import React from 'react'
import{ useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapsible from 'react-collapsible';  
import CircularProgress from "@mui/material/CircularProgress";
const Celebs = () => {
    const[celebsdata,setcelebsdata]=useState();
    const [isActive, setIsActive] = useState(false);
    const [isFetching, setIsFetching] = useState(true); 
    const[error,seterror]=useState("");

    const handelclick =()=>{
      setIsActive(!isActive)
      console.log('click');
    }
    const getApiData= async ()=>{
        try{
            const res = await axios.post("https://rest.exchange.staging.v2f.exchange/api/user/topCelebrities") 
            setcelebsdata(res.data.data)
            setIsFetching(false)
        }catch(error){
            console.log(error.message);
            seterror(error.message);
            setIsFetching(false)
        }
    }
    useEffect(()=>{
        getApiData();
    },[]);
    console.log(celebsdata);
  return (
    
    <Box sx={{
        backgroundColor:"#f8dcf1",
        paddingInline:"5%",
        paddingBlock:"3%",
       position:"relative",
    }
      
    }>
      
        <Stack sx={{
          display:"flex",
          flexDirection: 'row',
          flexWrap:"wrap",
          gap:'15px',
          alignItems:"center"
          
        }} spacing={2}>
        <Stack >
        <Typography variant='h1' sx={{
            fontSize:"40px",
            fontWeight:"bold",
            paddingLeft:"50%",
            paddingTop:"3px"
         }} >TOP </Typography>
         <Typography variant='h1'sx={{
             fontSize:"40px",
             fontWeight:"bold",
             position:"relative",
            "&:before":{
                content: '""',
                display: 'block',
                width: '100px',
                height: '5px',
                background: '#b11705',
                left: '4%',
                bottom: '-5px',
                position: 'absolute'
            }
         }}>
          CELEBS
         </Typography>
        </Stack>
        { error !== " " &&  <h2>{error}</h2>}
        {
            isFetching && <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}><CircularProgress /></Box>
          }
        {
         celebsdata?.map((data,index)=>(
            <Card key={data.id} sx={{  width: 300,
            position:"relative" }}>
                <Avatar   sx={{ bgcolor: red[500] ,
                width: 70, height: 70,
                position:"absolute",
              
                zIndex:"1000",
                 left:"2%",
                 top:'40%'
                }} aria-label="recipe">
                  <img style={{
                    height:"80px",
                    width:"80px"
                  }} src={data?.profilePhoto} alt="" />
                </Avatar>
            <CardHeader
              title={data?.userName}
              sx={{
                backgroundColor:"#b11705",
                color:"#fff"
              }}
            />
          
            <CardContent>
              <Stack direction="column">
               <Stack p sx={{paddingTop:"24%", paddingLeft:"30%"}} direction="row" spacing={2}>
                <Typography  variant='p'>{data?.coinName} Value</Typography>
                <Typography variant='p'>{data?.coinV2FValue}</Typography>
               </Stack>
              </Stack>
            </CardContent>
            <CardActions disableSpacing>
             
              <Collapsible trigger={ <ExpandMoreIcon onClick={()=>handelclick} sx={{
                cursor:'pointer'
              }}/>}  triggerWhenOpen={<ExpandMoreIcon style={{rotate:"180deg",cursor:"pointer"}}/>}>
                  <Box>
                <Stack spacing={12} direction='row' > <Typography variant='p'>coin</Typography>
                  <Typography variant='p'>{data.buyStatus.coin}</Typography>
                </Stack>
                <Stack spacing={12} direction='row'> <Typography variant='p'>price</Typography>
                  <Typography variant='p'>${data.coinValue}</Typography>
                </Stack>     
              </Box>
           </Collapsible>
            </CardActions>       
          </Card>
         ))
        }
        </Stack>
    </Box>
  )
}

export default Celebs