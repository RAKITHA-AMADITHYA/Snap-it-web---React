
import { Box, Card, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import brandsCard from '../assets/img/brandC.png';
import Customer from '../assets/img/customerC.png';
import Merchant from '../assets/img/merchantC.png';


const PublicSignup = () => {
    const section2Ref = useRef(null);
    const navigate = useNavigate();

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
                    sx={{ display: 'flex', justifyContent: 'center', p: 2, textAlign: 'center' }}
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
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    cursor: 'pointer',
                                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                        >
                            <Box
                                display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                <img
                                    src={Customer}
                                    width={'100%'}
                                    style={{
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        }
                                    }}
                                    alt="Customer"
                                />
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
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    cursor: 'pointer',
                                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                            >
                            <Box display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}>
                                <img src={brandsCard} width={'100%'} style={{
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        cursor: 'pointer'
                                    }
                                }} alt="" />
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
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    cursor: 'pointer',
                                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                            
                            >
                            <Box display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}>
                                <img src={Merchant} width={'100%'} style={{
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }} alt="" />
                            </Box>

                        </Card>
                    </Grid>

                </Grid>
            </section>






        </>

    )
}

export default PublicSignup
