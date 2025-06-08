import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("header rendered");

  //if no dependency array, will be called on initial render and every rerendered based on state changes.
  useEffect(() => {
    console.log("rendered everytime");
  });

  //if empty dependency array, will be called only on initial component render only
  useEffect(() => {
    console.log("rendered only once []");
  }, []);

  //if btnNameReact in dependency array, will be called on initial render and everytime btnNameReact is updated.
  useEffect(() => {
    console.log();
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* will not reload, super fast */}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {/* reloads the page */}
            <a href="/contactUs">Contact Us</a>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName = btnName === "Logout" ? "Login" : "Logout";
              setBtnNameReact(btnNameReact === "Logout" ? "Login" : "Logout");
              console.log(btnName, btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
