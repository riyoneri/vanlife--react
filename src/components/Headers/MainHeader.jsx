import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

export default function MainHeader() {
  return (
    <nav className="flex bg-white justify-between px-5 sm:px-10 py-4 items-center">
      <Link to="/">
        <img src={logoImg} className="h-4" />
      </Link>
      <div className="flex text-[#4D4D4D] items-center gap-10">
        <Link
          to="/host"
          className="hover:underline underline-offset-2 hover:text-black"
        >
          Host
        </Link>
        <Link
          to="/about"
          className="hover:underline underline-offset-2 hover:text-black"
        >
          About
        </Link>
        <Link
          to="/vans"
          className="hover:underline underline-offset-2 hover:text-black"
        >
          Vans
        </Link>
      </div>
    </nav>
  );
}
