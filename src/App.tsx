import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <MyRoutes />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
