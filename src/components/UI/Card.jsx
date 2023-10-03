import Button from "../Button/Button";

export default function Card({
  imageUrl,
  name: title,
  price,
  type,
  style,
}) {
  console.log(imageUrl, price);
  return (
    <div>
      <img src={imageUrl} className={`mx-auto rounded-lg ${style}`} />
      <p className="font-semibold text-xl flex justify-between">
        <span>{title}</span>
        <span className="grid">
          <span>{price}</span>
          <span className="text-sm font-normal">/day</span>
        </span>
      </p>
      <Button color={type} style="capitalize py-1">
        {type}
      </Button>
    </div>
  );
}
