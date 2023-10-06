import { Outlet } from "react-router-dom";
import HostVansDetailHeader from "../Headers/HostVansDetailHeader";
import HostVansDetail from "../../pages/HostVans/HostVansDetail";

export default function HostVansDetailLayout() {
  return (
    <>
      <HostVansDetail />
      <HostVansDetailHeader />
      <Outlet />
    </>
  );
}
