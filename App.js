import React from "react"; //refers to react inside our node modules.
import ReactDOM from "react-dom/client";
import { resList } from "./mockData";
/**
 *  Header
 *    -logo
 *    -navItems
 *  Body
 *    -search
 *    -cards contaienr
 *      -restaurant card
 *        -img
 *        -restaurant name
 *        -cuisine
 *        - stars
 *        -delivery timeline
 *  Footer
 *    -copyright
 *    -links
 *    -address
 *    -contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.shutterstock.com/image-vector/chocolate-handwritten-text-isolated-on-260nw-1987051664.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search{/* <input type="search"></input> */}</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
        {/* {RestaurantCard()} // cries if props are not passed and method epxects*/}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    area,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="res-img"
      />
      <h3>{name} </h3>
      <h5>{area} </h5>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <ul>
          <li>CopyRight</li>
          <li>Links</li>
          <li>Address</li>
          <li>Contact us </li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
