import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import arrowLeft from "../../assets/icons/arrow-left.jpg";
import Button from "../../components/Button/Button";

export default function HostVansDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="px-5 sm:px-10 mb-10">
      <div className="text-xl mt-10 flex">
        <Link
          to="/vans"
          className="flex gap-2 underline underline-offset-4 items-center"
        >
          <img src={arrowLeft} />
          <span>Explore our van options</span>
        </Link>
      </div>
      {van ? (
        <div className="flex flex-col bg-white p-3 gap-3 lg:w-3/4 mx-auto items-start mt-10">
          <div className="flex items-center gap-5">
            <img src={van.imageUrl} className="sm:h-80 h-32 w-fit rounded-lg" />
            <div className="sm:space-y-3 space-y-2">
              <Button color={van.type} style="capitalize">
                {van.type}
              </Button>
              <p className="font-bold sm:text-xl">{van.name}</p>
              <p className="font-bold text-sm sm:text-base">
                <span>${van.price}</span>
                <span className="font-normal text-sm"> /day</span>
              </p>
            </div>
          </div>
          <p>{van.description}</p>
          <Link className="w-full">
            <Button
              style="md:w-full sm:w-auto w-full rounded-sm"
              color="orange"
            >
              Rent this van
            </Button>
          </Link>
        </div>
      ) : (
        <p className="mt-5 text-center font-bold">Loading...</p>
      )}
    </div>
  );
}
