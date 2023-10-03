import { Link } from "react-router-dom";
import arrowLeft from "../assets/icons/arrow-left.jpg";

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
      <div className="flex flex-col gap-10">
        <img src={obe.imageUrl} />
      </div>
    </div>
  );
}
