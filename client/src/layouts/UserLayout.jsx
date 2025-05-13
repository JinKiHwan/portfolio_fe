import { Outlet } from 'react-router-dom';

function UserLayout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default UserLayout;
