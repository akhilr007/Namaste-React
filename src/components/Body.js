import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  let [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurants(
              restaurants.filter((restaurant) => restaurant.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
