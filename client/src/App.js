import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminPosts from './pages/Admin/AdminPosts';
import AdminPostDetail from './pages/Admin/AdminPostDetail';
import AdminPostCreate from './pages/Admin/AdminPostCreate';
import AdminLayout from './layouts/AdminLayout';
import AdminPostEdit from './pages/Admin/AdminPostEdit';
import UserLayout from './layouts/UserLayout';
import Home from './pages/User/Home';
// import PostDetail from './pages/User/PostDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="posts" element={<AdminPosts />} />
                    <Route path="posts/create" element={<AdminPostCreate />} />
                    <Route path="posts/:id" element={<AdminPostDetail />} />
                    <Route path="posts/:id/edit" element={<AdminPostEdit />} />
                </Route>
            </Routes>

            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="posts/:id" element={<PostDetail />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
