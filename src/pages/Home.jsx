import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-bottom h-screen">
      <Navigation />
      <div className="h-hero-screen bg-red-500 flex flex-col">
        <p>You got the travel plans, we got the travel vans.</p>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="bg-[#FF8C38]">Find your van</Link>
      </div>
    </div>
  );
}
