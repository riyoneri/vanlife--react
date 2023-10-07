import { NavLink } from "react-router-dom";

export default function HostVansDetailHeader() {
  return (
    <nav className="flex gap-5 text-sm sm:text-base sm:gap-10 text-[#4D4D4D] sm:px-10 px-5 lg:w-3/4 mx-auto bg-white ">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Details
      </NavLink>
      <NavLink
        to="pricing"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        className={({ isActive }) =>
          `hover:underline underline-offset-2 hover:text-black ${
            isActive ? "underline text-black" : ""
          }`
        }
      >
        Photos
      </NavLink>
    </nav>
  );
}
