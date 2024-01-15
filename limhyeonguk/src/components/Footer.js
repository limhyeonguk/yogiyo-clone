// components/Footer.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [noticeOpen, setNoticeOpen] = useState(false);
  const navigate = useNavigate();

  const handleNoticeClick = () => {
    setNoticeOpen(!noticeOpen);
    // 클릭 시 /notice 페이지로 이동
    navigate("/notice");
  };

  return (
    <footer
      className="footer-container"
      style={{ borderTop: "1px solid #ddd", padding: "20px 0" }}
    >
      <div className="footer-content" style={{ textAlign: "center" }}>
        <h3
          onClick={handleNoticeClick}
          style={{
            cursor: "pointer",
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: "18px",
            color: "#333",
            margin: 0,
          }}
        >
          공지사항
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
