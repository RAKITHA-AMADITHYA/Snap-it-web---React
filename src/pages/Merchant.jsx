
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Analize from '../assets/img/analize.png';
import chart from '../assets/img/chart.png';
import Merchant from '../assets/img/merchant1.png';
import msteps from '../assets/img/msteps.png';
import step1 from '../assets/img/s1.png';
import step2 from '../assets/img/s2.png';
import step3 from '../assets/img/s3.png';

import Reward from '../assets/img/reward.png';
import reward2 from '../assets/img/reward2.png';
import ServiceCardTwo from '../components/Card/ServiceCardTwo';
import { useNavigate } from 'react-router-dom';

const Merchants = () => {
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
    const cardVariants = {
        offscreen: {
            y: 300,
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



    return (
        <>

            {/* Section 1 */}
            <section>

                <Grid container>
                    <Grid item xs={12} md={6} p={{ xs: 2, lg: 10 }}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                    >
                        <Typography variant='h2' fontWeight={800} sx={{ fontSize: { xs: '2rem', lg: '3.5rem' } }}>
                            Become a Snap it <br /><span> </span>
                            <span style={{ color: '#f2b51c' }}>Merchant</span>

                        </Typography>
                        <Typography variant='h5' fontWeight={700} sx={{ fontSize: { xs: '15px', lg: '18px' } }}>Boost you Customer Engagement through market Visibility</Typography>

                        <Typography variant='subtitle1' mt={1} textAlign={'justify'}>
                            Elevate customer loyalty with SnapIt's innovative program. Shoppers snap QR codes to effortlessly earn rewards across any store. Join as a merchant for streamlined payments, increased visibility, and a tech-forward solution to boost footfall.
                        </Typography>
                        <Button variant='contained' sx={{ mt: 2 }} onClick={() => handleNavigate('/merchant-signup')}>Get Started</Button>
                    </Grid>


                    <Grid
                        item
                        xs={12} md={6}
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: 'flex', mt: { xs: -8, sm: 0, md: 5, lg: -5 }, justifyContent: 'center', p: { xs: 11, lg: 10 } }}
                    >
                        <motion.div variants={leftVariants}>
                            <img src={Merchant} width={'100%'} alt="" />

                        </motion.div>
                    </Grid>

                </Grid>
            </section>


            <section style={{ marginTop: '20px' }}>

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, lg: 2 } }}>

                    <motion.div variants={leftVariants}>
                        <Typography variant='h4' sx={{ fontSize: { xs: '15px', lg: '30px' } }} textAlign={'center'} fontWeight={700}>The accrued rewards are not just abstract points  they translate into tangible benefits for both consumers and merchants within the Snap it ecosystem. All you have to do is,</Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', p: 5 }} >
                            <img src={msteps} alt="" />
                        </Box>
                    </motion.div>
                </Grid>


                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, lg: 2 } }}>

                    <motion.div variants={leftVariants}>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', p: 2 }} >
                            <img src={step1} alt="" />
                        </Box>
                    </motion.div>

                    
                </Grid>
                <Grid
                mt={-10}
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, lg: 2 } }}>

                    <motion.div variants={leftVariants}>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', p: 2 }} >
                            <img src={step2} alt="" />
                        </Box>
                    </motion.div>

                    
                </Grid>
                <Grid
                mt={-10}
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, lg: 2 } }}>

                    <motion.div variants={leftVariants}>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', p: 2 }} >
                            <img src={step3} alt="" />
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
                        <Typography variant='h2' sx={{ fontSize: { xs: '20px', lg: '35px' } }} textAlign={'center'} fontWeight={700}>Advantages For Merchants on Snap it

                        </Typography>

                    </motion.div>
                </Grid>


            </section>


            <section ref={section2Ref} style={{ marginTop: '20px' }}>

                <Grid container >
                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo fontsize={'20px'} img={Reward} widthImg={'150px'} marginTop={'-25px'} title={"Listed on Snap it as a Merchant"} description={"Join Snap it as a merchant for increased visibility and accessibility to a wider audience actively seeking your products or services."} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo fontsize={'20px'} img={Analize} imgMt={'30px'} widthImg={'100px'} title={"Increased Footfall Through Digital Presence"} description={"Snap it expands merchant reach into the digital realm, attracting tech-savvy consumers and catalyzing increased footfall and engagement."} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo fontsize={'20px'} img={chart} imgMt={'30px'} widthImg={'100px'} title={"Enhanced Search Visibility"} description={"Snap it strategically positions merchants in searches, including location-based queries, boosting the chances of attracting nearby customers and driving foot traffic to your outlet/s."} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo fontsize={'20px'} img={reward2} imgMt={'30px'} widthImg={'100px'} title={"Efficient Payment Management"} description={"Snap it streamlines merchant payments, handling transactions securely and providing instant disbursements upon request."} />
                        </motion.div>
                    </Grid>





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

            <section>
                <Grid container>
                    {/* Step 1 */}
                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={leftVariants}>
                            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 5 }}>
                                <Typography variant='h4' textAlign={'center'} fontWeight={700}> Step 1<span> </span>
                                    <span style={{ color: '#f2b51c' }}>-Registration</span>

                                </Typography>
                                <Typography variant='h6' textAlign={'justify'} fontWeight={400} mt={2}>
                                    Sign up easily as a merchant on Snap it. Gain access to powerful tools to create unique QR codes connecting your physical store to the digital Snap it payment system.
                                </Typography>

                            </Card>
                        </motion.div>
                    </Grid>
                    {/* Step 2 */}
                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={leftVariants}>
                            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 5, minHeight: '220px' }}>
                                <Typography variant='h4' textAlign={'center'} fontWeight={700}> Step 2<span> </span>
                                    <span style={{ color: '#f2b51c' }}>-Payment Made Simple</span>

                                </Typography>
                                <Typography variant='h6' textAlign={'justify'} fontWeight={400} mt={2} >
                                    Customers scan your Snap it QR code for swift and secure payment transactions using Snap it rewards. Say goodbye to traditional payment hassles.

                                </Typography>


                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Step 3 */}

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={leftVariants}>
                            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 5 }}>
                                <Typography variant='h4' textAlign={'center'} fontWeight={700}> Step 3<span> </span>
                                    <span style={{ color: '#f2b51c' }}>-Earn Snap it Rewards</span>

                                </Typography>
                                <Typography variant='h6' textAlign={'justify'} fontWeight={400} mt={2}>
                                    Every transaction on Snap it earns you rewards, a virtual currency within our ecosystem. Encourage customer loyalty by offering a unique payment experience.
                                </Typography>

                            </Card>
                        </motion.div>
                    </Grid>
                    {/* Step 4 */}

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={leftVariants}>
                            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 5 }}>
                                <Typography variant='h4' textAlign={'center'} fontWeight={700}> Step 4<span> </span>
                                    <span style={{ color: '#f2b51c' }}>- Cash Payback Flexibility</span>

                                </Typography>
                                <Typography variant='h6' textAlign={'justify'} fontWeight={400} mt={2} >
                                    Convert your Snap it transactions to cash whenever you want. Enjoy flexibility in withdrawal timing, instant, daily, or as per your preference.
                                </Typography>

                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Step 5 */}

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'start', p: { xs: 2, lg: 5 }
                        }} md={6}
                    >
                        <motion.div variants={leftVariants}>
                            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 5 }}>
                                <Typography variant='h4' textAlign={'center'} fontWeight={700}> Step 5<span> </span>
                                    <span style={{ color: '#f2b51c' }}>-Instant CFT Transfer</span>

                                </Typography>
                                <Typography variant='h6' textAlign={'justify'} fontWeight={400} >
                                    Request cash payback, and we’ll initiate an instant Credit Transfer Fund (CFT) to your bank account. Quick access to funds for enhanced financial liquidity and operational efficiency.
                                </Typography>

                            </Card>
                        </motion.div>
                    </Grid>

                </Grid>
            </section>

        </>

    )
}

export default Merchants
