import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-name">{name}</h1>
      <p className="menu-details">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {itemCards?.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
