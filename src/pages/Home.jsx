
import { Button, Divider, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Landingpage from '../assets/img/landingpage.png';
import ServiceCard from '../components/ContentCard/ServiceCard';
import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';







const Home = () => {
  const section2Ref = useRef(null);
  const settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const cardVariants = {
    offscreen: {
      y: -300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };


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
      <section>

        <Grid container>
          <Grid item xs={12} md={5.5} p={10}
                        data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2500"
          >
            <Typography variant='h2' fontWeight={800}>
              Experience The
              Thrill of<span> </span>
              <span style={{ color: '#f2b51c' }}>Discovery!</span>

            </Typography>

            <Typography variant='h5' mt={1} fontWeight={400} textAlign={'justify'}>
              Transforming Your Everyday Shopping Into A Rewards When Purchasing Your Favourite Brands And Products From Any Store Anywhere.
            </Typography>
            <Button variant='contained' sx={{mt:5}}>Get Started</Button>
          </Grid>
         

         <Grid
              item
              xs={12} md={6.5}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
            >
              <motion.div variants={leftVariants}>
              <img src={Landingpage} width={'100%'} alt="" />

              </motion.div>
            </Grid>

        </Grid>
      </section>


    {/* Section 2 */}
           <section style={{ marginTop: '60px' }}>

             <Grid
              item
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
            >
              <motion.div variants={leftVariants}>
                {/* <ServiceCard title={service.title} /> */}
                <Typography variant='h2' fontWeight={700}>Explore </Typography>

               </motion.div>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'start' }}>
              <Divider sx={{ width: '20%', height: '5px', backgroundColor: '#f2b51c', marginTop: '-30px' }} />
            </div>
             <Grid item p={2}>
               <Slider {...settings}>
                 
                <div style>
                   <ServiceCard product={product2} title={"Oreo chocolate Biscuit"} price={"850"} point={"4.00"} packet={"450"}/>
                </div>  <div>
                   <ServiceCard product={product3} title={"Carnage Old School"} price={"3600"} point={"4.00"} packet={"450"}/>
                </div> 

                <div style>
                   <ServiceCard product={product2} title={"Oreo chocolate Biscuit"} price={"850"} point={"4.00"} packet={"450"}/>
                </div>  <div>
                   <ServiceCard product={product3} title={"Carnage Old School"} price={"3600"} point={"4.00"} packet={"450"}/>
                </div><div style>
                   <ServiceCard product={product2} title={"Oreo chocolate Biscuit"} price={"850"} point={"4.00"} packet={"450"}/>
                </div>  <div>
                   <ServiceCard product={product3} title={"Carnage Old School"} price={"3600"} point={"4.00"} packet={"450"}/>
                </div><div style>
                   <ServiceCard product={product2} title={"Oreo chocolate Biscuit"} price={"850"} point={"4.00"} packet={"450"}/>
                </div>  <div>
                   <ServiceCard product={product3} title={"Carnage Old School"} price={"3600"} point={"4.00"} packet={"450"}/>
                </div><div style>
                   <ServiceCard product={product2} title={"Oreo chocolate Biscuit"} price={"850"} point={"4.00"} packet={"450"}/>
                </div>  <div>
                   <ServiceCard product={product3} title={"Carnage Old School"} price={"3600"} point={"4.00"} packet={"450"}/>
                </div>
                
                
              </Slider></Grid>

          </section>



    </>
   
  )
}

export default Home
