import { Outlet } from "react-router-dom";
import Header from "../Headers/MainHeader";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
