import Button from './Button';
import Input from './Input';

const LoginForm = () => {
    return (
        <div className="container-login">
            <div className="login-conteudo">
                <h1>Olá Novamente!</h1>
                <p>Bem vindo de volta.</p>

                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button navigateTo={'/dashboard'}>Entrar</Button>
                <div className="container-span">
                    <span>Não tem uma conta?</span>
                    <span>
                        <a href="/registro">Registre-se!</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
