import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

export default function MainHeader() {
  return (
    <nav className="flex bg-white justify-between px-5 sm:px-10 py-4 items-center">
      <NavLink to="/">
        <img src={logoImg} className="h-4" />
      </NavLink>
      <div className="flex text-[#4D4D4D] font-semibold items-center gap-10">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            `hover:underline underline-offset-2 hover:text-black ${
              isActive ? "underline text-black" : ""
            }`
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:underline underline-offset-2 hover:text-black ${
              isActive ? "underline text-black" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            `hover:underline underline-offset-2 hover:text-black ${
              isActive ? "underline text-black" : ""
            }`
          }
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
}
