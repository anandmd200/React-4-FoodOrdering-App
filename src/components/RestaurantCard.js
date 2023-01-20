import { image_CDN } from "../constant";

const RestaurantCard = ({cloudinaryImageId,name,costForTwoString,cuisines}) => {
  return (
    <div className="card">
      <img src={image_CDN + cloudinaryImageId} alt="Card Image" />
      <h2>{name}</h2>
      <h3>{costForTwoString}</h3>
      <h4>{cuisines.join(", ")}</h4>
      {/* <h2>{avgRating}</h2> */}
    </div>
  );
};

export default RestaurantCard;
