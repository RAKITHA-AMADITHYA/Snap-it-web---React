import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Landingpage from "../assets/img/landing4.png";
import Man from "../assets/img/man.png";
import Merchant from "../assets/img/merchantImg.png";
import Mobile from "../assets/img/mobile.png";
import Brands from "../assets/img/brands.png";


import ServiceCard from "../components/ContentCard/ServiceCard";
import { getProductList } from "../services/ProductServices";

const Home = () => {
  const section2Ref = useRef(null);
  const navigate = useNavigate();
  const [productList, setProductList] = React.useState([]);
  const handleNavigate = (path) => {
    navigate(path);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5, // Default setting for all screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 5,
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

  const settingsHedder = {
    dots: false,
    infinite: true,
    speed: 5000,
    arrows: false,
    slidesToShow: 1, // Default setting for all screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 5, // Show 5 slides on medium devices
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 768px and up)
        settings: {
          slidesToShow: 2, // Show 2 slides on small devices
        },
      },
      {
        breakpoint: 480, // Extra small devices (portrait phones, less than 480px)
        settings: {
          slidesToShow: 1, // Show 2 slides on extra small devices
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
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const leftVariants = {
    offscreen: {
      // x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const handleButtonClick = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
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
                  variant="h6"
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

      {/* Section 2 */}
      <section>
        <Grid
          item
          component={motion.div}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          sx={{ display: "flex", justifyContent: "start", p: [2, null, 10] }}
        >
          <motion.div variants={leftVariants}>
            <Typography variant="h2" fontWeight={700}>
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

        <Grid item p={5} sx={{ mt: [0, null, -10] }}>
          <Slider {...settings}>
            {/* <div >
              <ServiceCard product={product2} title={"Body Loation"} price={"850"} point={"4.00"} packet={"Bottel 45"} />
            </div> */}
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



      <Box
        sx={{
          margin: {
            xs: '20px',
            md: '120px',
          },
        }}
      >
        {/*How iT wORKS  */}
        <section>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h3" fontWeight={700}>
              HOW IT WORKS
            </Typography>
          </Box>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div variants={leftVariants}>
                {" "}
                <img src={Mobile} width={"350px"} alt="" />
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
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <motion.div variants={leftVariants}>
                <Box
                  sx={{
                    maxWidth: { lg: "500px" },
                    minWidth: { lg: "500px" },
                    margin: "0 auto",
                    mt: 10,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: [2, 2, 0],
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={500}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={500} mt={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                  </Typography>
                </Box>
                <Box p={1}>
                  <Button variant="contained" onClick={() => navigate("/signup")}>
                    Get Started
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </section>

        {/*Consumer */}
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Typography variant="h3" fontWeight={800}>
              Snap it for consumers
            </Typography>
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
                sx={{ display: "flex", justifyContent: "start", }}
              >
                <motion.div variants={leftVariants}>
                  <Box

                  >
                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >Earn amazing rewards and spend <br /> on your daily needs ! </Typography>

                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      mt={2}
                    // sx={{ ml: { xs: 0, md: 8 }, mt: 2 }}
                    >
                      As a Snap it customer, you can earn rewards from your favorite brands simply by scanning a QR code available on the product packaging. To get started, download the Snap It application by scanning the QR code or find us on the Google Play Store or Apple App Store.
                    </Typography>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                    // sx={{ ml: { xs: 0, md: 8 }, mt: 2 }}
                    >
                      With Snap It, you can:                 </Typography>
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
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <motion.div variants={leftVariants}>
                  {" "}
                  <img src={Man} width={"350px"} alt="" />
                </motion.div>
              </Grid>
            </Grid>
          </section>

        </section>


        {/*Brands */}
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              mt: 5,
            }}
          >
            <Typography variant="h3" fontWeight={700}>
              Snap it for brands
            </Typography>
          </Box>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ display: "flex", justifyContent: "start", mt: 2 }}
            >
              <motion.div variants={leftVariants}>
                {" "}
                <img src={Brands} width={"350px"} alt="" />
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
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <motion.div variants={leftVariants}>
                <Box
                  sx={{
                    maxWidth: { lg: "500px" },
                    minWidth: { lg: "500px" },
                    margin: "0 auto",
                    mt: 6,
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ ml: { xs: 0, md: 0 }, mt: { xs: 0, md: -5 } }}
                  >Know your customer and reward <br /> them for their loyalty.  </Typography>


                  <Typography variant="subtitle2" fontWeight={500} mt={2}>
                    Snap It is designed to bring you closer to your customers by providing valuable insights and enhancing your offerings. By joining Snap It, you gain access to a wealth of information about your customers, including their purchase patterns and preferences, allowing you to tailor your products and services more effectively. Snap it will provide you with,
                  </Typography>



                </Box>
                {/* <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => navigate("/merchants")}
                >
                  Learn More
                </Button> */}
              </motion.div>
            </Grid>


            <Box>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ ml: { xs: 0, md: 0 }, mt: 2 }}
              >
                With Snap It, you can:                 </Typography>
            </Box>
          </Grid>

          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              1.Comprehensive Customer Insights
            </Typography>
            <Typography variant="body1">
              Obtain feedback on your customers' shopping behaviors and preferences.
            </Typography>
            <Typography variant="body1">
              Analyze purchase patterns to identify trends and understand customer needs better.
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              2.A User-Friendly Interface
            </Typography>
            <Typography variant="body1">
              Snap It offers an intuitive and easy-to-use interface that allows you to create and manage reward programs seamlessly.
            </Typography>
            <Typography variant="body1">
              Reward your customers for their loyalty with customized offers and incentives.
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              3.Real-Time Feedback
            </Typography>
            <Typography variant="body1">
              Access real-time feedback from millions of customers through a straightforward dashboard.
            </Typography>
            <Typography variant="body1">
              Stay informed about customer opinions and quickly address any concerns or preferences.
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              4.Enhanced Customer Engagement
            </Typography>
            <Typography variant="body1">
              Strengthen your relationship with customers by responding to their feedback and adjusting your offerings accordingly.
            </Typography>
            <Typography variant="body1">
              Foster a sense of connection and loyalty by understanding and meeting customer expectations.
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              5.Deep Analytics for Informed Decisions
            </Typography>
            <Typography variant="body1">
              Utilize advanced analytics to identify patterns in customer loyalty and behavior.
            </Typography>
            <Typography variant="body1">
              Make data-driven decisions to optimize your marketing strategies and product offerings.
            </Typography>
            <Typography variant="body1">
              Gain insights into customer expectations to better anticipate their future needs.
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              6.Increased Customer Loyalty
            </Typography>
            <Typography variant="body1">
              Reward your loyal customers, encouraging repeat business and long-term loyalty.
            </Typography>
            <Typography variant="body1">
              Recognize and appreciate your customers' loyalty, enhancing their overall experience with your brand.
            </Typography>
          </Box>


          <Typography variant="h6" fontWeight={500} mt={2}>
            Snap It empowers you to make informed decisions, create impactful rewards programs, and build lasting relationships with your customers.

          </Typography>




        </section>


        {/*Merchants */}
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: 10
            }}
          >
            <Typography variant="h3" fontWeight={800}>
              Snap it for Merchants
            </Typography>
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
                sx={{ display: "flex", justifyContent: "start", }}
              >
                <motion.div variants={leftVariants}>
                  <Box

                  >
                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >Uberize your business by going digital !</Typography>

                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      mt={1}
                    // sx={{ ml: { xs: 0, md: 8 }, mt: 2 }}
                    >
                      Snap It merchants cater to customers' regular wants and needs. When customers collect sufficient Snap It rewards from their favorite brands, they can use these rewards to make purchases from Snap It merchants. These merchants range from utility service providers and mobile operators to supermarkets, department stores, and even local corner shops.                     </Typography>

                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ mt: 2 }}
                    // sx={{ ml: { xs: 0, md: 8 }, mt: 2 }}
                    >
                     Snap It offers an easy, self-registering interface for merchants to join the platform. By becoming a Snap It merchant, businesses can: </Typography>
                     <Box mt={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              1. Gain an additional method for collecting payments. 
            </Typography>
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              2. Increase their digital presence. 
            </Typography>

            <Typography variant="h6" fontWeight={600} gutterBottom>
              3. Appear in search results when Snap It customers look for specific products on the app. 
            </Typography>
         
            <Typography variant="h6" fontWeight={600} gutterBottom>
              4. Benefit from easy reporting and financial reconciliation with just a click of a button.  
            </Typography>
          </Box>


                
                  </Box>
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
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <motion.div variants={leftVariants}>
                  {" "}
                  <img src={Merchant} width={"350px"} alt="" />
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
