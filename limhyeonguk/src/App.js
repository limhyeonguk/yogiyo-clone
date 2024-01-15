// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import OrderConfirmation from "./pages/OrderConfirmation";
import Board from "./components/Board"; // 새로운 Board 컴포넌트를 import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notice from "./pages/Notice";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryUpdate = (category) => {
    // 선택한 카테고리 업데이트
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route
            path="/:categoryName"
            element={<Board selectedCategoryFromLink={selectedCategory} />} // 선택한 카테고리를 prop으로 전달
          />
          {/* 공지사항 루트 추가 */}
          <Route path="/notice" element={<Notice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
