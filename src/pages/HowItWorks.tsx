import { Box, Typography } from "@mui/material";
import React from "react";
import Mobile from "../assets/img/dev.png";

const HowItWorks = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection:'column',gap:2}}
    >
      <Typography variant="h5">This page will available Soon</Typography>
      <img src={Mobile} width={'400px'} alt="" />
    </Box>
  );
};

export default HowItWorks;
