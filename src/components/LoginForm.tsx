import Button from './Button';

const LoginForm = () => {
    return (
        <div className="container-login">
            <div className="login-conteudo">
                <h1>Olá Novamente!</h1>
                <p>Bem vindo de volta.</p>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
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
