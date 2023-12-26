import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shipping from "./pages/Shipping";
import Tracking from "./pages/tracking";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='tracking' element={<Tracking />} />
          <Route path='blog' element={<Blog />} />
          <Route path='pages' element={<Pages />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      <Footer />   
    </BrowserRouter>
  );
}

export default App;
