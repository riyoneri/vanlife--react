import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.png";

import Button from "../components/Button/Button";

export default function About() {
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <img src={aboutImg} className="object-cover h-40 sm:h-56 object-top" />
        <div className="flex px-5 text-sm sm:text-lg lg:text-xl sm:px-10 flex-col justify-between flex-1 my-5 sm:my-10">
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
          </p>
          <p className="grid gap-5 sm:mt-5">
            <span>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </span>
            <span>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </span>
          </p>
          <div className="bg-[#FFCC8D] mt-5 sm:mt-0 px-5 py-3 sm:py-5 rounded-md grid gap-2 justify-items-start">
            <p>Your destination is waiting. Your van is ready.</p>
            <Link>
              <Button color="dark">Explore our vans</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
