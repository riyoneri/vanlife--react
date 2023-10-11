import { Link, useLocation, useLoaderData } from "react-router-dom";

import arrowLeft from "../../assets/icons/arrow-left.jpg";
import Button from "../../components/Button/Button";

import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VansDetail() {
  const location = useLocation();

  const van = useLoaderData();

  return (
    <div className="px-5 sm:px-10 mb-10">
      <div className="text-xl mt-10 flex">
        <Link
          to={`..?${location?.state?.search || ""}`}
          className="flex gap-2 underline underline-offset-4 items-center"
        >
          <img src={arrowLeft} />
          <span>Back to {`${location?.state?.type || "all"}`} vans</span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 sm:w-3/4 md:w-1/2 mx-auto items-start mt-10">
        <img src={van.imageUrl} className="h-80 w-fit rounded-lg" />
        <Button color={van.type} style="capitalize mt-3">
          {van.type}
        </Button>
        <p className="font-bold text-xl">{van.name}</p>
        <p className="font-bold">
          <span>${van.price}</span>
          <span className="font-normal text-sm"> /day</span>
        </p>
        <p>{van.description}</p>
        <Link className="w-full">
          <Button style="md:w-full sm:w-auto w-full rounded-sm" color="orange">
            Rent this van
          </Button>
        </Link>
      </div>
    </div>
  );
}
