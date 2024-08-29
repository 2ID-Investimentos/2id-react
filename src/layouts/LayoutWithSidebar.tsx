import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const LayoutWithSidebar = () => (
    <div className="d-flex">
        <Sidebar />
        <div className="content flex-grow-1">
            <Outlet />
        </div>
    </div>
);

export default LayoutWithSidebar;
