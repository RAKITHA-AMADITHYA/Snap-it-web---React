import { Box, Card, Typography } from '@mui/material';
import React from 'react';

function ServiceCardTwo({img,title,description,marginTop,widthImg,imgMt,fontsize}) {
    return (
        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" ,bgcolor:'#F2B51C',minHeight:'380px'}}>
                <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:imgMt }}>
                    <img src={img} width={widthImg}  />
                </Box>
                <Box  sx={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center',p:5,mt:marginTop}} >
                    <Typography variant='h4' gutterBottom fontWeight={600}>
                        {title}
                    </Typography>
                    <Typography variant='p' textAlign={'justify'} fontSize={fontsize}>
                        {description}
                    </Typography>
                </Box>
        </Card>
    );
}

export default ServiceCardTwo;
