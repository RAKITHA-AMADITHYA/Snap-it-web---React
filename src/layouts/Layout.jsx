
import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./Header";
import Footer from "./Footer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {Box} from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => handleClick()}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Layout = () => {
  const handleBestWeb=()=>{
    window.location.href = "https://www.vote.bestweb.lk/site/rukmadura_lk/";
  }
  return (
    <div style={{ backgroundColor: "#ffff" }}>
      <MainHeader />
      <Box minHeight={"60svh"}>
        <Outlet />
      </Box>
      <Footer />
      <ScrollTop>
        <Fab size="medium"  aria-label="scroll back to top"  >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Layout;

