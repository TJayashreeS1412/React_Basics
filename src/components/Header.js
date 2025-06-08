import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //flex space-between border border-solid border-black"
  return (
    <div className="header ">
      <div className="logo-container">
        <img className="w-[150px]" src={LOGO_URL} />
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
