import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Grid, Typography } from '@mui/material';
import appstore from '../assets/img/appstore.png';
import logo from '../assets/img/footer3.png';
import playstore from '../assets/img/playstore.png';




const Footer = () => {
  return (
    <section style={{
      background: '#2f2f2f',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

      <Grid container p={5} justifyContent={'space-between'}>
        <Grid item xs={3} color={'#fff'} >
          <img src={logo} width={'20%'} alt="" />
          <Typography variant='subtitle2' mt={3} fontWeight={600} textAlign={'justify'}>
            Snap it effortlessly brings your favorite brands to your fingertips,rewarding your loyalty. The platform also assists merchants in gaining a deeper understanding of their customers and incentivizing loyalty.          </Typography>

          <Box display={'flex'} gap={2} mt={2}>
            <img src={playstore}  width={'60%'} height={'50%'} alt="" />
            <img src={appstore}  width={'60%'} height={'50%'} alt="" />
          </Box>
        </Grid>


        <Grid item xs={3} color={'#fff'} mt={8}>



          {/* Phone */}
          <div style={{ display: 'flex', gap: '25px', color: '#fff', marginTop: '10px', justifyContent: 'end', alignItems: 'end', marginLeft: '-60px' }}>
            <LocalPhoneIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' }, ml: '-100px' }} />
            <Typography variant='h6' textAlign={'end'}>
              (+94) 115 968 000<br />


            </Typography>
          </div>

          {/* Mail */}
          <div style={{ display: 'flex', gap: '35px', color: '#fff', marginTop: '10px', justifyContent: 'end', alignItems: 'end' }}>
            <MailIcon sx={{ fontSize: { lg: '30px' }, color: '#FFF' }} />
            <Typography variant='h6' textAlign={'end'}>info@mobios.lk</Typography>
          </div>
          {/* Location */}
          <div style={{ display: 'flex', gap: '20px', color: '#fff', marginTop: '10px', justifyContent: 'end', alignItems: 'start' }}>
            <LocationOnIcon sx={{ fontSize: { lg: '30px', color: '#FFFF' } }} />
            <Typography variant='p ' textAlign={'end'}>
              No.12  Ridgeway Place, <br />
              Colombo 04,<br />
              Sri Lanka.


            </Typography>
          </div>
        </Grid>

        {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
            <Typography variant='p' color={'white'} fontWeight={400}>Contact</Typography>
            <Typography variant='p' color={'white'} fontWeight={600}>(+94) 70 000 0000</Typography>


            <Typography variant='subtitle1' color={'white'} fontWeight={400} >Email</Typography>
            <Typography variant='subtitle1' color={'white'} fontWeight={600}>support@studiomojo.lk</Typography>
          </Grid>

        </Grid>
        <Divider sx={{ my: 2 }} />
        <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} spacing={2} p={1}>
          <Typography variant='p' color={'white'} fontWeight={400}>© 2023 StudioMojo</Typography>

        </Grid>

        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant='p' color={'white'} fontWeight={500}>Terms & Conditions</Typography>
          <Box mx={2} />
          <Typography variant='p' color={'white'} fontWeight={500}>Privacy Policy</Typography>
        </Grid>

        <Grid container justify="space-between" alignItems="end" justifyContent={'end'} spacing={5}>
          <Grid item>
            <FacebookIcon style={{ color: 'white' }} />
          </Grid>
          <Grid item>
            <YouTubeIcon style={{ color: 'white' }} />
          </Grid>
          <Grid item>
            <InstagramIcon style={{ color: 'white' }} />
          </Grid>
        </Grid> */}

      </Grid>

    </section>
  )
}

export default Footer
