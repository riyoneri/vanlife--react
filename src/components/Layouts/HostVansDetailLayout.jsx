import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import HostVansDetailHeader from "../Headers/HostVansDetailHeader";
import HostVansDetail from "../../pages/HostVans/HostVansDetail";

export default function HostVansDetailLayout() {
  const [van, setVan] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {van ? (
        <>
          <HostVansDetail {...van} />
          <HostVansDetailHeader />
          <Outlet context={[van, setVan]} />
        </>
      ) : (
        <p className="mt-5 text-center font-bold my-10">Loading...</p>
      )}
    </>
  );
}
