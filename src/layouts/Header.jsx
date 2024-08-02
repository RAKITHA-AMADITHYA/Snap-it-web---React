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
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/img/final_logo.png';
import qrBtn from '../assets/img/qrBtn.png';
import qrcode from '../assets/img/qr-code.png';
import playstore from '../assets/img/playstore.png';
import appstore from '../assets/img/appstore.png';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [companyAnchorEl, setCompanyAnchorEl] = useState(null);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCompanyClick = (event) => {
    setCompanyAnchorEl(event.currentTarget);
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
    setCompanyAnchorEl(null);
  };

  const handleLoginClick = () => {
    window.location.href = 'https://brand.snapitonline.com/';
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'How It Works', path: '/how-it-works' },
    { text: 'Customer', path: '/customer' },
    { text: 'Brands', path: '/brands' },
    { text: 'Merchants', path: '/merchants' },



    // {
    //   text: 'Snapit For',
    //   subItems: [
    //     { text: 'Customer', path: '/customer' },
    //     { text: 'Brands', path: '/brands' },
    //     { text: 'Merchants', path: '/merchants' },
    //   ],
    // },
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
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <img src={Logo} width={'100px'} alt="" />
            </Box>
            <List sx={{ mt: 2 }}>
              {menuItems.map((item) =>
                item.subItems ? (
                  <ListItem
                    button
                    key={item.text}
                    onMouseEnter={handleCompanyClick}
                    onMouseLeave={handleClose}
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
                          bottom: '-4px',
                          width: '0',
                          height: '3px',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 0.3s',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    />
                    <Menu
                      anchorEl={companyAnchorEl}
                      open={Boolean(companyAnchorEl)}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: 48 * 4.5,
                          width: '20ch',
                        },
                      }}
                    >
                      {item.subItems.map((subItem) => (
                        <MenuItem
                          key={subItem.text}
                          onClick={() => {
                            handleNavigate(subItem.path);
                            handleClose();
                          }}
                        >
                          {subItem.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </ListItem>
                ) : (
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
                          bottom: '-4px',
                          width: location.pathname === item.path ? '100%' : '0',
                          height: '3px',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 0.3s',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    />
                  </ListItem>
                )
              )}
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
          <Grid container p={1}>
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
                {menuItems.map((item) =>
                  item.subItems ? (
                    <Grid
                      item
                      key={item.text}
                      mt={1}
                      onMouseEnter={handleCompanyClick}
                      onMouseLeave={handleClose}
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
                            bottom: '-4px',
                            width: location.pathname === item.path ? '100%' : '0',
                            height: '3px',
                            backgroundColor: theme.palette.primary.main,
                            transition: 'width 0.3s',
                          },
                          '&:hover::after': {
                            width: '100%',
                          },
                        }}
                      >
                        {item.text}
                      </Typography>
                      <Menu
                        anchorEl={companyAnchorEl}
                        open={Boolean(companyAnchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: 48 * 4.5,
                            width: '20ch',
                          },
                        }}
                      >
                        {item.subItems.map((subItem) => (
                          <MenuItem
                            key={subItem.text}
                            onClick={() => {
                              handleNavigate(subItem.path);
                              handleClose();
                            }}
                          >
                            {subItem.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Grid>
                  ) : (
                    <Grid item key={item.text} mt={1}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        onClick={() => handleNavigate(item.path)}
                        sx={{
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: '-4px',
                            width: location.pathname === item.path ? '100%' : '0',
                            height: '3px',
                            backgroundColor: theme.palette.primary.main,
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
                  )
                )}
              </Grid>
            </Grid>

            <Grid item xs={1} md={3} display={'flex'} justifyContent={'end'} alignItems={'center'}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  '&:hover .dropdown-content': {
                    display: 'block',
                  },
                }}
              >
                <img src={qrBtn} width={'100px'} alt="QR Code Button" />
                <Box
                  className="dropdown-content"
                  sx={{
                    display: 'none',
                    position: 'absolute',
                    right: 0,
                    zIndex: 1,
                    
                    width: '300px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{display:'flex',justifyContent:'center'}}>
                  <img src={qrcode} width={'150px'} height={'150px'} alt="QR Code" /></Box>
                  <Box display={'flex'} justifyContent={'space-around'} mt={1}>
                    <a href="https://play.google.com/store/apps/details?id=com.snapitonline.snap_it" target="_blank" rel="noopener noreferrer">
                      <img src={playstore} width={'100%'} alt="Play Store" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                      <img src={appstore} width={'100%'} alt="App Store" />
                    </a>
                  </Box>
                </Box>

              </Box>
              {/* <Button
                onClick={() => handleLoginClick()}
                sx={{
                  ml: 2,
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                }}
              >
                Login
              </Button> */}
<Button
                                onClick={() => handleLoginClick()}

                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                Log in
              </Button>

              <Button
                onClick={() => handleNavigate('/signup')}
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Header;
