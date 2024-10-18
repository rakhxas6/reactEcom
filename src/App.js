import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/pages/Home/index";
import About from "./components/pages/About/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listing from "./components/pages/Listing/Listing";
import Footer from "./components/footer/footer";
import NotFound from "./components/pages/notFound/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/about" element={<About />} />
          <Route exact={true} path="/listing" element={<Listing />} />
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
