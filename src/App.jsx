import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import Loader from 'react-loaders';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeProvider from "./theme";
import Brands from './pages/Brands';
import Merchants from './pages/Merchant';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import CustomersSignup from './pages/CustomersSignup';
import PublicSignup from './pages/PublicSignup';
import Customer from './pages/Customer';
import BrandSignup from './pages/BrandSignup';
import MerchantSignup from './pages/MerchantSignup';

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./layouts/Layout"));
const Error1 = lazy(() => import("./components/error/Error1"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <Loader type="line-scale" color="#0070C0" active />
            </div>
          }
        >
          <Routes>
            <Route path="/*" element={<Error1 />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/merchants" element={<Merchants />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/customer-signup" element={<CustomersSignup />} />
              <Route path="/signup" element={<PublicSignup />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/brand-signup" element={<BrandSignup />} />
              <Route path="/merchant-signup" element={<MerchantSignup />} />







              

              


           
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
