import Button from "../Button/Button";

export const LargeCard = ({
  imageUrl,
  name: title,
  price,
  type,
  imageStyle,
  cardStyle,
}) => {
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
};

export const SmallCard = ({ imageUrl, name: title, price }) => {
  return (
    <div className="flex bg-white px-5 py-3 rounded-md items-center gap-5">
      <img src={imageUrl} className="h-14 sm:h-16 md:h-24 rounded-md" />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{price}/day</p>
      </div>
    </div>
  );
};
