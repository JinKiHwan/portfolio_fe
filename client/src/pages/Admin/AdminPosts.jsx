import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { checkAuthAndRedirect } from '../../utils/auth';

function AdminPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const res = await axios.get('http://localhost:5000/posts', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPosts(res.data.posts);
            } catch (err) {
                console.error('게시글 불러오기 실패:', err);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        checkAuthAndRedirect(); // 로그인 체크 & 만료되면 로그인 페이지로 이동
    }, []);

    return (
        <div className="admin-posts-wrapper">
            <h2 className="admin-posts-title">📋 관리자 게시글 목록</h2>

            <div className="admin-posts-list">
                {posts.map((post) => (
                    <div key={post.id} className="admin-post-item">
                        <h3 className="post-title">{post.title}</h3>

                        <p className="post-tags">해시태그: {post.hashtags?.join(', ') || '없음'}</p>

                        <div className="post-actions">
                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                                사이트 보기
                            </a>
                            <Link to={`/admin/posts/${post.id}`}>
                                <button className="view-btn">상세보기</button>
                            </Link>
                            <button className="delete-btn">삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPosts;
