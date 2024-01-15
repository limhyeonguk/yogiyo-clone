// src/components/Board.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Board.css"; // CSS 파일을 가져옵니다.
import { useNavigate } from "react-router-dom";

function Board() {
  // URL 파라미터에서 location 가져오기
  const { categoryName: selectedCategoryFromLink } = useParams();
  // const { state: locationState } = useLocation();
  const navigate = useNavigate(); // history 객체 추가

  // 게시판의 컨텐츠와 정렬 기준을 관리하는 state
  const [boardContent, setBoardContent] = useState([]);
  const [sortField, setSortField] = useState("content");
  const [, setCategoryName] = useState("전체보기");
  // 선택한 음식점의 카테고리를 표시하는 state
  const [selectedCategory, setSelectedCategory] = useState("");

  // 음식점 카테고리에 대한 옵션을 객체로 관리
  const categoryOptions = {
    전체보기: "전체보기",
    한명주문: "1인분 주문",
    프랜차이즈: "프랜차이즈",
    치킨: "치킨",
    피자양식: "피자.양식",
    중국집: "중국집",
    한식: "한식",
    일식돈까스: "일식.돈까스",
    족발보쌈: "족발.보쌈",
    야식: "야식",
    분식: "분식",
    카페디저트: "카페.디저트",
  };

  // 정렬 기준에 대한 옵션을 객체로 관리
  const sortOptions = {
    content: "기본 정렬순",
    rating: "별점순",
    reviews: "리뷰 많은순",
    minOrderAmount: "최소 주문금액 순",
    distance: "거리 순",
    deliveryTime: "배달 시간 순",
  };

  // 컴포넌트가 마운트될 때와 정렬 기준이 변경될 때마다 실행
  useEffect(() => {
    const decodedCategory = decodeURIComponent(selectedCategoryFromLink);
    const selectedCategoryName = categoryOptions[decodedCategory];

    setCategoryName(selectedCategoryName);
    setSelectedCategory(decodedCategory);

    // 가짜 데이터를 이용한 음식점 정보
    const fakeData = [
      {
        content: "롯데리아",
        category: ["프랜차이즈", "전체보기", "1인분 주문", "치킨"],
        ratings: [4.1],
        reviews: 1918,
        comments: 1483,
        yogiyoPayment: true, // 결제 가능 여부
        minOrderAmount: 10000, // 최소 주문 금액
        deliveryTime: "30~35분", // 배달 소요 시간
        distance: 1.2,
        image: "/images/롯데리아_로고_(2).png",
      },
      {
        content: "이삭토스트",
        category: ["프랜차이즈", "전체보기", "분식", "1인분 주문"],
        ratings: [4.5],
        reviews: 18,
        comments: 16,
        yogiyoPayment: true, // 결제 가능 여부
        minOrderAmount: 15000, // 최소 주문 금액
        deliveryTime: "40~45분", // 배달 소요 시간
        distance: 1,
        image: "/images/이삭토스트.png",
      },
      {
        content: "도미노피자",
        category: ["프랜차이즈", "피자.양식", "전체보기"],
        ratings: [4.8],
        reviews: 120,
        comments: 95,
        yogiyoPayment: true,
        minOrderAmount: 12000,
        deliveryTime: "50~55분", // 배달 소요 시간
        distance: 3,
        image: "/images/도미노피자_로고_(2).png",
      },
      {
        content: "피자헛",
        category: ["프랜차이즈", "피자.양식", "전체보기"],
        ratings: [4.5],
        reviews: 65,
        comments: 50,
        yogiyoPayment: true,
        minOrderAmount: 21000,
        deliveryTime: "60~65분", // 배달 소요 시간
        distance: 2.5,
        image: "/images/피자헛.png",
      },
      {
        content: "KFC",
        category: ["프랜차이즈", "치킨", "야식", "전체보기", "1인분 주문"],
        ratings: [4.7],
        reviews: 82,
        comments: 70,
        yogiyoPayment: true,
        minOrderAmount: 12000,
        deliveryTime: "70~75분", // 배달 소요 시간
        distance: 2.9,
        image: "/images/kfc.jpg",
      },
      {
        content: "고돼지",
        category: ["한식", "야식", "전체보기"],
        ratings: [4.7],
        reviews: 95,
        comments: 80,
        yogiyoPayment: true,
        minOrderAmount: 14000,
        deliveryTime: "30~35분", // 배달 소요 시간
        distance: 4,
        image: "/images/고돼지.jpg",
      },
      {
        content: "미스터피자",
        category: ["프랜차이즈", "피자.양식", "전체보기"],
        ratings: [4.6],
        reviews: 120,
        comments: 100,
        yogiyoPayment: true,
        minOrderAmount: 19000,
        deliveryTime: "40~45분", // 배달 소요 시간
        distance: 6.8,
        image: "/images/미스터피자.png",
      },
      {
        content: "베스킨라빈스",
        category: ["프랜차이즈", "카페.디저트", "전체보기"],
        ratings: [4.7],
        reviews: 58,
        comments: 45,
        yogiyoPayment: true,
        minOrderAmount: 13500,
        deliveryTime: "10~15분", // 배달 소요 시간
        distance: 1.1,
        image: "/images/베스킨라빈스.png",
      },
      {
        content: "에그드랍",
        category: ["1인분 주문", "프랜차이즈", "분식", "전체보기"],
        ratings: [4.8],
        reviews: 75,
        comments: 60,
        yogiyoPayment: true,
        minOrderAmount: 8000,
        deliveryTime: "30~35분", // 배달 소요 시간
        distance: 2,
        image: "/images/에그드랍.png",
      },
      {
        content: "파리바게뜨",
        category: ["프랜차이즈", "커피.디저트", "전체보기"],
        ratings: [4.5],
        reviews: 92,
        comments: 78,
        yogiyoPayment: true,
        minOrderAmount: 12000,
        deliveryTime: "20~25분", // 배달 소요 시간
        distance: 3.4,
        image: "/images/파리바게뜨.png",
      },
      {
        content: "춘리마라탕",
        category: ["1인분 주문", "프랜차이즈", "중국집", "전체보기"],
        ratings: [4.7],
        reviews: 80,
        comments: 65,
        yogiyoPayment: true,
        minOrderAmount: 11000,
        deliveryTime: "10~15분", // 배달 소요 시간
        distance: 1.1,
        image: "/images/춘리마라탕.jpg",
      },
      {
        content: "북경반점",
        category: ["1인분 주문", "중국집", "전체보기"],
        ratings: [4.4],
        reviews: 1918,
        comments: 1483,
        yogiyoPayment: true,
        minOrderAmount: 15000,
        deliveryTime: "20~25분", // 배달 소요 시간
        distance: 2.7,
        image: "/images/북경반점.png",
      },
      {
        content: "딘타이펑",
        category: ["1인분 주문", "중국집", "전체보기"],
        ratings: [4.9],
        reviews: 40,
        comments: 30,
        yogiyoPayment: true,
        minOrderAmount: 5000,
        deliveryTime: "30~35분", // 배달 소요 시간
        distance: 3.7,
        image: "/images/딘타이펑.png",
      },
      {
        content: "본죽",
        category: ["한명주문", "한식", "전체보기"],
        ratings: [4.6],
        reviews: 62,
        comments: 50,
        yogiyoPayment: true,
        minOrderAmount: 8000,
        deliveryTime: "20~35분", // 배달 소요 시간
        distance: 1.5,
        image: "/images/본죽.png",
      },
      {
        content: "족의한수",
        category: ["1인분 주문", "야식", "족발.보쌈", "전체보기"],
        ratings: [4.9],
        reviews: 75,
        comments: 65,
        yogiyoPayment: true,
        minOrderAmount: 9000,
        deliveryTime: "40~60분", // 배달 소요 시간
        distance: 1.4,
        image: "/images/족의한수.jpg",
      },
      {
        content: "육수당",
        category: ["한식", "1인분 주문", "전체보기"],
        ratings: [4.8],
        reviews: 88,
        comments: 72,
        yogiyoPayment: true,
        minOrderAmount: 9000,
        deliveryTime: "40~60분", // 배달 소요 시간
        distance: 2.4,
        image: "/images/육수당.jpg",
      },
      {
        content: "바로덮밥",
        category: ["한식", "1인분 주문", "전체보기"],
        ratings: [4.9],
        reviews: 96,
        comments: 80,
        yogiyoPayment: true,
        minOrderAmount: 8400,
        deliveryTime: "20~40분", // 배달 소요 시간
        distance: 1.1,
        image: "/images/바로덮밥.jpg",
      },
      {
        content: "베트남쌀국수",
        category: ["1인분 주문", "전체보기"],
        ratings: [4.9],
        reviews: 55,
        comments: 45,
        yogiyoPayment: true,
        minOrderAmount: 10000,
        deliveryTime: "20~45분", // 배달 소요 시간
        distance: 2,
        image: "/images/몬스터pho.jpg",
      },
      {
        content: "미미파스타",
        category: ["1인분 주문", "피자.양식", "전체보기"],
        ratings: [4.9],
        reviews: 40,
        comments: 35,
        yogiyoPayment: true,
        minOrderAmount: 10000,
        deliveryTime: "30~35분", // 배달 소요 시간
        distance: 3.2,
        image: "/images/미미파스타.jpg",
      },
    ];

    // 선택한 카테고리에 속하는 음식점만 필터링합니다.
    const filteredData = fakeData.filter((content) =>
      content.category.includes(decodedCategory)
    );

    // 선택한 정렬 기준에 따라 음식점 컨텐츠를 정렬합니다.
    const sortedData = sortContent(filteredData, sortField);

    // 정렬된 데이터를 state에 반영합니다.
    setBoardContent(sortedData);
  }, [selectedCategoryFromLink, sortField]);

  // 선택한 정렬 기준에 따라 음식점 컨텐츠를 정렬합니다.
  const sortContent = (data, field) => {
    return data.slice().sort((a, b) => {
      if (field === "rating") {
        const avgRatingA =
          a.ratings.length > 0
            ? a.ratings.reduce((acc, curr) => acc + curr, 0) / a.ratings.length
            : 0;
        const avgRatingB =
          b.ratings.length > 0
            ? b.ratings.reduce((acc, curr) => acc + curr, 0) / b.ratings.length
            : 0;
        return avgRatingB - avgRatingA; // 평점 높은 순으로 변경
      } else if (field === "reviews") {
        return b[field] - a[field];
      } else if (field === "minOrderAmount" || field === "distance") {
        return a[field] - b[field];
      } else if (field === "deliveryTime") {
        // 값이 없는 경우를 확인하고 기본값을 사용하도록 수정
        const aTime = a[field] || "0~0";
        const bTime = b[field] || "0~0";

        // 숫자로 변환하여 정렬
        const [min, max] = aTime.split("~").map((time) => parseInt(time));
        const aAvgTime = (min + max) / 2;

        const [minB, maxB] = bTime.split("~").map((time) => parseInt(time));
        const bAvgTime = (minB + maxB) / 2;

        return aAvgTime - bAvgTime;
      } else {
        return a[field] - b[field];
      }
    });
  };

  // 음식점 이미지를 클릭할 때 실행되는 함수
  const handleImageClick = (category) => {
    setSelectedCategory(category);
  };
  // 메뉴 바 클릭 시 실행되는 함수
  const handleMenuClick = (category) => {
    // history 객체를 사용하여 URL 업데이트
    navigate(`/${category}`);
    // setCategoryName(category);  // 불필요한 부분 제거
    setSelectedCategory(category);
  };

  // Board 컴포넌트 상단에 새로운 메뉴 바를 추가합니다.
  return (
    <div id="content-container">
      <div className="menu-bar">
        {Object.entries(categoryOptions).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleMenuClick(value)}
            style={{
              backgroundColor:
                selectedCategory === value ? "lightblue" : "white",
            }}
          >
            {value}
          </button>
        ))}{" "}
        <label className="sort-label">
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="sort-selct"
          >
            {Object.entries(sortOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="board-container">
        {boardContent.map((content, index) => (
          <div
            key={index}
            className="board-item"
            onClick={() => handleImageClick(content.category[0])}
          >
            <div className="content-info">
              <img src={process.env.PUBLIC_URL + content.image} alt="로고" />
              <p className="content-name">{content.content}</p>
              <div className="star-rating">
                {content.ratings !== undefined && (
                  <span className="star">
                    ★(
                    {content.ratings.length > 0
                      ? (
                          content.ratings.reduce((acc, curr) => acc + curr, 0) /
                          content.ratings.length
                        ).toFixed(1)
                      : "0.0"}
                    )
                  </span>
                )}
              </div>
              <p className="reviews-info">
                리뷰 {content.reviews} 사장님댓글 {content.comments}
              </p>
              <p className="order-info">
                종로배달 결제 • {content.minOrderAmount}원 이상 배달 •{" "}
                {content.distance}
                km • {content.deliveryTime} 분
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
