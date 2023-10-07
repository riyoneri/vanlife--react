import { useOutletContext } from "react-router-dom";

export default function HostVansDetail() {
  const [van, setVan] = useOutletContext();
  return (
    <div className="px-10 sm:px-5">
      <div className="bg-white p-3 gap-3 lg:w-3/4 mx-auto">
        {van.name}
      </div>
    </div>
  );
}
