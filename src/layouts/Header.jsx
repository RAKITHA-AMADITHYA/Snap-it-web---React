import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [company, setCompany] = useState(null);
  const navigate=useNavigate();


  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCompany(null);
  };

  const handleCompanyClick = (event) => {
    setCompany(event.currentTarget);
  };

  const handleCompanyclose = () => {
    setCompany(null);
  };

  const handleLoginClick = () => {
    window.location.href = 'https://brand.snapitonline.com/';
  };

  const handleNavHover = () => {
    if (company) {
      handleCompanyclose();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container p={1} onMouseLeave={handleClose}>
        {/* Logo */}
        <Grid item xs={11} md={2} display={'flex'} justifyContent={'center'} alignItems={'end'} >
          <img src={Logo} width={'30%'} alt="Logo" />
        </Grid>

        <Grid item xs={1} sm={1} md={1} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent={'center'} alignItems={'center'}>
          <Badge color="primary">
            <MenuIcon color="action" onClick={handleClick} />
          </Badge>
        </Grid>

        {/* Nav Links */}
        <Grid item md={8} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} p={2}>
          <Grid container spacing={4} display={'flex'} justifyContent={'center'} alignItems={'end'} textAlign={'center'}>

            {/*Home  */}
            <Grid item mt={1} onMouseEnter={handleNavHover}  onClick={() => handleNavigate('/')}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  }
                }}
              >
                Home
              </Typography>
            </Grid>

            {/*How it Works  */}
            <Grid item mt={1} onMouseEnter={handleNavHover}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                How It Works
              </Typography>
            </Grid>

            {/*Customer*/}
            <Grid item mt={1} onMouseEnter={handleNavHover}  onClick={() => handleNavigate('/customer')}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                Customer
              </Typography>
            </Grid>

            {/*Brands*/}
            <Grid item mt={1} onMouseEnter={handleNavHover}  onClick={() => handleNavigate('/brands')}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                Brands
              </Typography>
            </Grid>


            {/*Merchants*/}
            <Grid item mt={1} onMouseEnter={handleNavHover}  onClick={() => handleNavigate('/merchants')}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                Merchants
              </Typography>
            </Grid>

            {/*About us*/}
            <Grid item mt={1} onMouseEnter={handleNavHover}  onClick={() => handleNavigate('/about-us')}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                About us
              </Typography>
            </Grid>
            {/*Contact us*/}
            <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/contact-us')}>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                // color={'#78909c'}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f2b51c',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                Contact us
              </Typography>
            </Grid>






          </Grid>
        </Grid>

        <Grid item md={2} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} gap={1} justifyContent={'center'} alignItems={'end'} p={2}>
          <Button variant='outlined' onClick={handleLoginClick}>Log In</Button>
          <Button variant='contained' onClick={() => handleNavigate('/signup')}>Sign Up</Button>

        </Grid>

      </Grid>
    </Box>
  );
}

export default Header;
