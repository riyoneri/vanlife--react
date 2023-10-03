import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

// Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import VansDetail from "./pages/VansDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
