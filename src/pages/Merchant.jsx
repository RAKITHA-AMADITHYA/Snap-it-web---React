
import { Box, Button, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Analize from '../assets/img/mer2.png'
import chart from '../assets/img/mer3.png'
import Merchant from '../assets/img/mercahant3.png';
import { useNavigate } from 'react-router-dom';
import Reward from '../assets/img/mer1.png';
import reward2 from '../assets/img/mer4.png';
import ServiceCardTwo from '../components/Card/ServiceCardTwo';

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
            <Box
                sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}

            >
                {/* Section 1 */}
                <section>

                    <Grid container>
                        <Grid item xs={12} md={6}
                            data-aos="fade-right"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="2500"
                            p={1}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}
                        >
                            <Typography variant='h2' fontWeight={800} >
                                Become a Snap it <br /><span> </span>
                                <span style={{ color: '#f2b51c' }}>Merchant</span>

                            </Typography>
                            <Typography variant='h' fontWeight={700} >Boost you Customer Engagement through market Visibility</Typography>

                            <Typography variant='p' mt={1} textAlign={'justify'}>
                                Elevate customer loyalty with SnapIt's innovative program. Shoppers snap QR codes to effortlessly earn rewards across any store. Join as a merchant for streamlined payments, increased visibility, and a tech-forward solution to boost footfall.
                            </Typography>
                            <Button variant='contained' sx={{ mt: 2 }} onClick={() => handleNavigate('/merchant-steps')}>Learn More</Button>
                        </Grid>


                        <Grid
                            item
                            xs={12} md={6}
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{ display: 'flex', mt: { xs: -8, sm: 0, md: 5, lg: 2 }, justifyContent: 'end', p: { xs: 5, lg: 0 } }}
                        >
                            <motion.div variants={leftVariants}>
                                <img src={Merchant} width={'100%'} alt="" />

                            </motion.div>
                        </Grid>

                    </Grid>
                </section>





                <section >
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


                <section ref={section2Ref}>

                    <Grid container sx={{ p: { xs: 2, lg: 12 }, mt: { xs: -2, md: -12 } }} spacing={2}  >
                        <Grid
                            item
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }} sm={6}
                        >
                            <motion.div variants={cardVariants}>
                                <ServiceCardTwo fontsize={'15px'} img={Reward} widthImg={'120px'} marginTop={'8px'} title={"Listed on Snap it as a Merchant"} description={"Join Snap it as a merchant for increased visibility and accessibility to a wider audience actively seeking your products or services."} />
                            </motion.div>
                        </Grid>

                        <Grid
                            item
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }} sm={6}
                        >
                            <motion.div variants={cardVariants}>
                                <ServiceCardTwo fontsize={'15px'} img={Analize} imgMt={'30px'} widthImg={'100px'} marginTop={'24px'} title={"Increased Footfall Through Digital Presence"} description={"Snap it expands merchant reach into the digital realm, attracting tech-savvy consumers and catalyzing increased footfall and engagement."} />
                            </motion.div>
                        </Grid>

                        <Grid
                            item
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }} sm={6}
                        >
                            <motion.div variants={cardVariants}>
                                <ServiceCardTwo fontsize={'15px'} img={chart} imgMt={'30px'} widthImg={'100px'} title={"Enhanced Search Visibility"} description={"Snap it strategically positions merchants in searches, including location-based queries, boosting the chances of attracting nearby customers and driving foot traffic to your outlet/s."} />
                            </motion.div>
                        </Grid>

                        <Grid
                            item
                            component={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }} sm={6}
                        >
                            <motion.div variants={cardVariants}>
                                <ServiceCardTwo fontsize={'15px'} img={reward2} imgMt={'30px'} widthImg={'100px'} title={"Efficient Payment Management"} description={"Snap it streamlines merchant payments, handling transactions securely and providing instant disbursements upon request."} />
                            </motion.div>
                        </Grid>





                    </Grid>



                </section>
            </Box>



        </>

    )
}

export default Merchants
