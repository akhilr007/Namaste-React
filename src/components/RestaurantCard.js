import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRatingString,
    sla: { deliveryTime },
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="restaurant-name">{name}</h3>
      <h4 className="restaurant-rating">★ {avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <p className="restaurant-description">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
