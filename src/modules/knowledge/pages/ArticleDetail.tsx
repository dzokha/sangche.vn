import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import styles from '../styles/Insights.module.css'; // Dùng chung file CSS

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>(); // Lấy ID (slug) từ đường dẫn URL
  const navigate = useNavigate();

  // Cuộn lên đầu trang khi vừa vào bài viết
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Tìm bài viết tương ứng với ID
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className={styles.detailContainer}>
        <h2>Không tìm thấy bài viết!</h2>
        <button className="search-btn" onClick={() => navigate('/insights')}>Quay lại danh sách</button>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      {/* Nút quay lại */}
      <div className={styles.backButton} onClick={() => navigate('/insights')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Quay lại Tin tức & Phân tích
      </div>

      {/* Tiêu đề & Thông tin Meta */}
      <div className={styles.detailHeader}>
        <span className={styles.category}>{article.category}</span>
        <span className={styles.dateMeta}>{article.date}</span>
      </div>
      <h1 className={styles.detailTitle}>{article.title}</h1>
      <p className={styles.detailExcerpt}>{article.excerpt}</p>

      {/* Ảnh bìa bài viết */}
      <div className={styles.detailImageWrapper}>
        <img src={article.image} alt={article.title} className={styles.detailImage} />
      </div>

      {/* Nội dung chi tiết */}
      <div className={styles.detailBody}>
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}