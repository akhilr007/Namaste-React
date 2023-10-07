import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../utils/constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList;
};

export default useRestaurantList;
