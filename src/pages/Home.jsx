import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Landingpage from '../assets/img/landing4.png';
import Mobile from '../assets/img/mobile.png';
import Man from '../assets/img/man.png';
import product4 from '../assets/img/product4.png';
import product5 from '../assets/img/product7.png';
import product6 from '../assets/img/product8.png';
import product7 from '../assets/img/product9.png';
import product8 from '../assets/img/product11.png';
import Merchant from '../assets/img/merchantImg.png';



import ServiceCard from '../components/ContentCard/ServiceCard';


const Home = () => {
  const section2Ref = useRef(null);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5, // Default setting for all screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 5, // Show 5 slides on medium devices
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 768px and up)
        settings: {
          slidesToShow: 2, // Show 2 slides on small devices
        },
      },
      {
        breakpoint: 480, // Extra small devices (portrait phones, less than 480px)
        settings: {
          slidesToShow: 1, // Show 2 slides on extra small devices
          autoplaySpeed: 2000,

        },
      },
    ],
  };

  const settingsHedder = {
    dots: false,
    infinite: true,
    speed: 5000,
    arrows: false,
    slidesToShow: 1, // Default setting for all screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 5, // Show 5 slides on medium devices
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 768px and up)
        settings: {
          slidesToShow: 2, // Show 2 slides on small devices
        },
      },
      {
        breakpoint: 480, // Extra small devices (portrait phones, less than 480px)
        settings: {
          slidesToShow: 1, // Show 2 slides on extra small devices
        },
      },
    ],
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);


  const leftVariants = {
    offscreen: {
      // x: 300,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };




  const handleButtonClick = () => {
    section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>

      {/* Section 1 */}
      <section >

        <Grid container bgcolor={'#F3F3F3'}>

          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'start', p: [1, 2, 10] }}
          >
            <motion.div variants={leftVariants}>
              <Box sx={{
                maxWidth: { lg: '500px' },
                minWidth: { lg: '500px' },
                margin: '0 auto',
              }}>
                <Typography variant='h1' fontWeight={800} sx={{ ml: { xs: 0, md: 8 }, mt: { xs: 0, md: -5 } }}>Experience The  Thrill of <span style={{ color: '#FFB800' }}>Discovery!</span> </Typography>
                <Typography variant='subtitle1' fontWeight={500} ml={8} sx={{ ml: { xs: 0, md: 8 } }} >transforming your everyday shopping into a rewards when purchasing your favourite brands and products from any store anywhere.</Typography>
                <Button variant='contained' sx={{ mt: 2, ml: { xs: 0, md: 8 }, }} onClick={() => navigate('/signup')}   >Get Start</Button>
              </Box>
            </motion.div>
          </Grid>
          {/* </Box> */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'end' }}>
            <img src={Landingpage} width={'100%'} alt="" />
          </Grid>

        </Grid>
      </section>


      {/* Section 2 */}
      <section >

        <Grid
          item
          component={motion.div}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          sx={{ display: 'flex', justifyContent: 'start', p: [2, null, 10] }}
        >
          <motion.div variants={leftVariants}>
            <Typography variant='h2' fontWeight={700}>Explore </Typography>
            <Divider sx={{ width: '100%', height: '5px', backgroundColor: '#f2b51c', marginTop: '10px' }} />

          </motion.div>
        </Grid>

        <Grid item p={5} sx={{mt: [0, null, -10]}} >
          <Slider {...settings}>

            {/* <div >
              <ServiceCard product={product2} title={"Body Loation"} price={"850"} point={"4.00"} packet={"Bottel 45"} />
            </div> */}
            <div>
              <ServiceCard product={product8} title={"DJI Gimbal lorem lipsu lorem"} price={"36000"} point={"4.00"} packet={" T Shirt 120"} />
            </div>

            <div>
              <ServiceCard product={product4} title={"Air Jordan 4"} price={"50,000"} point={"4.00"} packet={"56"} />
            </div>

            <div>
              <ServiceCard product={product5} title={"Kellogs Cornflex"} price={"550"} point={"4.00"} packet={"Packets56"} />
            </div>

            <div>
              <ServiceCard product={product6} title={"I Phone 15 pro max"} price={"320,000"} point={"5.00"} packet={"220"} />
            </div>
            <div>
              <ServiceCard product={product7} title={"DJI Gimbal lorem lipsu lorem"} price={"20,000"} point={"5.00"} packet={"220"} />
            </div>


          </Slider></Grid>

      </section>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h3' fontWeight={700}>HOW IT WORKS</Typography>
      </Box>

      <section >

        <Grid container>
          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'center', }}
          >
            <motion.div variants={leftVariants}>   <img src={Mobile} width={'100%'} alt="" /></motion.div>
          </Grid>
          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'start' }}
          >
            <motion.div variants={leftVariants}>
              <Box sx={{
                maxWidth: { lg: '500px' },
                minWidth: { lg: '500px' },
                margin: '0 auto',
                mt: 10,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                p: [2, 2, 0]
              }}>
                <Typography variant='subtitle1' fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco     </Typography>
                <Typography variant='subtitle1' fontWeight={500} mt={2}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </Typography>
              </Box>
              <Box p={1}>
              <Button variant='contained' onClick={() => navigate('/signup')}>
      Get Started
    </Button>

              </Box>
            </motion.div>
          </Grid>


        </Grid>
      </section>

      <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, ml: { xs: 0, md: 110  } }} >
        <Typography variant='h3' fontWeight={800}>FOR BRANDS</Typography>
      </Box>

      <section >

        <Grid container>

          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'start', p: [2, 2, 10] }}
          >
            <motion.div variants={leftVariants}>
              <Box sx={{
                maxWidth: { lg: '600px' },
                minWidth: { lg: '600px' },
                margin: '0 auto',
              }}>
                <Typography variant='subtitle1' fontWeight={500} sx={{ ml: { xs: 0, md: 8 }, mt: { xs: 0, md: -5 } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </Typography>
                <Typography variant='subtitle1' fontWeight={500} mt={2} sx={{ ml: { xs: 0, md: 8 } }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </Typography>
                <Button variant='contained' sx={{ mt: 2, ml: { xs: 0, md: 8 }, }} onClick={() => navigate('/brands')} >Learn More</Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'end', }}
          >
            <motion.div variants={leftVariants}>   <img src={Man} width={'100%'} alt="" /></motion.div>
          </Grid>

        </Grid>
      </section>

      <Box sx={{ display: 'flex', justifyContent: 'start', p: 8, ml: { xs: 0, md: 8 } ,mt:-2}} >
        <Typography variant='h3' fontWeight={700}>FOR MERCHANTS</Typography>
      </Box>

      <section >

        <Grid container>
          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'center', }}
          >
            <motion.div variants={leftVariants}>   <img src={Merchant} width={'100%'} alt="" /></motion.div>
          </Grid>
          <Grid
            item xs={12} md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: 'flex', justifyContent: 'start', p: [1, 2, 0] }}
          >
            <motion.div variants={leftVariants}>
              <Box sx={{
                maxWidth: { lg: '500px' },
                minWidth: { lg: '500px' },
                margin: '0 auto',
                mt: 5,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <Typography variant='subtitle1' fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco     </Typography>
                <Typography variant='subtitle1' fontWeight={500} mt={2}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </Typography>
              </Box>
              <Button variant='contained' sx={{ mt: 2,m:1 }} onClick={() => navigate('/merchants')} >Learn More</Button>
            </motion.div>
          </Grid>


        </Grid>
      </section>
    </>

  )
}

export default Home
