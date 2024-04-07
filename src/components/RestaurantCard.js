import { RES_CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_CDN_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4 style={{backgroundColor: "yellow"}}>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
