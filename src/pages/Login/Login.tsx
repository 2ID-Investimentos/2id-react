import LoginForm from '../../components/LoginForm';
import Sobre from '../../components/Sobre';
import './login.css';

const Login = () => {
    return (
        <div className="container">
            <Sobre />
            <LoginForm />
        </div>
    );
};

export default Login;
