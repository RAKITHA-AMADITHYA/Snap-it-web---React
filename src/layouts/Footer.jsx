import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Divider, Grid, Typography } from '@mui/material';
import appstore from '../assets/img/appstore.png';
import logo from '../assets/img/footer3.png';
import playstore from '../assets/img/playstore.png';
import copyrights from '../assets/img/copyrights.png';
import footer1 from '../assets/img/footer1.png';




const Footer = () => {
  return (
    <>

      {/* Below md screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, bgcolor: '#2f2f2f', p: 2, color: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} width={'80px'} alt="" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='body2' mt={3} fontWeight={600} textAlign={'justify'}>
            Snap it effortlessly brings your favorite brands to your fingertips
            ,rewarding your loyalty. The platform also assists merchants in gaining a
            deeper understanding of their customers and incentivizing loyalty. </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'center'} gap={2} mt={2}>
          <img src={playstore} width={'40%'} height={'50%'} alt="" />
          <img src={appstore} width={'40%'} height={'50%'} alt="" />
        </Box>

        <Grid item xs={3} color={'#fff'} mt={5} >
          {/* Phone */}
          <div style={{ display: 'flex', gap: '25px', color: '#fff', marginTop: '10px', justifyContent: 'center', alignItems: 'end' }}>
            <LocalPhoneIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' } }} />
            <Typography variant='h6' textAlign={'center'}>
              (+94) 77 7331496<br />


            </Typography>
          </div>

          {/* Mail */}
          <div style={{ display: 'flex', gap: '45px', color: '#fff', marginTop: '10px', justifyContent: 'center', alignItems: 'end' }}>
            <MailIcon  sx={{ 
        fontSize: { lg: '30px' }, 
        color: '#FFF',
       
      }}  />
            <Typography variant='h6' textAlign={'justify'}>info@snapit.lk</Typography>
          </div>
          {/* Location */}
          <div style={{ display: 'flex', gap: '20px', color: '#fff', marginTop: '10px', justifyContent: 'center', alignItems: 'start' }}>
            <LocationOnIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' } }} />
            <Typography variant='p ' textAlign={'end'}>
              Snapit PVT Ltd.<br/>
              No.12  Ridgeway Place, <br />
              Colombo 04,<br />
              Sri Lanka.


            </Typography>
          </div>
        </Grid>

        <Divider sx={{ backgroundColor: '#2e2930', mt: 5 }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5px' }}>
          <img src={copyrights} width={'150px'} alt="" />
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
            <Grid item xs={3} color={'#fff'} >
              <img src={logo} width={'20%'} alt="" />
              <Typography variant='subtitle2' mt={3} fontWeight={600} textAlign={'justify'}>
                Snap it effortlessly brings your favorite brands to your fingertips,rewarding your loyalty. The platform also assists merchants in gaining a deeper understanding of their customers and incentivizing loyalty.          </Typography>

              <Box display={'flex'} gap={2} mt={2}>
                <img src={playstore} width={'60%'} height={'50%'} alt="" />
                <img src={appstore} width={'60%'} height={'50%'} alt="" />
              </Box>
            </Grid>


            <Grid item xs={3} color={'#fff'} mt={8}>



              {/* Phone */}
              <div style={{ display: 'flex',  color: '#fff', marginTop: '10px', justifyContent: 'end', alignItems: 'end',  flexDirection:'column' }}>
                {/* <LocalPhoneIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' }, ml: '-100px' }} /> */}
                <Typography variant='h5' fontWeight={800} textAlign={'end'}>Contact</Typography>
                <Typography variant='h6' textAlign={'end'}>
                  (+94) 77 7331496<br />


                </Typography>
              </div>

              {/* Mail */}
              <div style={{ display: 'flex', color: '#fff', marginTop: '10px', justifyContent: 'end', alignItems: 'end',  flexDirection:'column' }}>
                {/* <MailIcon sx={{ fontSize: { lg: '30px' }, color: '#FFF' ,ml:-20}} /> */}
                <Typography variant='h5' fontWeight={800} textAlign={'end'}>Email</Typography>

                <Typography variant='h6' textAlign={'end'}>info@snapit.lk</Typography>
              </div>
              {/* Location */}
              <div style={{ display: 'flex',  color: '#fff', marginTop: '10px', justifyContent: 'end', alignItems: 'end',  flexDirection:'column' }}>
                {/* <LocationOnIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' } }} /> */}
                <Typography variant='h5' fontWeight={800} textAlign={'end'}>Address</Typography>

                <Typography variant='p ' textAlign={'end'}>
                  Snapit PVT Ltd.<br/>
                  No.12  Ridgeway Place, <br />
                  Colombo 04,<br />
                  Sri Lanka.


                </Typography>
              </div>
            </Grid>


          </Grid>
          <Divider sx={{ backgroundColor: '#2e2930' }} />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5px' }}>
            <img src={copyrights} width={'200px'} alt="" />
          </Box>
        </section></Box>
    </>
  )
}

export default Footer
