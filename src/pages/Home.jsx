import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-bottom">
      <div className="h-screen bg-blend-overlay bg-black/50 text-white items-center justify-center gap-10 flex flex-col px-5 sm:px-10">
        <p className="text-xl sm:text-4xl lg:text-5xl font-bold">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="lg:text-xl">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="bg-[#FF8C38] self-stretch sm:self-center text-center sm:px-32 py-2 rounded-sm font-semibold">
          Find your van
        </Link>
      </div>
    </div>
  );
}
