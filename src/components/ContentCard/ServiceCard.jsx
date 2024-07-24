import { Box, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ title, product, packet, price, point }) => {
  return (
    <Box
      sx={{
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
        margin: "18px",
        borderRadius: 2,
        minHeight: "350px",
        maxHeight: "350px",

        background: "#f2f2f2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "280px",
        }}
      >
        <img
          src={
            "https://api.snapitonline.com/Documents/SnapIt/Products/Campaign/" +
            product
          }
          alt="product1"
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography fontWeight={700} variant="p">
          {title}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight={800} variant="P">
            LKR {price}/=
          </Typography>

          <Typography fontWeight={800} color={"#f2b51c"} variant="P">
            {point} Points
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;
