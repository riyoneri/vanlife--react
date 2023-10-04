import { Link } from "react-router-dom";
import arrowLeft from "../assets/icons/arrow-left.jpg";
import Button from "../components/Button/Button";

const obe = {
  id: "2",
  name: "Beach Bum",
  price: 80,
  description:
    "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
  imageUrl:
    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
  type: "rugged",
};

export default function VansDetail() {
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
      <div className="flex flex-col gap-3 sm:w-3/4 md:w-1/2 mx-auto items-start mt-10">
        <img src={obe.imageUrl} className="h-80 w-fit rounded-lg" />
        <Button color={obe.type} style="capitalize mt-3">
          {obe.type}
        </Button>
        <p className="font-bold text-xl">{obe.name}</p>
        <p className="font-bold">
          <span>$60</span>
          <span className="font-normal text-sm"> /day</span>
        </p>
        <p className="">
          The Modest Explorer is a van designed to get you out of the house and
          into nature. This beauty is equipped with solar panels, a composting
          toilet, a water tank and kitchenette. The idea is that you can pack up
          your home and escape for a weekend or even longer!
        </p>
        <Link className="w-full">
        <Button style="md:w-full sm:w-auto w-full rounded-sm" color="orange">Rent this van</Button>
        </Link>
      </div>
    </div>
  );
}
