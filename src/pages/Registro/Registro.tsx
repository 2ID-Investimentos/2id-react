import RegisterForm from '../../components/RegisterForm';
import Sobre from '../../components/Sobre';
import './registro.css';

const Registro = () => {
    return (
        <div className="container">
            <Sobre />
            <RegisterForm />
        </div>
    );
};

export default Registro;
