// components/RestaurantList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "전체보기", name: "전체보기", image: "/images/category-01.png" },
  { id: "주문", name: "1인분 주문", image: "/images/category-onedish.png" },
  { id: "프랜차이즈", name: "프랜차이즈", image: "/images/category-10.png" },
  { id: "치킨", name: "치킨", image: "/images/category-02.png" },
  { id: "피자양식", name: "피자.양식", image: "/images/category-03.png" },
  { id: "중국집", name: "중국집", image: "/images/category-04.png" },
  { id: "한식", name: "한식", image: "/images/category-05.png" },
  { id: "일식돈까스", name: "일식.돈까스", image: "/images/category-06.png" },
  { id: "족발보쌈", name: "족발.보쌈", image: "/images/category-07.png" },
  { id: "야식", name: "야식", image: "/images/category-08.png" },
  { id: "분식", name: "분식", image: "/images/category-09.png" },
  { id: "카페디저트", name: "카페.디저트", image: "/images/category-11.png" },
];

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // 가짜 데이터로 초기화
    setRestaurants(categories);
  }, []);

  return (
    <div
      className="restaurant-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {restaurants.map((restaurant) => (
        <Link
          key={restaurant.id}
          to={{
            pathname: `/${restaurant.name}`,
            state: { category: restaurant.name },
          }}
          style={{ textDecoration: "none" }}
        >
          <div
            className="restaurant-box"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + restaurant.image
              })`,
              backgroundSize: "cover",
              width: "242.5px",
              height: "220px",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <div
              className="text-container"
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                padding: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <h3 style={{ margin: "0" }}>{restaurant.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RestaurantList;
