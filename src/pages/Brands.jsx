
import { Button, Divider, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import brands from '../assets/img/brands.png';
import Reward from '../assets/img/reward.png';
import Analize from '../assets/img/analize.png';
import chart from '../assets/img/chart.png';
import reward2 from '../assets/img/reward2.png';

import ServiceCardTwo from '../components/Card/ServiceCardTwo';







const Brands = () => {
    const section2Ref = useRef(null);
   

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: true, // Whether elements should animate out while scrolling past them
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

                <Grid container>
                    <Grid item xs={12} md={6} p={10}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2500"
                    >
                        <Typography variant='h1' fontWeight={800}>
                            Snap it for <br /><span> </span>
                            <span style={{ color: '#f2b51c' }}>Brands</span>

                        </Typography>

                        <Typography variant='subtitle1' mt={1} textAlign={'justify'}>
                            In an era dominated by digital interactions, Snap it emerges as a groundbreaking universal platform designed to bridge the gap between brands and consumers, presenting a unique opportunity for global or small-scale businesses to connect with millions of end consumers on a daily basis. Snap it's mission is to create a novel avenue for brand visibility and competitiveness by fostering empathic connections through the distribution of millions of small rewards.

                        </Typography>
                        <Button variant='contained' sx={{ mt: 2 }}>Get Started</Button>
                    </Grid>


                    <Grid
                        item
                        xs={12} md={6}
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
                    >
                        <motion.div variants={leftVariants}>
                            <img src={brands} width={'100%'} alt="" />

                        </motion.div>
                    </Grid>

                </Grid>
            </section>


            {/* Section 2 */}
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
                        {/* <ServiceCard title={service.title} /> */}
                        <Typography variant='h3' textAlign={'center'} fontWeight={700}>The core features of SnapIt focus on revolutionizing the traditional approach to consumer engagement </Typography>

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
                        sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
                        md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo img={Reward} widthImg={'150px'} marginTop={'-25px'} title={"Mass Rewarding"} description={"The core features of Snap it focuses on revolutionizing the traditional approach to consumer engagement"} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
                        md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo img={Analize} imgMt={'30px'} widthImg={'100px'} title={"Real-time Analytics"} description={"Snap it incorporates real-time analytics to provide brands with valuable insights into consumer behavior and preferences. This data-driven approach empowers businesses to make informed decisions, refine their marketing strategies, and tailor their offerings to better resonate with their target audience. Real-time analytics enable brands to adapt quickly to market trends and consumer expectations."} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
                        md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo img={chart} imgMt={'30px'} widthImg={'100px'} title={"Streamlined Process"} description={"The platform streamlines the process of rewarding consumers, ensuring efficiency and ease of use. Brands can seamlessly distribute rewards, fostering a positive and memorable experience for the consumers. Snap it’'s user-friendly interface ensures that both brands and consumers can engage effortlessly, enhancing the overall user experience."} />
                        </motion.div>
                    </Grid>

                    <Grid
                        item
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: 'flex', justifyContent: 'start', p: 5 }}
                        md={6}
                    >
                        <motion.div variants={cardVariants}>
                            <ServiceCardTwo img={reward2} imgMt={'30px'} widthImg={'100px'} title={"One-to-One Rewards"} description={"Snap it emphasizes personalized engagement through its one-to-one rewards system. This individualized approach ensures that consumers feel valued and recognized by the brands they interact with. By tailoring rewards to specific consumer preferences and behaviors, brands can cultivate a sense of loyalty and encourage repeat purchases."} />
                        </motion.div>
                    </Grid>





                </Grid>

            </section>


        </>

    )
}

export default Brands
