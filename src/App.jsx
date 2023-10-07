import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VansDetail from "./pages/Vans/VansDetail";
import Host from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/HostVans/HostVans";
import HostVansDetail from "./components/HostVansDetails/HostVansInfo";
import HostVansDetailPhotos from "./components/HostVansDetails/HostVansDetailPhotos";
import HostVansDetailPricing from "./components/HostVansDetails/HostVansDetailPricing";

// Components
import Layout from "./components/Layouts/MainLayout";
import HostLayout from "./components/Layouts/HostLayout";
import HostVansDetailLayout from "./components/Layouts/HostVansDetailLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VansDetail />} />
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Host />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetailLayout />}>
              <Route index element={<HostVansDetail />} />
              <Route path="pricing" element={<HostVansDetailPricing />} />
              <Route path="photos" element={<HostVansDetailPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
