import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/login" element=<Login /> />
            <Route path="*" element=<Error404 /> />
        </Routes>
    );
};

export default MyRoutes;
