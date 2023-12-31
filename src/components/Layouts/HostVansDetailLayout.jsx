import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import HostVansDetailHeader from "../Headers/HostVansDetailHeader";
import HostVansDetail from "../../pages/HostVans/HostVansDetail";

import { getHostVans } from "../../assets/utils/api";
import { requireAuth } from "../../assets/utils/auth";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
}

export default function HostVansDetailLayout() {
  const vans = useLoaderData();

  const [van, setVan] = useState(vans[0]);
  return (
    <>
      {van ? (
        <>
          <HostVansDetail {...van} />
          <HostVansDetailHeader />
          <div className="px-5 sm:px-10">
            <Outlet context={[vans, setVan]} />
          </div>
        </>
      ) : (
        <p className="mt-5 text-center font-bold my-10">Loading...</p>
      )}
    </>
  );
}
