
import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Snapit from '../assets/img/logo.png';
import Mobios from '../assets/img/mobios.png';


const AboutUs = () => {
    const section2Ref = useRef(null);


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
    const handleButtonClick = () => {
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>

            {/* Section 1 */}
            <section>

                {/* <Grid container> */}
                    <Grid item xs={12} md={8} p={{ xs: 2, lg: 10 }} sx={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center'}}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                    >
                        <Typography variant='h1' fontWeight={800}>
                            About <span> </span>
                            <span style={{ color: '#f2b51c' }}>Us</span>

                        </Typography>

                        <Typography variant='h6' mt={1}   textAlign={'center'} sx={{ fontSize: { xs: '12px', lg: '18px' } }} >
                            Snap it is a product of mobiOs Private Limited. An innovative and pioneering software development company based in Sri Lanka, that has been at the forefront of delivering cutting-edge enterprise solutions for over a decade. Our flagship solutions, Mobile Marketing solution for telecommunications operators, MEDICA – the Clinical Record Management Solution, and Engagement platform for TextWare Sri Lanka, stands as a testament to our commitment to innovation, excellence, and unwavering dedication to addressing the ever-evolving requirements to our clients and societies.
                        </Typography>
                    </Grid>


                 

                {/* </Grid> */}
            </section>


            {/* Section 2 */}
          


            <section >

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: 4 }}
                >
                    <motion.div variants={leftVariants}>
                        <Typography variant='h2' fontWeight={700}>Our Global Reach

                        </Typography>

                    </motion.div>
                </Grid>
         

                <Box sx={{ p: 10, textAlign: 'justify' ,mt:-10}}>
                    <Typography variant='h6'>mobiOs has transcended geographical boundaries, and our solutions have left a mark in countries such as Japan, Bangladesh, Myanmar, Maldives, and Malaysia. Our enterprise solutions have been adopted by a wide array of industries, including healthcare, finance, education, and more. We take immense pride in the positive impact we've made in these regions, transforming the way businesses operate and enhancing their competitiveness on a global scale.</Typography>

                </Box>

            </section>

            <section style={{ marginTop: '20px' }}>

                <Grid
                    item
                    component={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    sx={{ display: 'flex', justifyContent: 'center', p: 4 }}
                >
                    <motion.div variants={leftVariants}>
                        <Typography variant='h2' fontWeight={700}>Our Commitment to Innovation



                        </Typography>

                    </motion.div>
                </Grid>
                

                <Box sx={{ p: 10, textAlign: 'justify',mt:-10 }}>
                    <Typography variant='h6'>At mobiOs, innovation is the cornerstone of our identity. We remain dedicated to staying at the forefront of technology trends and industry best practices. By consistently adapting to the latest advancements in the software development landscape, we equip our clients with solutions that are both future-proof and competitive.

                        As a testament to our commitment to quality, mobiOs is recognized for its exceptional standards of service and dedication to excellence in every project we undertake.

                        mobiOs Private Limited is not just a software development company; it's a catalyst for transformation, a champion of innovation, and a partner in success. With MEDICA and a track record of delivering exceptional solutions across multiple industries, we continue to set new benchmarks for excellence. We invite you to join us on our journey of reshaping industries, unlocking potential, and embracing the limitless possibilities of technology. Together, we can redefine the future.</Typography>

                </Box>

            </section>




        </>

    )
}

export default AboutUs
