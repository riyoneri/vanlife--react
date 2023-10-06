import { useState, useEffect } from "react";
import { SmallCard } from "../../components/UI/Cards";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans))
      .catch((err) => console.log(err));
  }, []);

  let displayCards =
    data.length > 0 ? (
      data.map((van) => (
        <Link to={`/host/vans/${van.id}`} key={van.id}>
          <SmallCard {...van} />
        </Link>
      ))
    ) : (
      <p className="text-center font-bold text-xl col-span-full">Loading...</p>
    );
  return (
    <div className="mt-5 sm:px-10 px-5">
      <p className="font-bold text-xl sm:text-2xl">Your listed vans</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10">
        {displayCards}
      </div>
    </div>
  );
}
