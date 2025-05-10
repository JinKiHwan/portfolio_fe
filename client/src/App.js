import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminPosts from './pages/Admin/AdminPosts';
import AdminPostDetail from './pages/Admin/AdminPostDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/posts" element={<AdminPosts />} />
                <Route path="/admin/posts/:id" element={<AdminPostDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
