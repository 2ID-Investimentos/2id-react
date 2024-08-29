import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';
import './styles/global.css';

const App = () => (
    <BrowserRouter>
        <MyRoutes />
    </BrowserRouter>
);

export default App;
