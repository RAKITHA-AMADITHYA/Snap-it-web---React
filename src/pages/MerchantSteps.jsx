
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import  { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import StepsImg from '../assets/img/s4.png';
import MerchantShop from '../assets/img/step.png';
import { useNavigate } from 'react-router-dom';
import msteps from '../assets/img/msteps.png';

const MSteps = () => {
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
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
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
                    <Typography variant='h6' sx={{ fontSize: { xs: '1.3rem', lg: '1.8rem' } }} fontWeight={700}>


                        The accrued rewards are not just abstract points
                        they translate into <span style={{ color: '#f2b51c' }}>tangible benefits for both consumers and merchants</span>  within
                        the Snap it ecosystem. All you have to do is,

                    </Typography>


                    <Button variant='contained' onClick={() => handleNavigate('/merchant-signup')} sx={{ mt: 5 }}>Get Started</Button>
                </Grid>


                <Grid item xs={12} lg={6} display={'flex'} justifyContent={'center'} p={{ xs: 2, lg: 0 }} >
                    <img src={MerchantShop} width={'100%'} alt="" />
                </Grid>

            </Grid>




            <Box
                sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}

            >
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
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', }} >
                            <img src={StepsImg} alt="" />
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
                        <Typography variant='h2' sx={{ fontSize: { xs: '1.2rem', lg: '1.8rem' } }} textAlign={'center'} fontWeight={700}>Getting Started with <span style={{ color: '#f2b51c' }}>Snap it</span>  as a Merchant

                        </Typography>

                    </motion.div>
                </Grid>


            </section>

            <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{
                        display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 1 }
                    }} sm={3}
                >
                    <motion.div variants={leftVariants}>
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 3, minHeight: '300px',bgcolor:'#f2b51c'  }}>
                            <Typography variant='subtitle1' textAlign={'center'} fontWeight={700}> <span> </span>
                                <span style={{ color: '#000' }}>Registration</span>

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
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 3, minHeight: '300px',bgcolor:'#f2b51c'  }}>
                            <Typography variant='subtitle1' textAlign={'center'} fontWeight={700}><span> </span>
                                <span style={{ color: '#000' }}>Payment Made Simple</span>

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
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, minHeight: '293px',bgcolor:'#f2b51c'  }} >
                            <Typography variant='subtitle1' textAlign={'center'} fontWeight={700}><span> </span>
                                <span style={{ color: '#000' }}>Earn Snap it <br /> Rewards</span>

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
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, minHeight: '293px', bgcolor: '#f2b51c' }}>
                            <Typography variant='h6' textAlign={'center'} fontWeight={700}><span> </span>
                                <span style={{ color: '#000' }}>Cash Payback Flexibility</span>

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
                        <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, minHeight: '293px', bgcolor: '#f2b51c' }}>
                            <Typography variant='h6' textAlign={'center'} fontWeight={700}> <span> </span>
                                <span style={{ color: '#000' }}>Instant CFT Transfer</span>

                            </Typography>
                            <Typography variant='subtitle2' textAlign={'justify'} fontWeight={400} >
                                Request cash payback, and we’ll initiate an instant Credit Transfer Fund (CFT) to your bank account. Quick access to funds for enhanced financial liquidity and operational efficiency.
                            </Typography>

                        </Card>
                    </motion.div>
                </Grid>

            </Grid>
            </Box>

        </>

    )
}

export default MSteps
