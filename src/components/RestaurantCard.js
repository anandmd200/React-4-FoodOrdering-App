import { image_CDN } from "../constant";

const RestaurantCard = ({cloudinaryImageId,name,costForTwoString,cuisines}) => {
  return (
    <div className="mt-2 m-2 w-52 h-80 shadow-lg rounded-lg text-center">
      <img className="rounded-md" src={image_CDN + cloudinaryImageId} alt="Card Image" />
      <span className="font-bold mt-2">{name}</span>
      <h3>{costForTwoString}</h3>
      <h4>{cuisines.join(", ")}</h4>
      {/* <h2>{avgRating}</h2> */}
    </div>
  );
};

export default RestaurantCard;
