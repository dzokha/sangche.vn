// src/modules/knowledge/pages/IPLibrary.tsx
import { useState } from 'react';
import styles from '../styles/IPLibrary.module.css';

interface IPDataItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  conditions: string[];
  duration: string;
  icon: React.ReactNode;
  externalLink: string;
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
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6m-3-13v2m-4.24-.76l1.42 1.42M18.24 6.24l-1.42 1.42M5 12a7 7 0 1114 0 7 7 0 01-14 0z"></path></svg>,
    externalLink: 'https://ipvietnam.gov.vn/vi_VN/web/guest/sang-che-gphi'
  },
  {
    id: 'design',
    title: 'Kiểu dáng Công nghiệp',
    subtitle: 'Bằng độc quyền Kiểu dáng',
    description: 'Hình dáng bên ngoài của sản phẩm được thể hiện bằng hình khối, đường nét, màu sắc hoặc sự kết hợp những yếu tố này, có thể nhìn thấy trong quá trình khai thác công dụng.',
    conditions: ['Tính mới', 'Tính sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '5 năm, có thể gia hạn 2 lần (Tối đa 15 năm).',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>,
    externalLink: 'https://ipvietnam.gov.vn/vi_VN/web/guest/kieu-dang-cong-nghiep'
  },
  {
    id: 'trademark',
    title: 'Nhãn hiệu',
    subtitle: 'Giấy chứng nhận đăng ký nhãn hiệu',
    description: 'Dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau. Có thể là chữ cái, từ ngữ, hình ảnh, hoặc sự kết hợp các yếu tố đó được thể hiện bằng một hoặc nhiều màu sắc.',
    conditions: ['Là dấu hiệu nhìn thấy được', 'Có khả năng phân biệt'],
    duration: '10 năm, có thể gia hạn nhiều lần liên tiếp.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold">R</text></svg>,
    externalLink: 'https://ipvietnam.gov.vn/vi_VN/web/guest/nhan-hieu'
  },
  {
    id: 'geo',
    title: 'Chỉ dẫn địa lý',
    subtitle: 'Giấy chứng nhận đăng ký chỉ dẫn địa lý',
    description: 'Chỉ dẫn địa lý là dấu hiệu dùng để chỉ nguồn gốc địa lý của sản phẩm từ khu vực, địa phương, vùng lãnh thổ hoặc quốc gia cụ thể. Khu vực địa lý mang chỉ dẫn địa lý có ranh giới được xác định một cách chính xác bằng từ ngữ và bản đồ.',
    conditions: ['Tính mới', 'Trình độ sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '20 năm tính từ ngày nộp đơn hợp lệ.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6m-3-13v2m-4.24-.76l1.42 1.42M18.24 6.24l-1.42 1.42M5 12a7 7 0 1114 0 7 7 0 01-14 0z"></path></svg>,
    externalLink: 'https://ipvietnam.gov.vn/vi_VN/web/guest/chi-dan-dia-ly'
  },
  {
    id: 'bomach',
    title: 'Mạch tích hợp bán dẫn',
    subtitle: 'Giấy chứng nhận đăng ký thiết kế bố trí mạch tích hợp bán dẫn',
    description: 'Thiết kế bố trí mạch tích hợp bán dẫn (sau đây gọi là thiết kế bố trí) là cấu trúc không gian của các phần tử mạch và mối liên kết các phần tử đó trong mạch tích hợp bán dẫn.',
    conditions: ['Tính mới', 'Tính sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '5 năm, có thể gia hạn 2 lần (Tối đa 15 năm).',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>,
    externalLink: 'https://ipvietnam.gov.vn/vi_VN/web/guest/thiet-ke-bo-tri'
  },
  {
    id: 'bimat',
    title: 'Bí mật kinh doanh',
    subtitle: 'Bí mật kinh doanh',
    description: 'Bí mật kinh doanh là thông tin thu được từ hoạt động đầu tư tài chính, trí tuệ, chưa được bộc lộ và có khả năng sử dụng trong kinh doanh.',
    conditions: ['Là dấu hiệu nhìn thấy được', 'Có khả năng phân biệt'],
    duration: '10 năm, có thể gia hạn nhiều lần liên tiếp.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold">R</text></svg>,
    externalLink: 'https://ipz.vn'
  },
  {
    id: 'tacgia',
    title: 'Quyền tác giả',
    subtitle: 'Giấy chứng nhận đăng ký quyền tác giả',
    description: 'Quyền tác giả là quyền của tổ chức, cá nhân đối với tác phẩm do mình sáng tạo ra hoặc sở hữu.',
    conditions: ['Tính mới', 'Trình độ sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '20 năm tính từ ngày nộp đơn hợp lệ.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6m-3-13v2m-4.24-.76l1.42 1.42M18.24 6.24l-1.42 1.42M5 12a7 7 0 1114 0 7 7 0 01-14 0z"></path></svg>,
    externalLink: 'https://ipz.vn'
  },
  {
    id: 'lienquan',
    title: 'Quyền liên quan',
    subtitle: 'Giấy chứng nhận đăng ký quyền liên quan',
    description: 'Quyền liên quan đến quyền tác giả (gọi là quyền liên quan) là quyền của tổ chức, cá nhân đối với cuộc biểu diễn, bản ghi âm, ghi hình, chương trình phát sóng, tín hiệu vệ tinh mang chương trình được mã hóa.',
    conditions: ['Tính mới', 'Tính sáng tạo', 'Khả năng áp dụng công nghiệp'],
    duration: '5 năm, có thể gia hạn 2 lần (Tối đa 15 năm).',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>,
    externalLink: 'https://ipz.vn'
  },
  {
    id: 'giongcay',
    title: 'Giống cây trồng',
    subtitle: 'Bằng bảo hộ giống cây trồng',
    description: 'Giống cây trồng là quần thể cây trồng thuộc cùng một cấp phân loại thực vật thấp nhất, đồng nhất về hình thái, ổn định qua các chu kỳ nhân giống, có thể nhận biết được bằng sự biểu hiện các tính trạng do kiểu gen hoặc sự phối hợp của các kiểu gen quy định và phân biệt được với bất kỳ quần thể cây trồng nào khác bằng sự biểu hiện của ít nhất một tính trạng có khả năng di truyền được.',
    conditions: ['Là dấu hiệu nhìn thấy được', 'Có khả năng phân biệt'],
    duration: '10 năm, có thể gia hạn nhiều lần liên tiếp.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold">R</text></svg>,
    externalLink: 'https://ipz.vn'
  }

];

export default function IPLibrary() {
  const [activeTab, setActiveTab] = useState<IPDataItem>(ipData[0]);

  const handleSearchClick = () => {
    if (activeTab.externalLink) {
      window.open(activeTab.externalLink, '_blank', 'noopener,noreferrer');
    }
  };

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
              {/* 3. CẬP NHẬT: Gọi hàm mở link ngoài khi click */}
              <button className="search-btn" onClick={handleSearchClick}>
                Tra cứu {activeTab.title} ngay
              </button>
            </div>
        </div>
      </div>
    </>
  );
}