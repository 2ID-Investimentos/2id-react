import { Routes, Route } from 'react-router-dom';
import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';
import Registro from '../pages/Registro';
import Login from '../pages/Login';

const MyRoutes = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default MyRoutes;
