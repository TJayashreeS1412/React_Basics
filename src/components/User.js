import { useState } from "react";

const User = ({ name, location }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="user-card">
      <h4>Name:{name}</h4>
      <p>location: {location}</p>
      <p>contact: @jsanthoshithota</p>
      <p>count: {counter}</p>
      <button
        className="counter-button"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        className="counter-button"
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
      <button
        className="counter-button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default User;
