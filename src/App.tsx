import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';

const App = () => {
    return (
        <BrowserRouter>
            <MyRoutes />
        </BrowserRouter>
    );
};

export default App;
