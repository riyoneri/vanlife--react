import Button from "../Button/Button";

export default function Card({
  imageUrl,
  name: title,
  price,
  type,
  buttonColor,
}) {
  console.log(imageUrl, price);
  return (
    <div>
      <img src={imageUrl} className="rounded-lg" />
      <p className="font-semibold text-xl flex justify-between">
        <span>{title}</span>
        <span className="grid">
          <span>{price}</span>
          <span className="text-sm font-normal">/day</span>
        </span>
      </p>
      <Button color={buttonColor} style="px-10">{type}</Button>
    </div>
  );
}
