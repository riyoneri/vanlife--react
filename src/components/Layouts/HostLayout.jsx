import { Outlet } from "react-router-dom";

import HostHeader from "../Headers/HostHeader";

export default function HostLayout() {
  return (
    <div className="mt-5">
      <HostHeader />
      <Outlet/>
    </div>
  );
}
