import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { checkAuthAndRedirect } from '../../utils/auth';
import { Link } from 'react-router-dom';

function AdminPostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuthAndRedirect(); // 로그인 체크 & 만료되면 로그인 페이지로 이동
    }, []);

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
            <Link to={`/admin/posts/${post.id}/edit`}>✏️ 수정하기</Link>
            <button
                onClick={async () => {
                    const confirmDelete = window.confirm('정말로 이 게시글을 삭제하시겠습니까?');
                    if (!confirmDelete) return;

                    try {
                        const token = localStorage.getItem('adminToken');
                        await axios.delete(`http://localhost:5000/posts/${post.id}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        alert('삭제가 완료되었습니다.');
                        navigate('/admin/posts');
                    } catch (err) {
                        console.error('삭제 실패:', err);
                        alert('삭제 중 오류가 발생했습니다.');
                    }
                }}>
                삭제하기
            </button>
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
