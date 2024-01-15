import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  // 이미지 파일의 경로
  const logoImagePath = process.env.PUBLIC_URL + "/images/종로배달로고.png";

  // 헤더의 스타일 정의
  const headerStyle = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: "bold",
    fontSize: "28px",
    color: "#333",
    textDecoration: "none",
  };

  // 하위 텍스트 스타일 정의
  const subHeaderStyle = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "18px",
    color: "#666",
  };

  // 화면 너비를 상태로 관리
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 화면 크기가 변경될 때마다 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="header-container"
      style={{ borderBottom: "1px solid #ddd" }}
    >
      <div className="logo-images">
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline", marginRight: "20px" }}>
            {/* 홈으로 이동하는 로고 링크 */}
            <Link to="/" style={headerStyle}>
              <img
                src={logoImagePath}
                alt="종로배달 로고"
                style={{ height: "40px", width: "auto" }}
              />
            </Link>
          </li>
        </ul>
      </div>
      {/* 메인 헤더 - 화면 너비가 720px 이하일 때 숨김 */}
      {windowWidth > 720 && (
        <h1 style={headerStyle}>지금 배달이 가능한 음식점</h1>
      )}
      {/* 서브 헤더 - 화면 너비가 720px 이하일 때 숨김 */}
      {windowWidth > 720 && (
        <h2 style={subHeaderStyle}>배달받으실 동 이름으로 검색해주세요</h2>
      )}
    </header>
  );
}

export default Header;
