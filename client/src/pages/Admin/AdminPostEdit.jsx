import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function AdminPostEdit() {
    const { id } = useParams();
    const editorRef = useRef();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [hashtags, setHashtags] = useState('');

    useEffect(() => {
        // 기존 게시글 데이터 불러오기
        axios
            .get(`http://localhost:5000/posts/${id}`)
            .then((res) => {
                const data = res.data;
                setTitle(data.title);
                setLink(data.link);
                setHashtags(data.hashtags.join(', ')); // 배열 → 문자열
                editorRef.current.getInstance().setHTML(data.content); // HTML 넣기
            })
            .catch((err) => {
                console.error('불러오기 실패:', err);
                alert('게시글을 불러오지 못했습니다.');
            });
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('adminToken');
        const content = editorRef.current.getInstance().getHTML();
        const hashtagArray = hashtags.split(',').map((tag) => tag.trim());

        try {
            await axios.put(
                `http://localhost:5000/posts/${id}`,
                {
                    title,
                    content,
                    link,
                    hashtags: JSON.stringify(hashtagArray),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            alert('게시글이 수정되었습니다.');
            navigate(`/admin/posts/${id}`);
        } catch (err) {
            console.error('수정 실패:', err);
            alert('게시글 수정 중 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <h2>게시글 수정</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Editor ref={editorRef} previewStyle="vertical" height="400px" initialEditType="wysiwyg" />
                <input type="text" placeholder="링크" value={link} onChange={(e) => setLink(e.target.value)} />
                <input
                    type="text"
                    placeholder="해시태그 (쉼표로 구분)"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                />
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
}

export default AdminPostEdit;
