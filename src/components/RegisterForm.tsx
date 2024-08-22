import Button from './Button';
import Input from './Input';

const RegisterForm = () => {
    return (
        <div className="container-registro">
            <div className="registro-conteudo">
                <h1>Olá</h1>
                <p>Registre-se para continuar</p>
                <Input type="text" placeholder="Nome Completo" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button navigateTo={'/dashboard'}>Registrar</Button>
                <div className="container-span">
                    <span>Já tem uma conta?</span>
                    <span>
                        <a href="/login">Entrar!</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
