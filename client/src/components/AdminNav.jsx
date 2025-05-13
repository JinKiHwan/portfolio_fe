import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logoutAndRedirect } from '../utils/auth';
function AdminNav() {
    const navigate = useNavigate();

    return (
        <nav className="admin-nav">
            <ul>
                <li>
                    <Link to="/admin/posts">게시글 목록</Link>
                </li>
                {/* ✅ 등록 링크 추가 */}
                <li>
                    <Link to="/admin/posts/create">게시글 등록</Link>
                </li>
                <li>
                    <button onClick={() => logoutAndRedirect(navigate)}>로그아웃</button>
                </li>
            </ul>
        </nav>
    );
}

export default AdminNav;
