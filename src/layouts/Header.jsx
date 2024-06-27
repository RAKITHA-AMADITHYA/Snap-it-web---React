import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, Button, Drawer, Grid, IconButton, Link, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure this import is correct
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
      handleCompanyclose();
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
    <Box
      sx={{
        backgroundColor: '#ffffff',
        // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {!isLgScreen ? (
        <>
<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }} onClick={() => handleNavigate('/')}>            <img src={Logo}  width={'70px'} alt="" />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{
            sx: { width: "60%", maxWidth: "800px", overflowX: "hidden" }, // Adjust the width as needed
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <img src={Logo} width={'80px'} alt="" />
            </Box>
            <List sx={{ mt: 2 }}>

              {menuItems.map((item) => (
                <ListItem button key={item.text} component={Link} to={item.path} onClick={(e) => { e.preventDefault(); handleNavigate(item.path); handleDrawerClose() }}> {/* Corrected usage of Link */}
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}

            </List>


            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button variant='outlined' fullWidth onClick={() => { handleLoginClick(); handleDrawerClose(); }}>Login</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button variant='contained' fullWidth onClick={() => { handleNavigate('/signup'); handleDrawerClose(); }}>Sign up</Button>
            </Box>
          </Drawer>
        </>
      ) : (
        // Your existing large screen layout here
        <Box
          sx={{
            backgroundColor: '#ffffff',
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid container p={1} onMouseLeave={handleClose}>
            {/* Logo */}
            <Grid item xs={11} md={1} display={'flex'} justifyContent={'center'} alignItems={'end'} sx={{ cursor:"pointer", display: 'flex', justifyContent: 'space-between', p: 1 }}
  onClick={() => handleNavigate('/')} >

              <img src={Logo} width={'65%'} alt="Logo" />
            </Grid>

            <Grid item xs={1} sm={1} md={1} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent={'center'} alignItems={'center'}>
              <Badge color="primary">
                <MenuIcon color="action" onClick={handleClick} />
              </Badge>
            </Grid>

            {/* Nav Links */}
            <Grid item md={8} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} alignItems={'end'} p={2}>
              <Grid container spacing={4} display={'flex'} justifyContent={'center'} alignItems={'end'} textAlign={'center'}>

                {/*Home  */}
                <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/')}>
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
                <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/customer')}>
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
                <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/brands')}>
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
                <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/merchants')}>
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
                <Grid item mt={1} onMouseEnter={handleNavHover} onClick={() => handleNavigate('/about-us')}>
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




            <Grid item md={1} display={{ xs: 'none', md: 'flex' }} justifyContent={'center'} alignItems={'center'}>
              <div style={{ position: 'relative' }}>
                <img
                  src={qrBtn}
                  width="140px"
                  alt=""
                  onMouseEnter={() => setDrawerOpen(true)}
                  onMouseLeave={handleDrawerClose}
                />

                <Box sx={{
                  position: 'absolute',
                  zIndex:1,
                  bottom: 'auto',
                  left: '150%',
                  transform: 'translateX(-50%)',
                  width: '350px',
                  height: 'auto',
                  backgroundColor: '#FFFF',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  display: drawerOpen ? 'block' : 'none',
                  mt: 3,
                  borderBottomLeftRadius: '10px'
                }}>
                  <Grid container>
                    <Grid item xs={5} display={'flex'} p={1} justifyContent={'center'}>
                      <img src={qrcode} width={'90%'} alt="" />
                    </Grid>
                    <Grid item xs={7} p={1}>
                      <Typography variant='subtitle1' fontWeight={600}>Download Snap it Now</Typography>
                      <Typography variant='p' >Scan the QR to download</Typography>

                    
                      {/* <Button
                        variant="contained"
                        // onClick={handleClick}
                        fullWidth
                        sx={{
                          mt: 2,
                          backgroundImage: `url(${playstore})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '40%', // Set the height as per your image dimensions
                          padding: 0, // Remove any default padding
                          borderRadius: '8px', // Optional: adjust border radius
                          '&:hover': {
                            backgroundImage: `url(${playstore})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        }}
                      ></Button> */}
                      <Box mt={1}>
                        <img src={playstore}width={'70%'} alt="" />
                      </Box>
                      <Box mt={1}>
                        <img src={appstore} width={'70%'} alt="" />
                      </Box>
{/* <Button
                        variant="contained"
                        // onClick={handleClick}
                        fullWidth
                        sx={{
                          mt: 2,
                          backgroundImage: `url(${appstore})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '40%', // Set the height as per your image dimensions
                          padding: 0, // Remove any default padding
                          borderRadius: '8px', // Optional: adjust border radius
                          '&:hover': {
                            backgroundImage: `url(${appstore})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        }}
                      ></Button> */}

                    </Grid>
                  </Grid>

                </Box>


              </div>
            </Grid>

            <Grid item md={1} display={{ xs: 'none', md: 'flex', }} sx={{ p: 1 }} justifyContent={'center'} alignItems={'center'}>
              <Button variant='outlined' fullWidth sx={{ height: '35px' }} onClick={handleLoginClick}>Log In</Button>

            </Grid>
            <Grid item md={1} display={{ xs: 'none', md: 'flex', }} sx={{ p: 1 }} justifyContent={'center'} alignItems={'center'}>
              <Button variant='contained' sx={{ height: '35px' }} fullWidth onClick={() => handleNavigate('/signup')}>Sign Up</Button>

            </Grid>

          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Header;
