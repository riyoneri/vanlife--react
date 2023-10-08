import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { LargeCard } from "../../components/UI/Cards";
import Button from "../../components/Button/Button";

export default function Vans() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);

  const cardDisplay = data
    .filter((item) =>
      typeFilter ? item.type === typeFilter.toLocaleLowerCase() : true
    )
    .map((item) => (
      <Link to={item.id} key={item.id}>
        <LargeCard
          imageStyle="max-h-[25rem] w-full sm:h-auto"
          cardStyle="space-y-2"
          {...item}
          buttonColor="red"
        />
      </Link>
    ));

  return (
    <div className="px-5 sm:px-10 mb-10">
      <h1 className="text-xl sm:text-3xl font-bold mt-10">
        Explore our van options
      </h1>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-2 sm:gap-5">
          <span
            onClick={() => setSearchParams({ type: "simple" })}
            className="hover:bg-[#E17654] bg-[#FFEAD0] rounded-md"
          >
            <Button style="sm:px-5 sm:py-2 sm:text-base text-sm px-2 bg-transparent hover:text-white">
              Simple
            </Button>
          </span>
          <span
            onClick={() => setSearchParams({ type: "luxury" })}
            className="hover:bg-[#161616] bg-[#FFEAD0] rounded-md"
          >
            <Button style="sm:px-5 sm:py-2 sm:text-base text-sm px-2 bg-transparent hover:text-white">
              Luxury
            </Button>
          </span>
          <span
            onClick={() => setSearchParams({ type: "rugged" })}
            className="hover:bg-[#115E59] bg-[#FFEAD0] rounded-md"
          >
            <Button style="sm:px-5 sm:py-2 sm:text-base text-sm px-2 bg-transparent hover:text-white">
              Rugged
            </Button>
          </span>
        </div>
        <span onClick={() => setSearchParams({})}>
          <button className="underline underline-offset-2 text-sm sm:text-base">
            Clear filters
          </button>
        </span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10">
        {cardDisplay}
      </div>
    </div>
  );
}
