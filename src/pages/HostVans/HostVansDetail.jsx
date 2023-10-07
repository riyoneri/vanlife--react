import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import arrowLeft from "../../assets/icons/arrow-left.jpg";
import Button from "../../components/Button/Button";

export default function HostVansDetail({
  imageUrl,
  type,
  price,
  description,
  name,
}) {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="px-5 sm:px-10">
      <div className="text-xl mt-10 flex">
        <Link
          to=".."
          className="flex gap-2 underline underline-offset-4 items-center"
        >
          <img src={arrowLeft} alt="Arrow left" />
          <span>Explore our van options</span>
        </Link>
      </div>
      <div className="flex flex-col bg-white p-3 gap-3 lg:w-4/5 mx-auto items-start mt-10">
        <div className="flex items-center gap-5">
          <img
            src={imageUrl}
            alt="Van picture"
            className="sm:h-80 h-32 w-fit rounded-lg"
          />
          <div className="sm:space-y-3 space-y-2">
            <Button color={type} style="capitalize">
              {type}
            </Button>
            <p className="font-bold sm:text-xl">{name}</p>
            <p className="font-bold text-sm sm:text-base">
              <span>${price}</span>
              <span className="font-normal text-sm"> /day</span>
            </p>
          </div>
        </div>
        <p>{description}</p>
        <Link className="w-full">
          <Button style="md:w-full sm:w-auto w-full rounded-sm" color="orange">
            Rent this van
          </Button>
        </Link>
      </div>
    </div>
  );
}
