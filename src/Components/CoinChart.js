import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from "@mui/material/CircularProgress";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    fontWeight:"bold",
    fontSize:"1rem"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const CoinChart = () => {
    const[coindata,setcoindata]=useState();
    const[error,seterror]=useState("");
    const [isFetching, setIsFetching] = useState(true); 
    const getApiData= async ()=>{
        try{
            const res = await axios.get("https://rest.exchange.staging.v2f.exchange/api/public/getCoinList") 
            setcoindata(res.data.data);
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
 
  return (
    <Stack spacing={5} direction={{xl:"row",lg:"row",md:"row",sm:"column",xs:"column"}}  sx={{
        paddingInline:"5%",
        paddingTop:"3%",
         alignItems:"center",
         justifyContent:'center',
       }}>
        <Box className='border'   sx={{
            overflowX:'visible',
            marginTop:"10px",
            
        }}>
                    {
                         <TableContainer style={{border:"2px solid rgba(177, 23, 5, 0.25)"}} sx={{maxWidth:"90vw",marginBottom:"70px",
                         position:"relative",                     
                             borderTop: 0,
                         }} component={Paper} >
                           {
            isFetching && <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}><CircularProgress /></Box>
          }              
                         <Table className='stb' sx={{ minWidth: 400 ,
                        //  borderTop:'2px solid linear-gradient(126deg, #b11705 8%, #632969 82%)',
                        "&:before":{
                          content: '""',
                          display: 'block',
                          width: '100%',
                          height: '3px',
                          
                          background: 'linear-gradient(126deg, #b11705 8%, #632969 82%)',
                          top: '0px',
                          position: 'absolute'}, }} aria-label="customized table">
                           <TableHead>
                             <TableRow>  
                               <StyledTableCell >Name</StyledTableCell>
                               <StyledTableCell align="right">Symbol</StyledTableCell>
                               <StyledTableCell align="right">Price</StyledTableCell>
                               <StyledTableCell align="right">Stage Name</StyledTableCell>
                               <StyledTableCell align="right">Start Date</StyledTableCell>
                               <StyledTableCell align='right'>End Date</StyledTableCell>
                               <StyledTableCell align='right'>Remaining Supply</StyledTableCell>
                               <StyledTableCell align='right'>Total Supply</StyledTableCell>
                             </TableRow>
                           </TableHead>
                           <TableBody>
                           { error !== " " &&  <h2>{error}</h2>} 
                             {coindata?.map((row) => (
                               <StyledTableRow key={row.name}>
                                 <StyledTableCell sx={{
                                  backgroundColor:"#f8dcf1ab"
                                 }} component="th" scope="row">
                                    <Box sx={{
                                        display:"flex",
                                        alighnItems:"center",  
                                        gap:"3%"
                                    }}><Box sx={{ display:"flex",
                                    justifySelf:"flex-start"
                                    }}><img style={{width:"40px", height:"40px",borderRadius:"50%"}} src={row.imageURL} alt="" /></Box>
                                    <Box sx={{
                                        display:"flex",
                                        alighnItems:"center",
                                        // textAlign:"center",
                                        marginTop:"6%"
                                    }}> {row.name}</Box>
                                      </Box>
                                    
                                 </StyledTableCell>
                                 
                             
                                 <StyledTableCell  align="right">{row.symbol}</StyledTableCell>
                                 <StyledTableCell align="right">{row.price}</StyledTableCell>
                                 <StyledTableCell align="right">{row.stageName}</StyledTableCell>
                                 <StyledTableCell align="right">{row.startDate.slice(0,10)}</StyledTableCell>
                                 <StyledTableCell sx={{ backgroundColor:"#f8dcf1ab"}} align="right">{row.FinalDate.slice(0,10)}</StyledTableCell>
                                 <StyledTableCell align="right">{row.remainingSupply}</StyledTableCell>
                                 <StyledTableCell align="right">{row.totalSupply}</StyledTableCell>
                                
                               </StyledTableRow>
                             ))}
                           </TableBody>
                         </Table>
                       </TableContainer>
                    }
                     
        </Box>
        <Box order={{xl:1,lg:1,md:1,sm:-1,xs:-1}} sx={{
            
             "&::before": {
                content:'" "',
       display: "block",
       height: "6px",
      width: "100px",
       position: "absolute",
        bottom: "0",
   
          left: "0",
        background: "linear-gradient(126deg, #b11705 8%, #632969 82%)",
       
            }
        }} style={{
            position:"relative",
           }}>
            <Typography variant='h1' sx={{
                fontSize:'50px',
                fontWeight:"800"
            }} >COIN <br /> CHART</Typography>
           
        </Box>
    </Stack>
  )
}

export default CoinChart