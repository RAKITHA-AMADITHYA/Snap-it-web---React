import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Landingpage from "../assets/img/landing4.png";
import Man from "../assets/img/man.png";
import Merchant from "../assets/img/merchantImg.png";
import Mobile from "../assets/img/mobile.png";


import ServiceCard from "../components/ContentCard/ServiceCard";
import { getProductList } from "../services/ProductServices";

const Home = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = React.useState([]);


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4, // Default setting for all screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };



  const fetchProducts = async () => {
    const response = await getProductList();
    console.log("response", response);

    if (response) {
      setProductList(response);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const leftVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };



  return (
    <>


      {/* Section 1 */}
      <section>
        <Grid container bgcolor={"#F3F3F3"}>
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: "flex", justifyContent: "start", p: [1, 2, 10] }}
          >
            <motion.div variants={leftVariants}>
              <Box
                sx={{
                  maxWidth: { lg: "500px" },
                  minWidth: { lg: "500px" },
                  margin: "0 auto",
                }}
              >
                <Typography
                  variant="h1"
                  fontWeight={800}
                  sx={{ ml: { xs: 0, md: 8 }, mt: { xs: 0, md: -5 } }}
                >
                  Experience The Thrill of{" "}
                  <span style={{ color: "#FFB800" }}>Discovery!</span>{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  ml={8}
                  sx={{ ml: { xs: 0, md: 8 } }}
                >
                  transforming your everyday shopping into a rewards when
                  purchasing your favourite brands and products from any store
                  anywhere.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, ml: { xs: 0, md: 8 } }}
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </Button>
              </Box>
            </motion.div>
          </Grid>
          {/* </Box> */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <img src={Landingpage} width={"auto"} alt="" />
          </Grid>
        </Grid>
      </section>
      <Box
      sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}
        
      >
        {/* Section 2 */}
        <section>
          <Grid
            item
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{ display: "flex", justifyContent: "start", p: [2, null, 0], mt: 2 }}
          >
            <motion.div variants={leftVariants}>
              <Typography variant="h3" fontWeight={700}>
                Explore{" "}
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  height: "5px",
                  backgroundColor: "#f2b51c",
                  marginTop: "10px",
                }}
              />
            </motion.div>
          </Grid>

          <Grid item p={5} sx={{ mt: [0, null, 2] }}>
            <Slider {...settings}>

              {productList && productList.map((product) => (
                <div>
                  <ServiceCard 
                    product={product?.productImageUrl}
                    title={product?.description}
                    price={product?.unitPrice}
                    point={product?.productPoint}
                    packet={product?.packet}
                  />
                </div>
              ))}


            </Slider>
          </Grid>
        </section>




        {/*Snapit for Customer */}
        <section>

          <Grid container>


            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ display: "flex", justifyContent: "center", mt: 2 }}
            >
              <motion.div variants={leftVariants}>
                {" "}
                <img src={Mobile} width={"auto"} alt="" />
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ display: "flex", justifyContent: "start", alignItems: 'center' }}
            >
              <motion.div variants={leftVariants}>
                <Box>
                  <Typography variant="h3" fontWeight={700}>
                    Snapit for Customer            </Typography>
                  <Typography
                    variant="h4"
                    mt={2}
                    fontWeight={700}

                  >Earn amazing rewards and spend <br /> on your daily needs ! </Typography>

                  <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    mt={2}
                  >
                    As a Snap it customer, you can earn rewards from your favorite brands simply by scanning a QR code available on the product packaging. To get started, download the Snap It application by scanning the QR code or find us on the Google Play Store or Apple App Store.
                  </Typography>

                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ ml: { xs: 0, md: 0 }, mt: 2 }}
                    >
                      With Snap It, you can:
                    </Typography>
                  </Box>
                  <Box sx={{ ml: { xs: 0, md: 1 }, mt: 2 }} gap={2}>
                    <Typography variant="subtitle2" fontWeight={500}>
                      - Provide your views to your favorite brands to satisfy your requirements and improve their offerings.
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={500}>
                      - Maintain a shopping list to ensure you don't forget any items while shopping.
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={500}>
                      - Add brands that offer rewards to a favorites list.
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={500}>
                      - Create a wish list of brands and products you'd like to receive rewards from.
                    </Typography>
                  </Box>


                  <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    sx={{ ml: { xs: 0, md: 1 }, mt: 2 }}
                  >
                    The rewards you collect can be used to cover your next utility bill, including mobile top-ups, water bills, or electricity bills.                 </Typography>

                  {/* <Button
    variant="contained"
    sx={{
      mt: 2,
      //  ml: { xs: 0, md: 1 }
    }}
    onClick={() => navigate("/brands")}
  >
    Learn More
  </Button> */}
                </Box>
                {/* <Box p={1}>
                  <Button variant="contained" onClick={() => navigate("/signup")}>
                    Get Started
                  </Button>
                </Box> */}
              </motion.div>
            </Grid>
          </Grid>
        </section>

        {/*Brands */}
        <section>

          <section>
            <Grid container mt={5}>

            <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                // sx={{ display: "flex", justifyContent: "end", mt: 2 }}
                sx={{ display: { xs: "flex", md: "none" }, justifyContent: "end", mt: 2   }}

              >

                <Box>


                  <img src={Man} width={"auto"} alt="" /></Box>
                {/* </motion.div> */}
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                sx={{ display: "flex", justifyContent: "start", }}
              >
                <Box>
                  <Typography variant="h3" fontWeight={800}>
                    Snap it for brands
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ ml: { xs: 0, md: 0 }, mt: { xs: 0, md: 2 } }}
                  >Know your customer and reward <br /> them for their loyalty.  </Typography>


                  <Typography variant="subtitle2" fontWeight={500} mt={2}>
                    Snap It is designed to bring you closer to your customers by providing valuable insights and enhancing your offerings. By joining Snap It, you gain access to a wealth of information about your customers, including their purchase patterns and preferences, allowing you to tailor your products and services more effectively. Snap it will provide you with,
                  </Typography>

                  <Box mt={2}>
                    <Typography variant="subtitle2" gutterBottom>
                      1. Comprehensive Customer Insights
                    </Typography>

                  </Box>

                  <Box mt={0}>
                    <Typography variant="subtitle2" gutterBottom>
                      2. A User-Friendly Interface
                    </Typography>

                  </Box>

                  <Box mt={0}>
                    <Typography variant="subtitle2" gutterBottom>
                      3. Real-Time Feedback
                    </Typography>
                  </Box>

                  <Box mt={0}>
                    <Typography variant="subtitle2" gutterBottom>
                      4. Enhanced Customer Engagement
                    </Typography>
                  </Box>

                  <Box mt={0}>
                    <Typography variant="subtitle2" gutterBottom>
                      5.Deep Analytics for Informed Decisions
                    </Typography>

                  </Box>

                  <Box mt={0}>
                    <Typography variant="subtitle2" gutterBottom>
                      6.Increased Customer Loyalty
                    </Typography>

                  </Box>

                  <Typography variant="subtitle2" fontWeight={500} mt={2}>
                    Snap It empowers you to make informed decisions, create impactful rewards programs, and build lasting relationships with your customers.

                  </Typography>


                </Box>
                {/* </motion.div> */}
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                // sx={{ display: "flex", justifyContent: "end", mt: 2 }}
                sx={{ display: { xs: "none", md: "flex" }, justifyContent: "end", mt: 2   }}

              >

                <Box>


                  <img src={Man} width={"auto"} alt="" /></Box>
                {/* </motion.div> */}
              </Grid>




            </Grid>
          </section>

        </section>


        {/*Merchants */}
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              mt: 10
            }}
          >

          </Box>

          <section>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                sx={{ display: { xs: "flex", md: "flex" }, justifyContent: "start"  }}
              >
                <motion.div variants={leftVariants}>
                  {" "}
                  <img src={Merchant} width={"auto"} alt="" />
                </motion.div>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                sx={{ display: "flex", justifyContent: "start", }}
              >
                <motion.div variants={leftVariants}>
                  <Box >

                    <Typography variant="h3" fontWeight={800}>
                      Snap it for Merchants
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      sx={{ ml: { xs: 0, md: 0 }, mt: { xs: 0, md: 2 } }}
                    >Uberize your business by going digital !</Typography>

                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      mt={1}
                    // sx={{ ml: { xs: 0, md: 8 }, mt: 2 }}
                    >
                      Snap It merchants cater to customers regular wants and needs. When customers collect sufficient Snap It rewards from their favorite brands, they can use these rewards to make purchases from Snap It merchants. These merchants range from utility service providers and mobile operators to supermarkets, department stores, and even local corner shops.                     </Typography>

                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ mt: 2 }}
                    // sx={{ ml: { xs: 0, md: 8 }, mt: 2 }}
                    >
                      Snap It offers an easy, self-registering interface for merchants to join the platform. By becoming a Snap It merchant, businesses can: </Typography>
                    <Box mt={4}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        1. Gain an additional method for collecting payments.
                      </Typography>

                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        2. Increase their digital presence.
                      </Typography>

                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        3. Appear in search results when Snap It customers look for specific products on the app.
                      </Typography>

                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        4. Benefit from easy reporting and financial reconciliation with just a click of a button.
                      </Typography>
                    </Box>



                  </Box>
                </motion.div>
              </Grid>



            </Grid>
          </section>

        </section>




      </Box>



    </>
  );
};

export default Home;
