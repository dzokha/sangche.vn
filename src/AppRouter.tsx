// src/AppRouter.tsx

// 1. Đổi BrowserRouter thành HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import App from './App';
import IPLibrary from './modules/knowledge/pages/IPLibrary';
import Insights from './modules/knowledge/pages/Insights';
import ArticleDetail from './modules/knowledge/pages/ArticleDetail';

export default function AppRouter() {
  return (
    // 2. Sử dụng <Router> (lúc này đã là HashRouter)
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/library" element={<IPLibrary />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}