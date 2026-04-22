// src/App.tsx
// import React from 'react';
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  // Lưu ý: Không cần <div className="layout-wrapper"> và Sidebar ở đây nữa!
  // Vì nó đã được bọc bởi MainLayout rồi.
  
  return (
    <>
      <div className="hero-search-container">
        <h2 className="main-greeting">Khám phá kho tri thức công nghệ</h2>
        
        <div className="search-bar-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            className="global-search-input"
            placeholder="Nhập từ khóa công nghệ, chủ đơn hoặc mã phân loại IPC..." 
          />
          <button className="search-btn">Tìm kiếm</button>
        </div>

        <div className="quick-stats">
          <div className="stat-item"><strong>1.2M+</strong> Sáng chế</div>
          <div className="stat-divider"></div>
          <div className="stat-item"><strong>500+</strong> Lĩnh vực công nghệ</div>
          <div className="stat-divider"></div>
          <div className="stat-item"><strong>Cập nhật:</strong> Hôm nay</div>
        </div>
      </div>

      <div className="section-title">01 // CÔNG CỤ PHÂN TÍCH TRỌNG YẾU</div>

      <div className="modules-grid">
        <div className="project-card" onClick={() => navigate('/landscape')}>
          <div className="card-top">
            <span className="project-year">MỚI CẬP NHẬT</span>
            <span className="module-tag">BẢN ĐỒ</span>
          </div>
          <h2 className="card-title">Bản đồ Cảnh quan Công nghệ <span className="arrow-icon">→</span></h2>
          <p className="card-desc">
            Trực quan hóa hàng nghìn bằng sáng chế trên không gian 2D/3D. Giúp nhận diện ngay lập tức các "điểm nóng" công nghệ và những vùng tiềm năng chưa được khai phá.
          </p>
          <div className="tags">
            <span className="tag">Clustering</span>
            <span className="tag">Interactive Map</span>
          </div>
        </div>

        <div className="project-card" onClick={() => navigate('/analytics')}>
          <div className="card-top">
            <span className="project-year">DỮ LIỆU LỊCH SỬ</span>
            <span className="module-tag">XU HƯỚNG</span>
          </div>
          <h2 className="card-title">Phân tích Trình độ Công nghệ <span className="arrow-icon">→</span></h2>
          <p className="card-desc">
            Biểu đồ hóa vòng đời công nghệ. Xác định công nghệ đang ở giai đoạn bình minh, phát triển hay đã bão hòa để tối ưu hóa nguồn lực đầu tư R&D.
          </p>
          <div className="tags">
            <span className="tag">Trend Forecast</span>
            <span className="tag">Tech Life Cycle</span>
          </div>
        </div>
      </div>
    </>
  );
}