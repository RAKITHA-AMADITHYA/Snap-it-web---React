import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, Button, Drawer, Grid, IconButton, Link, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure this import is correct
import Logo from '../assets/img/logo.png';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);


  const handleNavigate = (path) => {
    navigate(path);
  };

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCompany(null);
  };

    const handleNavHover = () => {
    if (company) {
      handleCompanyclose();
    }
  };
  const handleLoginClick = () => {
    window.location.href = 'https://brand.snapitonline.com/';
  };

  const menuItems = [
    { text: 'HOME', path: '/' },
    { text: 'How It Works', path: '/signup' },
    { text: 'Customer', path: '/customer' },
    { text: 'Brands', path: '/brands' },
    { text: 'Merchants', path: '/merchants' },
    { text: 'About us', path: '/about-us' },
    { text: 'Contact us', path: '/contact-us' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {!isLgScreen? (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
            <img src={Logo} width={'70px'} alt="" />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{
    sx: { width: "60%", maxWidth: "800px", overflowX: "hidden" }, // Adjust the width as needed
  }}>
            <Box sx={{display:'flex',justifyContent:'center',mt:2}}>
            <img src={Logo}  width={'80px'} alt="" />
            </Box>
            <List sx={{mt:2}}>

            {menuItems.map((item) => (
                <ListItem button key={item.text} component={Link} to={item.path} onClick={(e) => {e.preventDefault(); handleNavigate(item.path);handleDrawerClose()}}> {/* Corrected usage of Link */}
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            
            </List>
            <Box sx={{display:'flex',justifyContent:'center',p:1}}>
              <Button variant='outlined' fullWidth>Login</Button>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',p:1}}>
              <Button variant='contained' fullWidth>Sign up</Button>
            </Box>
          </Drawer>
        </>
      ) : (
        // Your existing large screen layout here
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
            <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/signup')}>
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
      )}
    </Box>
  );
}

export default Header;
