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

  let displayCards = data.map((van) => (
    <Link to={`/host/vans/${van.id}`}>
      <SmallCard {...van} key={van.id} />
    </Link>
  ));
  console.log(displayCards);
  return (
    <div className="mt-5 sm:px-10 px-5">
      <p className="font-bold text-2xl">Your listed vans</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10">
        {displayCards}
      </div>
    </div>
  );
}
