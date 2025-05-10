import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../api/auth';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { token } = await loginAdmin(username, password);
            localStorage.setItem('adminToken', token); // 토큰 저장
            alert('로그인 성공');
            navigate('/admin/posts'); // 게시글 목록 페이지로 이동
        } catch (err) {
            alert('로그인 실패: ' + err.response?.data?.error || '서버 오류');
        }
    };

    return (
        <div>
            <h2>관리자 로그인</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default AdminLogin;
