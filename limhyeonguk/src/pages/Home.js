import React, { useState, useEffect } from "react";
import RestaurantList from "../components/RestaurantList";

function Home() {
  const [userLocation, setUserLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  let map = null; // Kakao 지도 객체를 저장할 변수

  useEffect(() => {
    // 페이지 로드 시 Kakao 지도 초기화
    if (window.kakao) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 위치
          level: 5, // 지도 확대 레벨
        };

        // 지도 생성
        map = new window.kakao.maps.Map(container, options);
        setUserLocation({
          latitude: 37.5665,
          longitude: 126.978,
        }); // 예시로 서울의 좌표를 사용
      });
    }
  }, []);

  const handleSearchClick = async () => {
    try {
      // 서버에 검색어 전송
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: searchInput + " 종로구" }), // 종로구를 검색어에 추가
      });

      const data = await response.json();

      if (data.documents.length > 0) {
        // 검색된 위치 정보
        const location = data.documents[0].address;
        const newLocation = {
          latitude: parseFloat(location.y),
          longitude: parseFloat(location.x),
        };

        // 사용자 위치 갱신
        setUserLocation(newLocation);

        if (window.kakao && newLocation && map) {
          // 검색된 위치에 마커 추가
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              newLocation.latitude,
              newLocation.longitude
            ),
          });
          marker.setMap(map);

          // 지도 경계 설정
          const bounds = new window.kakao.maps.LatLngBounds();
          bounds.extend(
            new window.kakao.maps.LatLng(
              newLocation.latitude,
              newLocation.longitude
            )
          );
          map.setBounds(bounds);
        }
      } else {
        console.log("검색 결과가 없습니다.");
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  return (
    <div>
      {/* 검색창 */}
      <div
        style={{
          display: "flex",
          alignItems: "center", // 수직 정렬
          justifyContent: "center", // 수평 정렬
          height: "100%", // 화면 전체 높이
        }}
      >
        <div
          style={{
            padding: "10px",
            background: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="장소를 검색하세요."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearchClick}>검색</button>
        </div>
      </div>

      {/* 지도 영역 */}
      <div
        id="map"
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginTop: "10px",
          position: "relative",
        }}
      ></div>

      <RestaurantList />
    </div>
  );
}

export default Home;
