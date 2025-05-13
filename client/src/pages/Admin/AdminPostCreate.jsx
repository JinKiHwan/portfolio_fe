import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { checkAuthAndRedirect } from '../../utils/auth';

function AdminPostCreate() {
    const [title, setTitle] = useState('');
    //const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const editorRef = useRef();

    useEffect(() => {
        checkAuthAndRedirect(); // 로그인 체크 & 만료되면 로그인 페이지로 이동
    }, []);

    const handleImageUpload = async (blob, callback) => {
        const formData = new FormData();
        formData.append('image', blob);

        try {
            const token = localStorage.getItem('adminToken');
            const res = await axios.post('http://localhost:5000/posts/upload/editor-image', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            callback(res.data.url, 'image'); // 에디터에 이미지 삽입
        } catch (err) {
            alert('이미지 업로드 실패');
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const content = editorRef.current?.getInstance().getHTML();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('link', link);
        formData.append('hashtags', JSON.stringify(hashtags.split(',').map((tag) => tag.trim())));

        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            const token = localStorage.getItem('adminToken');
            await axios.post('http://localhost:5000/posts', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('게시글이 등록되었습니다.');
            navigate('/admin/posts');
        } catch (err) {
            console.error('게시글 등록 실패:', err);
            alert('게시글 등록 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="admin-post-create">
            <h2>게시글 등록</h2>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" required />
                <Editor
                    ref={editorRef}
                    height="400px"
                    initialEditType="wysiwyg"
                    previewStyle="vertical"
                    hooks={{ addImageBlobHook: handleImageUpload }}
                />
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="링크" />
                <input
                    type="text"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    placeholder="해시태그 (쉼표로 구분)"
                />
                <input type="file" multiple onChange={(e) => setImages(e.target.files)} />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default AdminPostCreate;
