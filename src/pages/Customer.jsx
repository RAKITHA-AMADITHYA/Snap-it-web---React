
import { Box, Button, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CustomerImg from '../assets/img/customer3.png';
import ShoppingList from '../assets/img/list.png';
import reward2 from '../assets/img/reward2.png';
import Wallet from '../assets/img/wallet.png';
import WishList from '../assets/img/wish.png';
import ServiceCardTwo from '../components/Card/ServiceCardTwo';

const Customer = () => {
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
                <Grid item xs={12} md={6} p={{ xs: 2, lg: 15 }} sx={{ mt: { lg: -10 } }}
                data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                    >
                        <Typography variant='h1' fontWeight={800} sx={{ fontSize: { xs: '2.5rem', lg: '3.5rem' } }}>
                            Snap it for <br /><span> </span>
                            <span style={{ color: '#f2b51c' }}>Customers</span>

                        </Typography>

                        <Typography variant='subtitle1' mt={1} textAlign={'justify'} sx={{ fontSize: { xs: '15px', lg: '18px' } }}>

                            Snap it is a revolutionary platform that offers delightful rewards to customers by connecting with favorite brands. It transforms everyday interactions into rewarding experiences, making shopping journeys more enjoyable and memorable. It ensures customers feel appreciated and valued.
                        </Typography>
                        <Button variant='contained' sx={{ mt: 2 }} onClick={() => handleNavigate('/customer-signup')}>Get Started</Button>
                    </Grid>


                    <Grid
                        item
                        xs={12} md={6}
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: 'flex', mt: { xs: -8, sm: 0, md: 5, lg: -5 }, justifyContent: 'end', p: { xs: 5, lg: 0 } }}
                    >
                        <motion.div variants={leftVariants}>
                            <img src={CustomerImg} width={{ xs: '100%' }} alt="" />

                        </motion.div>
                    </Grid>

                </Grid>
            </section>

            <Box    
      sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}
        
      >
            {/* Section 2- Features Title */}
            <section >

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, lg: 2 } }}
                >
                    <motion.div variants={leftVariants}>
                        <Typography variant='h3' textAlign={'center'} fontWeight={700}>The core features of<span> </span>
                            <span style={{ color: '#f2b51c' }}>SnapIt</span>    </Typography>

                    </motion.div>
                </Grid>



            </section>


            <section ref={section2Ref} >

                <Grid container sx={{ p: { xs: 2, lg: 12 } }} spacing={2}  >

                    {/* wallet card */}
                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'center',alignItems:'center' 
                        }}   
                        sm={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo fontsize={'15px'} img={Wallet} widthImg={'180px'} marginTop={'-15px'} title={"Wallet"} description={"Effortlessly accumulate your rewards by scanning the QR codes offered by brands. Our rewards never expire, so you can collect as much as you want and reach the goal you have in mind."} />
                        </motion.div>
                    </Grid>
                    {/* My Shopping list card */}
                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'center',alignItems:'center' 
                        }}                           sm={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo img={ShoppingList} fontsize={'15px'} imgMt={'10px'} marginTop={'-10px'} widthImg={'130px'} title={"My Shopping List"} description={"Snap it shopping list management feature helps you to shop efficiently. Add new items to your list, save a list, or even share a list, making your trips to the store/s more organized and rewarding."} />
                        </motion.div>
                    </Grid>

                    {/* Wish list */}
                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'center',alignItems:'center' 
                        }}    sm={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo fontsize={'15px'} img={WishList} imgMt={'30px'} widthImg={'100px'} title={"Wish Lists"} description={"List out items you would like to have promotional offers on to your Wish list. The wish list will help the Snap it team negotiate with brand owners for customer-driven offers."} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{
                            display: 'flex', justifyContent: 'center',alignItems:'center' 
                        }}                           sm={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo img={reward2} fontsize={'15px'} imgMt={'30px'} widthImg={'100px'} title={"Favourites"} description={"Add your preferred items on Snap it onto the Favourites list for easy viewing of available offers."} />
                        </motion.div>
                    </Grid>





                </Grid>

            </section>

            </Box>


        </>

    )
}

export default Customer
