import { Box, Typography } from '@mui/material';
import React from 'react';

const ServiceCard = ({title,product,packet,price,point}) => {
    return (
     
        <Box   sx={{
            boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)', 
            margin: '5px', 
            borderRadius:2,
            minHeight:'380px'
          }}>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center',height:'280px'}}>
            <img src={product}alt="product1" /></Box>
          <Box sx={{p:1,}}>
            <Typography fontWeight={700} variant='subtitle1'>{title}</Typography>
                        <Typography fontWeight={600} variant='subtitle1'> {packet}</Typography>

            <Box sx={{display:'flex', justifyContent:'space-between'}} >
           
                       <Typography fontWeight={800}  variant='subtitle1'>MPR {price}.00/=</Typography>

            <Typography fontWeight={800} color={'#f2b51c'} variant='subtitle1'>{point} Points</Typography>

            
            </Box>

          </Box>
        </Box>
    );
};

export default ServiceCard;
