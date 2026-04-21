// src/modules/knowledge/pages/IPLibrary.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/IPLibrary.module.css';

interface IPDataItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  conditions: string[];
  duration: string;
  icon: React.ReactNode;
}

const ipData: IPDataItem[] = [
  // ... (Giữ nguyên mảng ipData như cũ)
  {
    id: 'patent',
    title: 'Sáng chế',
    subtitle: 'Bằng độc quyền Sáng chế / GPHI',
    description: 'Sáng chế là giải pháp kỹ thuật dưới dạng sản phẩm hoặc quy trình nhằm giải quyết một vấn đề xác định bằng việc ứng dụng các quy luật tự nhiên.',
    conditions: ['Tính mới', 'Trình độ sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '20 năm tính từ ngày nộp đơn hợp lệ.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6m-3-13v2m-4.24-.76l1.42 1.42M18.24 6.24l-1.42 1.42M5 12a7 7 0 1114 0 7 7 0 01-14 0z"></path></svg>
  },
  {
    id: 'design',
    title: 'Kiểu dáng Công nghiệp',
    subtitle: 'Bằng độc quyền Kiểu dáng',
    description: 'Hình dáng bên ngoài của sản phẩm được thể hiện bằng hình khối, đường nét, màu sắc hoặc sự kết hợp những yếu tố này, có thể nhìn thấy trong quá trình khai thác công dụng.',
    conditions: ['Tính mới', 'Tính sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '5 năm, có thể gia hạn 2 lần (Tối đa 15 năm).',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
  },
  {
    id: 'trademark',
    title: 'Nhãn hiệu',
    subtitle: 'Giấy chứng nhận đăng ký nhãn hiệu',
    description: 'Dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau. Có thể là chữ cái, từ ngữ, hình ảnh, hoặc sự kết hợp các yếu tố đó được thể hiện bằng một hoặc nhiều màu sắc.',
    conditions: ['Là dấu hiệu nhìn thấy được', 'Có khả năng phân biệt'],
    duration: '10 năm, có thể gia hạn nhiều lần liên tiếp.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold">R</text></svg>
  }
];

export default function IPLibrary() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<IPDataItem>(ipData[0]);

  return (
    <>
      <div className="section-title">THƯ VIỆN KIẾN THỨC SỞ HỮU TRÍ TUỆ</div>
      
      <div className="hero-search-container" style={{marginBottom: '40px'}}>
          <h2 className="main-greeting">Phân loại & Đối tượng bảo hộ</h2>
          <p className="intro-text" style={{maxWidth: '600px'}}>
            Hệ thống hóa các khái niệm và hành lang pháp lý cơ bản, giúp bạn nắm bắt nhanh chóng bản chất của từng loại tài sản trí tuệ trước khi tiến hành tra cứu chuyên sâu.
          </p>
      </div>

      <div className={styles.libraryContainer}>
        
        <div className={styles.libraryTabsColumn}>
          {ipData.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.libraryTabItem} ${activeTab.id === item.id ? styles.active : ''}`}
              onClick={() => setActiveTab(item)}
            >
              <div className={styles.tabIcon}>{item.icon}</div>
              <div className={styles.tabName}>{item.title}</div>
            </div>
          ))}
        </div>

        <div className={styles.libraryContentColumn}>
            <div className={styles.contentHeader}>
              <div className={styles.contentIconLarge}>{activeTab.icon}</div>
              <div>
                <h3 className={styles.contentTitle}>{activeTab.title}</h3>
                <span className={styles.contentSubtitle}>{activeTab.subtitle}</span>
              </div>
            </div>
            
            <div className={styles.contentBody}>
              <div className={styles.infoBlock}>
                <h4>Định nghĩa</h4>
                <p>{activeTab.description}</p>
              </div>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h4>Điều kiện bảo hộ</h4>
                  <ul className={styles.conditionsList}>
                    {activeTab.conditions.map((cond, idx) => (
                      <li key={idx}>{cond}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.infoBlock}>
                  <h4>Thời hạn bảo hộ</h4>
                  <p className={styles.highlightText}>{activeTab.duration}</p>
                </div>
              </div>
            </div>

            <div className={styles.contentFooter}>
              <button className="search-btn" onClick={() => navigate('/')}>
                Tra cứu {activeTab.title} ngay
              </button>
            </div>
        </div>
      </div>
    </>
  );
}