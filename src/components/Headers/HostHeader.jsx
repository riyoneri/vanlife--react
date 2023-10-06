import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="flex gap-5 text-sm sm:text-base sm:gap-10 text-[#4D4D4D] sm:px-10 px-5">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Reviews
      </NavLink>
    </nav>
  );
}
