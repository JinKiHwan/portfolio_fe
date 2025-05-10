import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminPostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const res = await axios.get(`http://localhost:5000/posts/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPost(res.data);
            } catch (err) {
                console.error('상세 조회 실패:', err);
            }
        };

        fetchDetail();
    }, [id]);

    if (!post) return <div>로딩 중...</div>;

    return (
        <div className="admin-post-detail">
            <h2>{post.title}</h2>
            <button onClick={() => navigate(`/admin/posts/${post.id}/edit`)}>수정하기</button>
            <p>
                링크:{' '}
                <a href={post.link} target="_blank" rel="noreferrer">
                    {post.link}
                </a>
            </p>

            <p>해시태그: {post.hashtags?.join(', ')}</p>
            <p>작성일: {new Date(post.created_at).toLocaleString()}</p>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="post-images">
                {post.images.map((img, idx) => (
                    <img key={idx} src={`http://localhost:5000/uploads/${img}`} alt={`업로드 이미지 ${idx}`} />
                ))}
            </div>
        </div>
    );
}

export default AdminPostDetail;
