
import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


const AboutUs = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);
    


    return (
        <>

<Box
                sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}

            >
            {/* Section 1 */}
            <section>

                <Grid item xs={12} md={8} p={{ xs: 2, lg: 10 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}
                    // data-aos="fade-right"
                    // data-aos-anchor-placement="top-bottom"
                    // data-aos-duration="2500"
                >
                    <Typography variant='h2' fontWeight={800}>
                        About <span> </span>
                        <span style={{ color: '#f2b51c' }}>Us</span>

                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                        Welcome to SnapIt, the digital hub for a revolutionary loyalty and business intelligence platform. At SnapIt, we bring brands, customers, and merchants together in a mutually beneficial ecosystem, where loyalty is rewarded and insights are harnessed to improve offerings.                        </Typography>
                </Grid>
            </section>

            {/* Section 2 */}
            <section>

                <Grid item xs={12} md={8} p={{ xs: 2, lg: 10 }} mt={{ xs: -5, lg: -15 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}
                    // data-aos="fade-right"
                    // data-aos-anchor-placement="top-bottom"
                    // data-aos-duration="2500"
                >
                    <Typography variant='h2' fontWeight={800}>
                        Our <span> </span>
                        <span style={{ color: '#f2b51c' }}>Mission</span>

                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                        Our mission at SnapIt is to create a seamless and rewarding experience for all our users. We aim to empower brands with valuable customer insights, reward customers for their loyalty, and provide merchants with new opportunities to enhance their digital presence and streamline their operations.
                    </Typography>
                </Grid>
            </section>


            {/* Section 3 */}
            <section>

                <Grid item xs={12} md={8} p={{ xs: 2, lg: 10 }} mt={{ xs: -5, lg: -15 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}
                    // data-aos="fade-right"
                    // data-aos-anchor-placement="top-bottom"
                    // data-aos-duration="2500"
                >
                    <Typography variant='h2' fontWeight={800}>
                        Who We<span> </span>
                        <span style={{ color: '#f2b51c' }}> Are</span>

                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                        SnapIt is the brainchild of four seasoned professionals from diverse industries: Software Development, Business Analytics, Telecommunications, and FMCG Sales. United by a shared vision, we leverage our extensive knowledge and experience to create a platform that benefits industries and consumers alike.                    </Typography>
                </Grid>
            </section>

            {/* Section 4 */}
            <section>

                <Grid item xs={12} md={8} p={{ xs: 2, lg: 10 }} mt={{ xs: -5, lg: -15 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}
                    // data-aos="fade-right"
                    // data-aos-anchor-placement="top-bottom"
                    // data-aos-duration="2500"
                >
                    <Typography variant='h2' fontWeight={800}>
                        What We <span> </span>
                        <span style={{ color: '#f2b51c' }}>Offer</span>

                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                        <span style={{ fontSize: '18px', fontWeight: 600 }}>For Consumers:<br /></span>
                        With SnapIt, consumers can earn rewards from their favorite brands simply by scanning a QR code on product packaging. Our platform allows users to provide valuable feedback, manage shopping lists, and create wish lists. The rewards collected can be redeemed at merchant outlets for a variety of needs, from utility bills to everyday purchases.
                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                        <span style={{ fontSize: '18px', fontWeight: 600 }}>For Brands: <br /></span>

                        SnapIt provides brands with comprehensive customer insights, a user-friendly interface for managing reward programs, and real-time feedback from millions of customers. Brands can tailor their products and services to better meet customer needs, fostering stronger relationships and increasing customer loyalty.
                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                        <span style={{ fontSize: '18px', fontWeight: 600 }}>For Merchants: <br /></span>

                        Our platform offers merchants a unique opportunity to "Uberize" their business by going digital. SnapIt merchants can easily join the platform, gain an additional method for collecting payments, and enhance their digital presence. From supermarkets to local corner shops, merchants can benefit from increased visibility and easy financial reconciliation.
                    </Typography>




                </Grid>
            </section>

            {/* Section 5 */}
            <section>

                <Grid item xs={12} md={8} p={{ xs: 2, lg: 10 }} mt={{ xs: -5, lg: -15 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}
                    // data-aos="fade-right"
                    // data-aos-anchor-placement="top-bottom"
                    // data-aos-duration="2500"
                >
                    <Typography variant='h2' fontWeight={800}>
                    Why Choose  <span> </span>
                        <span style={{ color: '#f2b51c' }}>SnapIt?</span>

                    </Typography>

                    <Typography variant='subtitle1' mt={1} textAlign={'justify'}  >
                    At SnapIt, we believe in the power of loyalty and the importance of understanding customer needs. Our platform is designed to offer a seamless experience for all users, whether you're a brand looking to connect with your customers, a consumer seeking rewards, or a merchant aiming to expand your business.
                   <br/> Join us on our journey to create a connected and rewarding ecosystem for all. Snap it, earn it, and spend it with SnapIt! </Typography>                </Grid>
            </section>

</Box>


        </>

    )
}

export default AboutUs
