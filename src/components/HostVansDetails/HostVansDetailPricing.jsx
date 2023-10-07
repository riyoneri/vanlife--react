import { useOutletContext } from "react-router-dom";

export default function HostVansDetailPricing() {
  const [currentVan, setCurrentVan] = useOutletContext();
  return (
    <div className=" bg-white mx-auto space-y-3 py-10 px-5">
      <p className="sm:text-sm text-sm">
        <span className="font-bold sm:text-xl">{currentVan.price}</span>
        <span> / day</span>
      </p>
    </div>
  );
}
