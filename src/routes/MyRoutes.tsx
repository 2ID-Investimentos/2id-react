import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Error404 from '../pages/Error404';
import Registro from '../pages/Registro';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element=<Login /> />
            <Route path="/login" element=<Login /> />
            <Route path="/registro" element=<Registro /> />
            <Route path="*" element=<Error404 /> />
        </Routes>
    );
};

export default MyRoutes;
