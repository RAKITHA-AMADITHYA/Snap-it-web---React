
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MerchantShop from '../assets/img/merchant1.png';

import { useNavigate } from 'react-router-dom';


import msteps from '../assets/img/msteps.png';
const MSteps = () => {
    const section2Ref = useRef(null);
    const navigate = useNavigate();


    const handleNavigate = (path) => {
        navigate(path);
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
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



    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6} p={{ xs: 2, lg: 10 }}
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2500"
                >
                    <Typography variant='h6' sx={{ fontSize: { xs: '2.3rem', lg: '1.8rem' } }} fontWeight={700}>


                        The accrued rewards are not just abstract points
                        they translate into <span style={{ color: '#f2b51c' }}>tangible benefits for both consumers and merchants</span>  within
                        the Snap it ecosystem. All you have to do is,

                    </Typography>


                    <Button variant='contained' onClick={() => handleNavigate('/merchant-signup')} sx={{ mt: 5 }}>Get Started</Button>
                </Grid>


                <Grid item xs={12} lg={6} display={'flex'} justifyContent={'center'} p={{ xs: 2, lg: 10 }} >
                    <img src={MerchantShop} width={'80%'} alt="" />
                </Grid>

            </Grid>



            <section >

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, lg: 5 } }}>

                    <motion.div variants={leftVariants}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', }} >
                            <img src={msteps} alt="" />
                        </Box>
                    </motion.div>
                </Grid>



            </section>




            <section style={{ marginTop: '20px' }}>

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: 5 }}
                >
                    <motion.div variants={leftVariants}>
                        <Typography variant='h2' textAlign={'center'} fontWeight={700}>Getting Started with Snap it as a Merchant

                        </Typography>

                    </motion.div>
                </Grid>


            </section>

            <Grid container style={{display:'flex',justifyContent:'center'}}>
                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{
                        display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 1 }
                    }} md={2}
                >
                    <motion.div variants={leftVariants}>
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 3, minHeight: '300px' }}>
                            <Typography variant='subtitle1' textAlign={'center'} fontWeight={700}> <span> </span>
                                <span style={{ color: '#f2b51c' }}>Registration</span>

                            </Typography>
                            <Typography variant='subtitle2' textAlign={'center'} fontWeight={400} mt={1}>
                                Sign up easily as a merchant on Snap it. Gain access to powerful tools to create unique QR codes connecting your physical store to the digital Snap it payment system.
                            </Typography>

                        </Card>
                    </motion.div>
                </Grid>

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{
                        display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 1 }
                    }} md={2}
                >
                    <motion.div variants={leftVariants}>
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 3, minHeight: '300px' }}>
                            <Typography variant='subtitle1' textAlign={'center'} fontWeight={700}><span> </span>
                                <span style={{ color: '#f2b51c' }}>Payment Made Simple</span>

                            </Typography>
                            <Typography variant='subtitle2' textAlign={'center'} fontWeight={400} mt={2} >
                                Customers scan your Snap it QR code for swift and secure payment transactions using Snap it rewards. Say goodbye to traditional payment hassles.

                            </Typography>


                        </Card>
                    </motion.div>
                </Grid>

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{
                        display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 2 }
                    }} md={2}
                >
                    <motion.div variants={leftVariants}>
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, minHeight: '293px' }} >
                            <Typography variant='subtitle1' textAlign={'center'} fontWeight={700}><span> </span>
                                <span style={{ color: '#f2b51c' }}>Earn Snap it Rewards</span>

                            </Typography>
                            <Typography variant='subtitle2' textAlign={'center'} fontWeight={400} mt={2}>
                                Every transaction on Snap it earns you rewards, a virtual currency within our ecosystem. Encourage customer loyalty by offering a unique payment experience.
                            </Typography>

                        </Card>
                    </motion.div>
                </Grid>

                <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 2 }
                        }} md={2}
                    >
                        <motion.div variants={leftVariants}>
                            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, minHeight: '293px' }}>
                                <Typography variant='h6' textAlign={'center'} fontWeight={700}><span> </span>
                                    <span style={{ color: '#f2b51c' }}>Cash Payback Flexibility</span>

                                </Typography>
                                <Typography variant='subtitle2' textAlign={'center'} fontWeight={400} mt={2} >
                                    Convert your Snap it transactions to cash whenever you want. Enjoy flexibility in withdrawal timing, instant, daily, or as per your preference.
                                </Typography>

                            </Card>
                        </motion.div>
                    </Grid>


                    <Grid
                            item
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{
                                display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 2 }
                            }} md={2}
                        >
                            <motion.div variants={leftVariants}>
                                <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, minHeight: '293px'  }}>
                                    <Typography variant='h6' textAlign={'center'} fontWeight={700}> <span> </span>
                                        <span style={{ color: '#f2b51c' }}>Instant CFT Transfer</span>

                                    </Typography>
                                    <Typography variant='subtitle2' textAlign={'justify'} fontWeight={400} >
                                        Request cash payback, and we’ll initiate an instant Credit Transfer Fund (CFT) to your bank account. Quick access to funds for enhanced financial liquidity and operational efficiency.
                                    </Typography>

                                </Card>
                            </motion.div>
                        </Grid>

            </Grid>

            {/* <section> */}
            {/* <Grid container p={1}>

                 

                



                  


                        <Grid
                            item
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{
                                display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 2 }
                            }} md={2}
                        >
                            <motion.div variants={leftVariants}>
                                <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 3 }}>
                                    <Typography variant='h6' textAlign={'center'} fontWeight={700}> Step 5<span> </span>
                                        <span style={{ color: '#f2b51c' }}>-Instant CFT Transfer</span>

                                    </Typography>
                                    <Typography variant='subtitle2' textAlign={'justify'} fontWeight={400} >
                                        Request cash payback, and we’ll initiate an instant Credit Transfer Fund (CFT) to your bank account. Quick access to funds for enhanced financial liquidity and operational efficiency.
                                    </Typography>

                                </Card>
                            </motion.div>
                        </Grid>


                </Grid> */}
            {/* </section> */}

        </>

    )
}

export default MSteps
