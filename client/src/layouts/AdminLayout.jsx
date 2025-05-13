import AdminNav from '../components/AdminNav';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <div>
            <AdminNav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
