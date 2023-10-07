import { useOutletContext } from "react-router-dom";

export default function HostVansDetail() {
  const [currentVan, setCurrentVan] = useOutletContext();
  return (
    <div className="lg:w-4/5 bg-white mx-auto space-y-3 pt-5 px-5">
      <p>
        <span className="font-bold">Name: </span>
        <span>{currentVan.name}</span>
      </p>
      <p>
        <span className="font-bold">Category: </span>
        <span className="capitalize">{currentVan.type}</span>
      </p>
      <p>
        <span className="font-bold">Description: </span>
        <span>{currentVan.description}</span>
      </p>
      <p>
        <span className="font-bold">Visibility: </span>
        <span>Public</span>
      </p>
    </div>
  );
}
