import { useState, useEffect } from "react";

import Card from "../components/UI/Card";
import Button from "../components/Button/Button";

export default function Vans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);

  const cardDisplay = data.map((item) => (
    <Card style="max-h-[25rem] sm:h-auto" key={item.id} {...item} buttonColor="red" />
  ));

  return (
    <div className="px-5 sm:px-10 mb-10">
      <h1 className="text-xl sm:text-3xl font-bold mt-10">Explore our van options</h1>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-2 sm:gap-5 mr-5 sm:mr-0">
          <Button style="sm:px-5 sm:py-2 sm:text-base text-sm px-2">Simple</Button>
          <Button style="sm:px-5 sm:py-2 sm:text-base text-sm px-2">Luxury</Button>
          <Button style="sm:px-5 sm:py-2 sm:text-base text-sm px-2">Rugged</Button>
        </div>
        <button className="underline underline-offset-2">Clear filters</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10">{cardDisplay}</div>
    </div>
  );
}
