// src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import MainLayout from './layouts/MainLayout';

// Import Pages
import App from './App'; // Trang chủ (Dashboard)
import IPLibrary from './modules/knowledge/pages/IPLibrary';
import Insights from './modules/knowledge/pages/Insights'; // Thêm import này
import ArticleDetail from './modules/knowledge/pages/ArticleDetail'; // Import trang chi tiết
// import GeneAIDashboard from './modules/geneai/pages/Dashboard';
// import LandscapeMap from './modules/landscape/pages/LandscapeMap';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Nhóm các trang sử dụng MainLayout (Có Sidebar) */}
        <Route element={<MainLayout />}>
          {/* Trang mặc định khi vào "/" sẽ là thẻ App */}
          <Route path="/" element={<App />} />
          
          {/* Các trang con khác */}
          <Route path="/library" element={<IPLibrary />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<ArticleDetail />} />
          
          {/* Ví dụ cho các trang tương lai: */}
          {/* <Route path="/landscape" element={<LandscapeMap />} /> */}
          {/* <Route path="/analytics" element={<TrendAnalytics />} /> */}
        </Route>

        {/* CÁC TRANG KHÔNG DÙNG SIDEBAR (Ví dụ: Trang Login) thì để ra ngoài nhóm trên */}
        {/* <Route path="/login" element={<Login />} /> */}
        
      </Routes>
    </Router>
  );
}