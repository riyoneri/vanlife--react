import Button from "../Button/Button";

export default function Card({
  imageUrl,
  name: title,
  price,
  type,
  imageStyle,
  cardStyle,
}) {
  console.log(imageUrl, price);
  return (
    <div className={cardStyle}>
      <img src={imageUrl} className={`mx-auto rounded-lg ${imageStyle}`} />
      <p className="font-semibold object-cover text-xl flex justify-between">
        <span>{title}</span>
        <span>
          <span>{price}</span>
          <span className="text-sm font-normal"> /day</span>
        </span>
      </p>
      <Button color={type} style="capitalize py-1">
        {type}
      </Button>
    </div>
  );
}
