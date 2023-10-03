import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

export default function Navigation() {
  return (
    <nav className="flex bg-white justify-between px-5 sm:px-10 py-4 items-center">
      <Link to="/">
        <img src={logoImg} className="h-4" />
      </Link>
      <div className="flex text-[#4D4D4D] items-center gap-10">
        <Link to="/about">About</Link>
        <Link>Vans</Link>
      </div>
    </nav>
  );
}
