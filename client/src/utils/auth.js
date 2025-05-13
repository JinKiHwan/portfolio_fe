import { jwtDecode } from 'jwt-decode';

// 토큰이 만료됐는지 확인하는 함수
export function isTokenExpired(token) {
    try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000; // 초 단위
        return decoded.exp < now;
    } catch (err) {
        return true; // 에러가 나면 토큰이 유효하지 않음
    }
}

// 토큰을 확인하고 만료 시 로그아웃 처리
export function checkAuthAndRedirect() {
    const token = localStorage.getItem('adminToken');
    if (!token || isTokenExpired(token)) {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
    }
}

export function logoutAndRedirect(navigate) {
    localStorage.removeItem('adminToken');
    alert('로그아웃 되었습니다.');
    navigate('/admin/login');
}
