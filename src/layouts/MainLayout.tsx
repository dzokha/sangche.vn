// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import '../styles/App.css'; // Import CSS cục bộ dùng chung

import brandLogo from '../assets/images/ipz.png'; // <-- Đảm bảo tên file trùng khớp với file bạn đã lưu

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation(); // Lấy đường dẫn URL hiện tại
  const FACEBOOK_URL = "https://www.facebook.com/dzokha";

  // Hàm kiểm tra xem menu có đang được chọn hay không
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="layout-wrapper">
      
      {/* SIDEBAR CỐ ĐỊNH */}
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="identity-group">


			<div className="brand-header" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
				{/* Logo nằm bên trái */}
				<img src={brandLogo} alt="Sáng Chế VN Logo" className="brand-logo" />

				{/* Cụm chữ nằm bên phải */}
				<div className="brand-text-group">
				  <div className="brand-line-top">SÁNG CHẾ</div>
				  <div className="brand-line-bottom">VN</div>
				</div>
			</div>

			<div className="brand-fullname">PHÂN TÍCH & BẢN ĐỒ SÁNG CHẾ</div>
  
			<div className="role-container">
				<span className="role-en">Patent Intelligence Platform</span>
				<span className="role-vn">Dữ liệu thực — Giá trị thực</span>
			</div>
			<div className="separator"></div>

          </div>

          <nav className="nav-menu">
            <a 
              className={`nav-link ${isActive('/') ? 'active' : ''}`} 
              onClick={() => navigate('/')}
              style={{cursor: 'pointer'}}
            >
              <span className="nav-indicator"></span>
              <div className="nav-content">
                <span className="nav-en">Patent Search</span>
                <span className="nav-vn">Tra cứu Sáng chế</span>
              </div>
            </a>
            
            <a 
              className={`nav-link ${isActive('/landscape') ? 'active' : ''}`} 
              onClick={() => navigate('/landscape')}
              style={{cursor: 'pointer'}}
            >
              <span className="nav-indicator"></span>
              <div className="nav-content">
                <span className="nav-en">Tech Landscape</span>
                <span className="nav-vn">Bản đồ Cảnh quan</span>
              </div>
            </a>
            
            <a 
              className={`nav-link ${isActive('/analytics') ? 'active' : ''}`} 
              onClick={() => navigate('/analytics')}
              style={{cursor: 'pointer'}}
            >
              <span className="nav-indicator"></span>
              <div className="nav-content">
                <span className="nav-en">Trend Analytics</span>
                <span className="nav-vn">Phân tích Xu hướng</span>
              </div>
            </a>
            
            <a 
              className={`nav-link ${isActive('/library') ? 'active' : ''}`} 
              onClick={() => navigate('/library')}
              style={{cursor: 'pointer'}}
            >
              <span className="nav-indicator"></span>
              <div className="nav-content">
                <span className="nav-en">IP Library</span>
                <span className="nav-vn">Thư viện Kiến thức</span>
              </div>
            </a>
          </nav>

          <div className="domain-offer-container">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="domain-card">
              <div className="domain-badge">CƠ HỘI ĐẦU TƯ</div>
              <p className="domain-text">
                Sở hữu tên miền thương hiệu <span className="domain-highlight">sangche.vn</span> để bứt phá khởi nghiệp.
              </p>
              <div className="domain-footer">
                <span className="contact-label">Liên hệ chính chủ</span>
                <svg className="fb-mini-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </a>
          </div>

          <div className="sidebar-footer">
            <div className="social-links">
              <span className="domain-tag">SANGCHE.VN</span>
            </div>
            <div className="copyright-text">
               © {new Date().getFullYear()} Nền tảng Sáng chế Việt Nam
            </div>
          </div>
        </div>
      </aside>

      {/* NỘI DUNG THAY ĐỔI ĐỘNG */}
      <main className="main-content">
        {/* Outlet chính là nơi App.tsx hoặc IPLibrary.tsx sẽ được render */}
        <Outlet /> 
      </main>
      
    </div>
  );
}