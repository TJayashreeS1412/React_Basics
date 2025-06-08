import RestaurantCard, { withEasyLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constants";

const Body = () => {
  //local state variable - super powerful variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const arr = useState([]);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardEasy = withEasyLabel(RestaurantCard);

  //if empty dependency array, will be called only on first or initial component render
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(RES_URL); //fetch is given by browsers (JS Engine)
      const json = await data.json();

      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  // whenever state variable update, it rerenders the component and its children. (reconciliation cycle)
  console.log("body rendered");

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }
  //Codnitional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button
          onClick={() => {
            //searchText
            //filter the restaurant cards and update UI
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => res.info.avgRating > 4
            );
            // listOfRestaurants = filteredList;
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardEasy resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
        {/* {RestaurantCard()} // cries if props are not passed and method epxects*/}
      </div>
    </div>
  );
};

export default Body;
