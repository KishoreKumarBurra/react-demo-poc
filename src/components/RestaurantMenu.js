import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { title } =
  resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;  
  //resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  const { itemCards } =
  resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;  
  //resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <h3>
        {title}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
