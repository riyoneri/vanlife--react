import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VansDetail, { loader as VanDetailLoader } from "./pages/Vans/VansDetail";
import Host from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/HostVans/HostVans";
import HostVansDetail from "./components/HostVansDetails/HostVansInfo";
import HostVansDetailPhotos from "./components/HostVansDetails/HostVansDetailPhotos";
import HostVansDetailPricing from "./components/HostVansDetails/HostVansDetailPricing";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

// Components
import Layout from "./components/Layouts/MainLayout";
import HostLayout from "./components/Layouts/HostLayout";
import HostVansDetailLayout, {
  loader as hostVanDetailsLoader,
} from "./components/Layouts/HostVansDetailLayout";

import { requireAuth } from "./assets/utils/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="vans">
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path=":id" element={<VansDetail />} loader={VanDetailLoader} />
      </Route>

      <Route
        path="host"
        loader={async ({ request }) => await requireAuth(request)}
        element={<HostLayout />}
      >
        <Route index element={<Host />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" loader={hostVansLoader} element={<HostVans />} />
        <Route
          path="vans/:id"
          loader={hostVanDetailsLoader}
          element={<HostVansDetailLayout />}
        >
          <Route index element={<HostVansDetail />} />
          <Route path="pricing" element={<HostVansDetailPricing />} />
          <Route path="photos" element={<HostVansDetailPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>

      <Route
        path="login"
        loader={loginLoader}
        action={loginAction}
        element={<Login />}
      />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
