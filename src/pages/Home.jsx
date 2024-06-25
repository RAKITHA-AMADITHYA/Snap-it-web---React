
import { Button, Divider, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Landingpage from '../assets/img/landingpage.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';
import ServiceCard from '../components/ContentCard/ServiceCard';







const Home = () => {
  const section2Ref = useRef(null);
  const navigate=useNavigate();
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
      <section>

        <Grid container>
          <Grid item xs={12} md={5.5}  p={{ xs: 2, lg: 10} }
                        data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2500"
          >
            <Typography variant='h2' sx={{ fontSize: { xs: '2.3rem', lg: '3.1rem' } }} fontWeight={800}>
              Experience The
              Thrill of<span> </span>
              <span style={{ color: '#f2b51c' }}>Discovery!</span>

            </Typography>

            <Typography variant='h5' sx={{ fontSize: { xs: '15px', lg: '18px' } }} mt={1} fontWeight={400} textAlign={'justify'}>
              Transforming Your Everyday Shopping Into A Rewards When Purchasing Your Favourite Brands And Products From Any Store Anywhere.
            </Typography>
            <Button variant='contained' onClick={() => handleNavigate('/signup')} sx={{mt:5}}>Get Started</Button>
          </Grid>
         

         <Grid
              item
              xs={12} md={6.5}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ 
                display: 'flex', 
                justifyContent: 'start', 
                p: [2, null,2], // Responsive array syntax: [xs, sm, md, lg, xl]
              }}            >
              <motion.div variants={leftVariants}>
              <img src={Landingpage} width={'100%'} alt="" />

              </motion.div>
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
              sx={{ display: 'flex', justifyContent: 'start', p: [2, null, 10]}}
            >
              <motion.div variants={leftVariants}>
                <Typography variant='h2' fontWeight={700}>Explore </Typography>
              <Divider sx={{ width: '100%', height: '5px', backgroundColor: '#f2b51c', marginTop: '10px' }} />

               </motion.div>
            </Grid>
            
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
