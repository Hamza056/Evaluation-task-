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
    //   backgroundColor: theme.palette.common.black,
    //   color: theme.palette.common.white,
    fontWeight:"bold",
    fontSize:"1rem"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
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
    <Stack spacing={2} direction={{xl:"row",lg:"row",md:"row",sm:"column",xs:"column"}}  sx={{
        paddingInline:"5%",
        paddingTop:"3%",
         alignItems:"center",
       }}>
        <Box style={{
             overflowX: 'auto',
            }}  sx={{
            borderTop:1
        }}>
            
            { error !== " " &&  <h2>{error}</h2>}          
                    {
                         <TableContainer sx={{maxWidth:"80vw"}} component={Paper}>
                         <Table sx={{ minWidth: 200 }} aria-label="customized table">
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
                             {coindata?.map((row) => (
                               <StyledTableRow key={row.name}>
                                 <StyledTableCell component="th" scope="row">
                                  <img style={{width:"30px"}} src={row.imageURL} alt="" /> {row.name}
                                 </StyledTableCell>
                                 <StyledTableCell align="right">{row.symbol}</StyledTableCell>
                                 <StyledTableCell align="right">{row.price}</StyledTableCell>
                                 <StyledTableCell align="right">{row.stageName}</StyledTableCell>
                                 <StyledTableCell align="right">{row.startDate.slice(0,10)}</StyledTableCell>
                                 <StyledTableCell align="right">{row.FinalDate.slice(0,10)}</StyledTableCell>
                                 <StyledTableCell align="right">{row.remainingSupply}</StyledTableCell>
                                 <StyledTableCell align="right">{row.totalSupply}</StyledTableCell>
                                
                               </StyledTableRow>
                             ))}
                           </TableBody>
                         </Table>
                       </TableContainer>
                    }
                      {
            isFetching && <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}><CircularProgress /></Box>
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
                fontSize:'45px',
                fontWeight:"bold"
            }} >COIN <br /> CHART</Typography>
            <span style={{
            
            }}></span>
        </Box>
    </Stack>
  )
}

export default CoinChart