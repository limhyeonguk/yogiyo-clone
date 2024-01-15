// components/RestaurantBox.js
import React from "react";

function RestaurantBox({ restaurant }) {
  return (
    <div
      className="restaurant-box"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + restaurant.image})`,
      }}
    >
      <div className="overlay">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </div>
    </div>
  );
}

export default RestaurantBox;
