import MenuIcon from '@mui/icons-material/Menu';
import {
  Badge,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import qrBtn from '../assets/img/qrBtn.png';
import qrcode from '../assets/img/qr.png';
import playstore from '../assets/img/playstore.png';
import appstore from '../assets/img/appstore.png';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [company, setCompany] = useState("");

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
      handleClose();
    }
  };

  const handleLoginClick = () => {
    window.location.href = 'https://brand.snapitonline.com/';
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'How It Works', path: '/signup' },
    { text: 'Customer', path: '/customer' },
    { text: 'Brands', path: '/brands' },
    { text: 'Merchants', path: '/merchants' },
    { text: 'About us', path: '/about-us' },
    { text: 'Contact us', path: '/contact-us' },
  ];

  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      {!isLgScreen ? (
        <>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}
            onClick={() => handleNavigate('/')}
          >
            <img src={Logo} width={'70px'} alt="" />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: { width: '60%', maxWidth: '800px', overflowX: 'hidden' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'start', mt: 2 }}>
              <img src={Logo} width={'200px'} alt="" />
            </Box>
            <List sx={{ mt: 2 }}>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.path);
                    handleDrawerClose();
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      fontWeight: 800,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: '-4px', // Increase this value to add more gap
                        width: location.pathname === item.path ? '100%' : '0',
                        height: '3px', // Thickness of the underline
                        backgroundColor: theme.palette.primary.main, // Color from the theme
                        transition: 'width 0.3s',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button variant="outlined" fullWidth onClick={() => { handleLoginClick(); handleDrawerClose(); }}>
                Login
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button variant="contained" fullWidth onClick={() => { handleNavigate('/signup'); handleDrawerClose(); }}>
                Sign up
              </Button>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ backgroundColor: '#ffffff' }}>
          <Grid container p={1} onMouseLeave={handleClose}>
            {/* Logo */}
            <Grid
              item
              xs={11}
              md={1}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'end'}
              sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', p: 1 }}
              onClick={() => handleNavigate('/')}
            >
              <img src={Logo} width={'78rem'} alt="Logo" />
            </Grid>

            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Badge color="primary">
                <MenuIcon color="action" onClick={handleClick} />
              </Badge>
            </Grid>

            {/* Nav Links */}
            <Grid
              item
              md={8}
              display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
              justifyContent={'start'}
              alignItems={'center'}
              p={2}
            >
              <Grid
                container
                spacing={4}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'end'}
                textAlign={'center'}
              >
                {menuItems.map((item) => (
                  <Grid
                    item
                    key={item.text}
                    mt={1}
                    onMouseEnter={handleNavHover}
                    onClick={() => handleNavigate(item.path)}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          bottom: '-4px', // Increase this value to add more gap
                          width: location.pathname === item.path ? '100%' : '0',
                          height: '3px', // Thickness of the underline
                          backgroundColor: theme.palette.primary.main, // Color from the theme
                          transition: 'width 0.3s',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid
              item
              md={1}
              display={{ xs: 'none', md: 'flex' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={qrBtn}
                  width="150rem"
                  alt=""
                  onMouseEnter={() => setDrawerOpen(true)}
                  onMouseLeave={handleDrawerClose}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    zIndex: 1,
                    bottom: 'auto',
                    left: '150%',
                    transform: 'translateX(-50%)',
                    width: '350px',
                    height: 'auto',
                    backgroundColor: '#FFFF',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    display: drawerOpen ? 'block' : 'none',
                    mt: 3,
                    borderBottomLeftRadius: '10px',
                  }}
                >
                  <Grid container>
                    <Grid item xs={5} display={'flex'} p={1} justifyContent={'center'}>
                      <img src={qrcode} width={'90%'} alt="" />
                    </Grid>
                    <Grid item xs={7} p={1}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Download Snap it Now
                      </Typography>
                      <Typography variant="p">Scan the QR to download</Typography>
                      <Box mt={1}>
                        <img src={playstore} width={'70%'} alt="" />
                      </Box>
                      <Box mt={1}>
                        <img src={appstore} width={'70%'} alt="" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>

            <Grid item md={2} display={'flex'} justifyContent={'center'} alignItems={'center'} p={1}>
              <Button variant="outlined" sx={{ mr: 2, textTransform: 'none' }} onClick={() => handleLoginClick()}>
                Login
              </Button>
              <Button variant="contained" onClick={() => handleNavigate('/signup')}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Header;
