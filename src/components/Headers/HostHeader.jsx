import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="flex gap-10 text-[#4D4D4D]">
      <NavLink
        to="/host"
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
        to="/host/income"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Income
      </NavLink>
      <NavLink
        to="/host/vans"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="/host/reviews"
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
