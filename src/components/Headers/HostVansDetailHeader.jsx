import { NavLink } from "react-router-dom";

export default function HostVansDetailHeader() {
  return (
    <nav className="px-5 sm:px-10">
      <div className="lg:w-4/5 flex bg-white sm:px-10 px-5 mx-auto gap-5 text-sm sm:text-base sm:gap-10 text-[#4D4D4D] ">
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
      </div>
    </nav>
  );
}
