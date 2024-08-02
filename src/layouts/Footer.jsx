import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { default as appstore, default as Appstore } from '../assets/img/appstore.png';
import FbImage from '../assets/img/fb.png';
import logo from '../assets/img/snapitlogo white.png';
import InstaImage from '../assets/img/insta1.png';
import { default as playstore, default as PlayStore } from '../assets/img/playstore.png';
import TikTokImage from '../assets/img/tiktok.png';





const Footer = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleClick = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.snapitonline.snap_it';
  };

  return (
    <>
            <Box
                sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}

            >

      {/* Below md screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, bgcolor: '#2f2f2f', p: 2, color: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} width={'80px'} alt="" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='body2' mt={3} fontWeight={300} textAlign={'justify'}>
            Snap it effortlessly brings your favorite brands to your fingertips
            ,rewarding your loyalty. The platform also assists merchants in gaining a
            deeper understanding of their customers and incentivizing loyalty. </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'center'} gap={2} mt={2}>
                {/* <FbImage/> */}
                <img src={FbImage} width={'8%'} height={'50%'} alt="" />
                <img src={TikTokImage} width={'9%'} height={'50%'} alt="" />
                <img src={InstaImage} width={'9%'} height={'50%'} alt="" />

              </Box>

              <Grid item xs={4} color={'#fff'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} textAlign={'start'} mt={5}>
              <Typography variant='subtitle1' fontWeight={700}>USEFUL LINKS</Typography>
              <Typography variant='p'sx={{cursor:'pointer'}}  mt={1} onClick={() => handleNavigate('/')}>HOME</Typography>
              <Typography variant='p'  sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/signup')} >HOW IT WORKS</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}   onClick={() => handleNavigate('/customer')}>CUSTOMER</Typography>
              <Typography variant='p'  sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/brands')}>BRANDS</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/merchants')} >MERCHANTS</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/about-us')} >ABOUT US</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}   onClick={() => handleNavigate('/contact-us')}>CONTACT US</Typography>







            </Grid>
      
        <Grid item xs={3} color={'#fff'} mt={5} >
          {/* Phone */}
          <div style={{ display: 'flex', gap: '25px', color: '#fff', marginTop: '10px', justifyContent: 'center', alignItems: 'end' }}>
            <LocalPhoneIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' } }} />
            <Typography variant='h6' textAlign={'center'}>
              (+94) 777491496<br />


            </Typography>
          </div>

          {/* Mail */}
          <div style={{ display: 'flex', gap: '45px', color: '#fff', marginTop: '10px', justifyContent: 'center', alignItems: 'end' }}>
            <MailIcon sx={{
              fontSize: { lg: '30px' },
              color: '#FFF',

            }} />
            <Typography variant='h6' textAlign={'justify'}>info@snapit.lk</Typography>
          </div>
          {/* Location */}
          <div style={{ display: 'flex', gap: '20px', color: '#fff', marginTop: '10px', justifyContent: 'center', alignItems: 'start' }}>
            <LocationOnIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' } }} />
            <Typography variant='p ' textAlign={'end'}>
              Snapit PVT Ltd.<br />
              No.12  Ridgeway Place, <br />
              Colombo 04,<br />
              Sri Lanka.


            </Typography>
          </div>
        </Grid>


        <Box display={'flex'} justifyContent={'center'} gap={2} mt={2}>
          <img src={playstore} width={'40%'} height={'50%'} alt="" />
          <img src={appstore} width={'40%'} height={'50%'} alt="" />
        </Box>
        <Divider sx={{ backgroundColor: '#2e2930', mt: 5 }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5px' }}>
          {/* <img src={copyrights} width={'150px'} alt="" /> */}
          <Typography variant='p'>Copyright © 2024 design by mobios</Typography>
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'block' } }}>

        <section style={{
          background: '#2f2f2f',
          backgroundSize: 'fit',
          backgroundRepeat: 'no-repeat',
          // backgroundImage: `url(${footer1})`,
        }}>

          <Grid container p={5} justifyContent={'space-between'}>
            <Grid item xs={4} color={'#fff'} >
              <img src={logo} width={'60px'} alt="" />
              <Typography variant='subtitle2' mt={3} fontWeight={400} textAlign={'justify'}>
                Snap it effortlessly brings your favorite brands to your fingertips,rewarding your loyalty. The platform also assists merchants in gaining a deeper understanding of their customers and incentivizing loyalty.          </Typography>

              <Box display={'flex'} gap={2} mt={2}>
                {/* <FbImage/> */}
                <img src={FbImage} width={'6%'} height={'50%'} alt="" />
                <img src={TikTokImage} width={'7%'} height={'50%'} alt="" />
                <img src={InstaImage} width={'7%'} height={'50%'} alt="" />

              </Box>
            </Grid>
            <Grid item xs={4} color={'#fff'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} textAlign={'start'}>
              <Typography variant='subtitle1' fontWeight={700}>USEFUL LINKS</Typography>
              <Typography variant='p'sx={{cursor:'pointer'}}  mt={1} onClick={() => handleNavigate('/')}>HOME</Typography>
              <Typography variant='p'  sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/signup')} >HOW IT WORKS</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}   onClick={() => handleNavigate('/customer')}>CUSTOMER</Typography>
              <Typography variant='p'  sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/brands')}>BRANDS</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/merchants')} >MERCHANTS</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}  onClick={() => handleNavigate('/about-us')} >ABOUT US</Typography>
              <Typography variant='p' sx={{cursor:'pointer'}}   onClick={() => handleNavigate('/contact-us')}>CONTACT US</Typography>







            </Grid>

            <Grid item xs={3} color={'#fff'} mt={4}>

              <Box display={'flex'} justifyContent={'end'}>
                <Typography variant='h6' fontWeight={800}>CONTACTS</Typography>
              </Box>

              {/* Phone */}
              <Grid container spacing={2} direction="column" mt={1}>

                {/* Location */}
                <Grid item container alignItems="center" justifyContent="end" textAlign={'end'}>
                  <LocationOnIcon sx={{ fontSize: { lg: '22px' }, color: '#FFF', mr: 1, mt: -2 }} />
                  <div style={{ color: '#fff' }}>
                    {/* <Typography variant='h5' fontWeight={800} textAlign='end'>Address</Typography> */}
                    <Typography variant='P' textAlign='end'>
                      Snapit PVT Ltd.<br />
                      No.12 Ridgeway Place,<br />
                      Colombo 04,<br />
                      Sri Lanka.
                    </Typography>
                  </div>
                </Grid>
                {/* Contact */}
                <Grid item container alignItems="center" justifyContent="end">
                  <LocalPhoneIcon sx={{ fontSize: { lg: '22px' }, color: '#FFF', mr: 1 }} />
                  <div style={{ color: '#fff' }}>
                    {/* <Typography variant='h5' fontWeight={800} textAlign='end'>Contact</Typography> */}
                    <Typography variant='P' textAlign='end'>
                      (+94) 77 7331496<br />
                    </Typography>
                  </div>
                </Grid>

                {/* Mail */}
                <Grid item container alignItems="center" justifyContent="end">
                  <MailIcon sx={{ fontSize: { lg: '22px' }, color: '#FFF', mr: 2.6 }} />
                  <div style={{ color: '#fff' }}>
                    {/* <Typography variant='h5' fontWeight={800} textAlign='end'>Email</Typography> */}
                    <Typography variant='P' textAlign='end'>info@snapit.lk</Typography>
                  </div>
                </Grid>


              </Grid>
              <Box sx={{ display: 'flex', gap: '2px', mt: 5 }}>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  sx={{
                    backgroundImage: `url(${PlayStore})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '15vw',
                    height: '6vh',
                    padding: 0,
                    borderRadius: '5px',
                    '&:hover': {
                      backgroundImage: `url(${PlayStore})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  }}
                >
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    backgroundImage: `url(${Appstore})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '15vw',
                    height: '6vh',
                    padding: 0,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundImage: `url(${Appstore})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  }}
                >
                </Button>
              </Box>

            </Grid>


          </Grid>
          <Divider sx={{ backgroundColor: '#2e2930' }} />

          <Box sx={{ display: 'flex', justifyContent: 'start', mt: '5px' }}>
            <Typography variant='p'>Copyright © 2024 design by mobios</Typography>

          </Box>
        </section></Box></Box>
    </>
  )
}

export default Footer
