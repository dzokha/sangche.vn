// import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Insights.module.css';
import { articles } from '../data/articles'; // 1. Import dữ liệu

export default function Insights() {
  const navigate = useNavigate();

  return (
    <>
      <div className="section-title">BÀI VIẾT & PHÂN TÍCH CHUYÊN SÂU</div>
      <div className="hero-search-container" style={{marginBottom: '30px'}}>
          <h2 className="main-greeting">Tài sản trí tuệ định hình tương lai doanh nghiệp.</h2>
          <p className="intro-text" style={{maxWidth: '700px', fontStyle: 'italic'}}>
            "Tài sản lớn nhất của bạn là khả năng kiếm tiền.<br/>
Tài nguyên lớn nhất của bạn là thời gian." — Brian Tracy. <br/><br/>
            Khám phá các góc nhìn chuyên sâu về chiến lược bảo vệ tài sản trí tuệ, kinh nghiệm thực tiễn và xu hướng công nghệ mới nhất.
          </p>
      </div>

      <div className={styles.insightsContainer}>
        {articles.map((article) => (
          <div 
            key={article.id} 
            className={styles.articleCard}
            onClick={() => navigate(`/insights/${article.id}`)}
          >
            {/* Ảnh bìa */}
            <div className={styles.imageWrapper}>
              <img src={article.image} alt={article.title} className={styles.articleImage} />
            </div>
            
            {/* Nội dung */}
            <div className={styles.articleContent}>
              <div className={styles.articleMeta}>
                <span className={styles.category}>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              
              <div className={styles.readMore}>
                Đọc tiếp 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}