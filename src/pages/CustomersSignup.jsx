
import { Box, Button, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import QR from '../assets/img/qr-code.png';
import PlayStore from '../assets/img/playstore.png';
import Appstore from '../assets/img/appstore.png';


const CustomersSignup = () => {

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

    const handleClick = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.snapitonline.snap_it';
    };


    return (
        <>

            <section>

                <Grid container>
                    <Grid item xs={12} md={5.5} p={{xs:'8px',md:5}}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                        sx={{
                            display: { xs: 'block', sm: 'block' },
                        }}
                    >
                        <Typography variant='h2' fontWeight={800}>
                            Download today Snap it<span> </span>
                            <span style={{ color: '#f2b51c' }}> Mobile App!</span>

                        </Typography>

                        <Typography variant='h5' mt={1} fontWeight={400} textAlign={'justify'}>
                            Now you can scan the QR code form your mobile and checkout our mobile App or download from below
                        </Typography>

                        <Box sx={{ gap: '2px' ,                            display: { xs: 'none', md: 'block' },
}}>
                            <Button
                                variant="contained"
                                onClick={handleClick}

                                sx={{
                                    mt: 5,
                                    position: 'relative',
                                    backgroundImage: `url(${PlayStore})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '45%', // Set the width as per your image dimensions
                                    height: '10vh', // Set the height as per your image dimensions
                                    padding: 0, // Remove any default padding
                                    borderRadius: '8px', // Optional: adjust border radius
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
                                // onClick={handleClick}

                                sx={{
                                    mt: 5,
                                    ml: 2,
                                    backgroundImage: `url(${Appstore})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '45%', // Set the width as per your image dimensions
                                    height: '10vh', // Set the height as per your image dimensions
                                    padding: 0, // Remove any default padding
                                    borderRadius: '8px', // Optional: adjust border radius
                                    '&:hover': {
                                        backgroundImage: `url(${Appstore})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }
                                }}
                            ></Button>
                        </Box>

                    </Grid>


                    <Grid
                        sx={{
                            display: { xs: 'none', sm: 'block' }, justifyContent: 'start', p: 5
                        }}
                        item
                        xs={12} md={6.5}
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={leftVariants}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={QR} width={'350px'}       onClick={handleClick} 
 alt="" />
                            </Box>
                        </motion.div>
                    </Grid>

                    <Box sx={{
                        display: { xs: 'block', sm: 'none' }, justifyContent: 'center',
                    }}
                        p={5}
                    >
                        <img src={QR} width={'100%'} alt="" />

                    </Box>

                </Grid>
            </section>
        </>

    )
}

export default CustomersSignup
