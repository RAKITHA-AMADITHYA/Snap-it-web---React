import { Box, Typography } from "@mui/material";
import React from "react";
import Video from '../assets/img/Snpit ora.mp4'

const HowItWorks = () => {
  return (

    <Box
      sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}
        
      >
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: 2, p: { xs: 2, lg: 20 }, mt: { xs: 2, lg: -15 }}}
    >
      <video style={{width: '100%', height: 'auto'}} controls>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box></Box>
  );
};

export default HowItWorks;