import { SmallCard } from "../../components/UI/Cards";
import { Link, useLoaderData } from "react-router-dom";

import "../../assets/data/server";

import { getHostVans } from "../../assets/utils/api";

export function loader() {
  return getHostVans();
}

export default function HostVans() {
  const data = useLoaderData();

  let displayCards = data.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id}>
      <SmallCard {...van} />
    </Link>
  ));

  return (
    <div className="mt-5 sm:px-10 px-5">
      <p className="font-bold text-xl sm:text-2xl">Your listed vans</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10">
        {displayCards}
      </div>
    </div>
  );
}
