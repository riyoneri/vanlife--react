import { useOutletContext } from "react-router-dom";

export default function HostVansDetailPhotos() {
  const [currentVan, setCurrentVan] = useOutletContext();
  console.log(currentVan)
  return (
    <div className="bg-white px-5 lg:w-4/5 mx-auto py-4 grid grid-cols-2 sm:grid-cols-4">
      <img className="h-20 sm:h-32 rounded-md object-cover" src={currentVan.imageUrl} />
    </div>
  );
}
