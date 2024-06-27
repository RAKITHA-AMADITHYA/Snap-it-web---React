
import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Customer from '../assets/img/customerCard.jpg';
import brandsCard from '../assets/img/brandsCard.png';
import Merchant from '../assets/img/merchantCard.png';
import { useNavigate } from 'react-router-dom';


const PublicSignup = () => {
    const section2Ref = useRef(null);
    const navigate=useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
      };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true,
        });
    }, []);

    const cardVariants = {
        offscreen: {
            // y: 300,
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


  




    const handleButtonClick = () => {
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>

            <section >

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: 2,textAlign:'center' }}
                >
                    <motion.div variants={cardVariants}>
                        <Typography variant='h2' fontWeight={800}>
                            Sign up <span> </span>
                            <span style={{ color: '#f2b51c' }}>Now!</span></Typography>
                            <Typography variant='h4' fontWeight={400}>Choose your account type</Typography>
                    </motion.div>
                </Grid>

              

            </section>
            <section>

                <Grid container >

                    <Grid item xs={12} md={4} p={{ xs: 5, lg: 10 }}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                    >
                        <Card 
                        onClick={() => handleNavigate('/customer-signup')}
                        sx={{
                            bgcolor: '#1a140e',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                cursor:'pointer'
                            }
                        }}>
                            <Box display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}>
                                <img src={Customer} width={'100%'} style={{
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }} alt="" />
                                <Typography variant='h4' p={1} fontWeight={800} color={'#eda632'}>Customer</Typography>
                            </Box>

                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} p={{ xs: 5, lg: 10 }}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                    >
                        <Card
                        onClick={() => handleNavigate('/brand-signup')}
                        sx={{
                            bgcolor: '#190e0e',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            }
                        }}>
                            <Box display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}>
                                <img src={brandsCard} width={'100%'} style={{
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        cursor:'pointer'
                                    }
                                }} alt="" />
                                <Typography variant='h4' p={1} fontWeight={800} color={'#eda632'}>Brand</Typography>
                            </Box>

                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} p={{ xs: 4, lg: 10 }}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                    >
                        <Card 
                        onClick={() => handleNavigate('/merchant-signup')}
                        sx={{
                            bgcolor: '#190e0e',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                cursor:'pointer'
                            },
                            // height:'285px'
                        }}>
                            <Box display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}>
                                <img src={Merchant} width={'100%'} style={{
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }} alt="" />
                                <Typography variant='h4' p={1} fontWeight={800} color={'#eda632'}>Merchants</Typography>
                            </Box>

                        </Card>
                    </Grid>

                </Grid>
            </section>






        </>

    )
}

export default PublicSignup
