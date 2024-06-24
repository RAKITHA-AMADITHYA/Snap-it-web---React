import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import Loader from 'react-loaders';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeProvider from "./theme";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./layouts/Layout"));
const Error404 = lazy(() => import("./components/error/Error1"));
const Brands = lazy(() => import("./pages/Brands"));
const Merchants = lazy(() => import("./pages/Merchant"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const CustomersSignup = lazy(() => import("./pages/CustomersSignup"));
const PublicSignup = lazy(() => import("./pages/PublicSignup"));
const Customer = lazy(() => import("./pages/Customer"));
const BrandSignup = lazy(() => import("./pages/BrandSignup"));
const MerchantSignup = lazy(() => import("./pages/MerchantSignup"));


function SuspenseWrapper({ children }) {
  return (
    <Suspense
      fallback={
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Loader type="line-scale" color="#f2b51c" active />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}



function App() {
  return (
   
    <ThemeProvider>
      <Router>
        <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route element={<Layout />}>
        <Route path="/" element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
        <Route path="/brands" element={<SuspenseWrapper><Brands /></SuspenseWrapper>} />
        <Route path="/merchants" element={<SuspenseWrapper><Merchants /></SuspenseWrapper>} />
        <Route path="/about-us" element={<SuspenseWrapper><AboutUs /></SuspenseWrapper>} />
        <Route path="/contact-us" element={<SuspenseWrapper><Contact /></SuspenseWrapper>} />
        <Route path="/customer-signup" element={<SuspenseWrapper><CustomersSignup /></SuspenseWrapper>} />
        <Route path="/signup" element={<SuspenseWrapper><PublicSignup /></SuspenseWrapper>} />
        <Route path="/customer" element={<SuspenseWrapper><Customer /></SuspenseWrapper>} />
        <Route path="/brand-signup" element={<SuspenseWrapper><BrandSignup /></SuspenseWrapper>} />
        <Route path="/merchant-signup" element={<SuspenseWrapper><MerchantSignup /></SuspenseWrapper>} />

        
        </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
