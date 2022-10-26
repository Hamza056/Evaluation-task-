import React from 'react'
import{ useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import CircularProgress from "@mui/material/CircularProgress";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import numsvg from '../Resources/num.svg'
const Celebs = () => {
    const[celebsdata,setcelebsdata]=useState();
    const [isActive, setIsActive] = useState(null);
    const [isFetching, setIsFetching] = useState(true); 
    const[error,seterror]=useState("");
   const handelclick=(index)=>{
    if(isActive===index){
      return setIsActive(null)
    }
    setIsActive(index)
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
        backgroundColor:"#f8dcf1ab",
        paddingInline:"10rem",
        paddingBlock:"8%",
       position:"relative",
      
    }
      
    }>
        <Stack sx={{
          display:"flex",
          flexDirection: 'row',
          flexWrap:{xl:"nowrap",lg:'nowrap',md:'wrap',sm:'wrap',xs:'wrap'},
        
          alignItems:"center",
          gap:'8px',
          justifyContent:'center'
          
        }} spacing={2}>
        <Stack sx={{marginRight:"18px",zIndex:"1000"}}>
        <Typography  variant='h1' sx={{
            fontSize:"40px",
            fontWeight:"800",
            paddingLeft:"50%",
            paddingBlock:"3px"
         }} >TOP </Typography>
         <Typography variant='h1'sx={{
             fontSize:"43px",
           
             position:"relative",
             fontWeight:"800",
             marginRight:"18px",zIndex:"1000",
            "&:before":{
                content: '""',
                display: 'block',
                width: '100px',
                height: '5px',
                background: '#b11705',
                left: '38%',
                bottom: '-10px',
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
         celebsdata?.slice(0, 3)?.map((data,index)=>(
         <Box   sx={{     
          height: '55px',
          minHeight: '55px',
          "&:before":{
            content: '""',
            display: 'block',
            width: '93%',
            height: '55px',
            background: '#b11705',
            borderTopLeftRadius:'12px',
            borderTopRightRadius:'12px',
            left: '10px',
            Top: '0',
            position: 'absolute',
        }
      
         }} style={{position:"relative",marginBottom:"8rem",marginInline:"15px"}}>
           <Avatar style={{position:"absolute", left:'-44px',bottom:"-175%",backgroundImage:"linear-gradient(126deg, #b11705 8%, #632969 82%)"}}   aria-label="recipe" 
           sx={{height:"130px",width:"130px",
           }}>
            <img style={{height:"120px",width:"120px",borderRadius:"50%"}} src={data.profilePhoto} alt="" />
          </Avatar>
         <br />
           <p></p>
          <Card sx={{ width: 270,marginInline:"10px", overflow:'visible' }}>
            <Box sx={{zIndex:"100000",overflowY:'visible',top:'-20px',position:"relative",display:"flex",justifyContent:"flex-end",right:'10px',alignItems:"center",gap:"14px"}} >
            <Typography sx={{color:"#fff"}}  variant='p'>{data.userName}</Typography>
            <Avatar sx={{height:'25px',width:"25px",backgroundImage:`url(${numsvg})`,padding:"2px",
            fontSize:"small",fontWeight:'bolder',color:'#b2500d'}}>{index+1}
            {index===0?'st':''}{index===1?'nd':''}{index===2?'rd':''}</Avatar>
            </Box>
        
      <CardActions disableSpacing style={{postion:"relative",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
      <Stack  sx={{
        color:'#5d2c72',
        fontWeight:'600',
        
          position:"relative",
         
         "&:before":{
             content: '""',
             display: 'block',
             width: '107%',
             height: '48px',
            //  background: 'rgba(62, 165, 16, 0.40)',
            //  backgroundImage: 'linear-gradient(to right,  rgba(62, 165, 16, 0.57)),rgba(62, 165, 16, 0) ',
             backgroundImage: 'linear-gradient(to right, rgba(62, 165, 16, 0) , rgba(62, 165, 16, 0.57))',
             left: '-5px',
             overflow:'hidden',
             bottom: '-6px',
             position: 'absolute',
             borderBottomLeftRadius:'4%',
             borderTopLeftRadius:'-50%'
           
         }
       
      }} direction='row' spacing={5}>
      <Typography  variant='p'>{data.coinName} Value</Typography>
      <Typography variant='p' sx={{
        display:'flex',
        alighnItems:'center',
        gap:'7px'
      }}>
        <Typography variant='img' sx={{
          height:'25px',
          weidth:'25px',
          borderRadius:'50%',
          backgroundColor:'#3ea510'
        }}>
        <MovingRoundedIcon sx={{
          rotate:'320deg',
          color:'#fff',
          height:'17px',
          weidth:'17px',
         
       
         
        }}/>
        </Typography>
        {data.coinV2FValue}</Typography>
      </Stack>
     
     
      {isActive=== index ? (
      <Box 
      style={{display:"flex",justifyContent:"right",
      alignItems:"flex-end",right:"0",flexDirection:"column"}}>

       <Stack style={{postion:"relative", marginTop:'10px',}} direction='row' spacing={11.5}>
      <Typography sx={{
        color:'#5d2c72',
        fontWeight:'600'
      }} variant='p'> Coin</Typography>
      <Stack sx={{
        display:"flex",
        alighnItems:'center',

      }}>
       
      <Typography  sx={{
        color:'#5d2c72',
        fontWeight:'600',
        display:'flex',
        alighnItems:'center',
        gap:'7px'
      }} variant='p'>
         <img style={{height:"18px",  width: '18px',borderRadius:'50%'}} src={data.profilePhoto} alt="" srcset="" />{data.coinName}</Typography>
      </Stack>
      
      </Stack>
    
      <Stack  sx={{
        color:'#5d2c72',
        fontWeight:'600'
      }} style={{postion:"relative"}} direction='row' spacing={11.2}>
      <Typography variant='p'> price</Typography>
      <Typography variant='p' sx={{display:'flex',alighnItems:'center',gap:'7px'}}>
         <Typography variant='img' sx={{height:'20px',maxwidth:'20px',backgroundColor:' hsl(46, 100%, 40%)',borderRadius:'50%'}}><AttachMoneyRoundedIcon sx={{height:'20px',width:'20px',display:'flex',alighnItems:'center',justifyContent:'center',color:'#fff'}}/></Typography>
        {data.coinValue}</Typography>
      </Stack>
      <br />
      
       <button style={{
        alighnItems:'center',
        justifyContent:'center',backgroundColor:'#fff',borderRadius:'50%',border:'none',height:'20px',width:'20px',
        display:isActive=== index?"block":'none',rotate:"180deg",cursor:"pointer",position:"absolute",right:'0',bottom:"-135px",color:'#b11705'}} onClick={()=>handelclick(index)} > 
      <ExpandMoreIcon 
      style={{
       position:'absolute',
       top:'-1px',
       right:'-2px'
      }}
       /></button>
      </Box>
      
      ):''}  
      <button style={{
        alighnItems:'center',
        justifyContent:'center',backgroundColor:'#fff',borderRadius:'50%',border:'none',height:'20px',width:'20px',display:isActive=== index?"none":'block',position:'absolute',bottom:"-60px",right:'4px',cursor:"pointer",color:'#b11705'}} onClick={()=>handelclick(index)} > 
      <ExpandMoreIcon 
      style={{
       
       position:'absolute',
       top:'-1px',
       right:'-2px'
      }}
       /></button>
      
       </CardActions>
       </Card>
       </Box>
                 ))
         }
        </Stack>
       
    </Box>
  )
}

export default Celebs