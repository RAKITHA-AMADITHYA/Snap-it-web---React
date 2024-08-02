import { Box, Card, Typography } from '@mui/material';
import React from 'react';

function ServiceCardThree({ img, title, description, marginTop, widthImg, imgMt, fontsize ,fontsizeTitle }) {
  return (
    <Card
      sx={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        bgcolor: '#f2f1ef',
        minHeight: '420px',
        maxHeight: '420px',

        transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          bgcolor: '#f2b51c',
          color: '#ffff',
        },
        '&:hover .MuiTypography-root': {
          color: '#ffff',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: imgMt }}>
        <img src={img} width={widthImg} alt="" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', p: 3, mt: marginTop }}>
        <Typography variant="body1" gutterBottom fontWeight={600} fontSize={fontsizeTitle}>
          {title}
        </Typography>
        <Typography variant="body1" textAlign="justify" fontSize={fontsize}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
}

export default ServiceCardThree;
