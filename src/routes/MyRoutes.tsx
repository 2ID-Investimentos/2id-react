import { Routes, Route } from 'react-router-dom';
import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Transacoes from '../pages/Transacoes';
import Carteira from '../pages/Carteira';
import Historico from '../pages/Historico';
import LayoutWithSidebar from '../layouts/LayoutWithSidebar';

const MyRoutes = () => (
    <Routes>
        {/* Rotas sem Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rotas com Sidebar */}
        <Route element={<LayoutWithSidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/carteira" element={<Carteira />} />
            <Route path="/transacoes" element={<Transacoes />} />
        </Route>

        {/* Rota para página de erro */}
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default MyRoutes;
