import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable - super powerful variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const arr = useState([]);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //fetch is given by browsers (JS Engine)
    const json = await data.json();
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
    // console.log("resList.data", resList);
  };
  // whenever state variable update, it rerenders the component and its children. (reconciliation cycle)
  console.log("body rendered");
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
            console.log("SearchText", searchText);
            //filter the restaurant cards and update UI
            const filteredList = listOfRestaurants.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log("filteredList", filteredList);
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
              (restaurant) => restaurant.data.avgRating > 4
            );
            // listOfRestaurants = filteredList;
            setFilteredRestaurants(filteredList);
            console.log("listOfRestaurants", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
        {/* {RestaurantCard()} // cries if props are not passed and method epxects*/}
      </div>
    </div>
  );
};

export default Body;
