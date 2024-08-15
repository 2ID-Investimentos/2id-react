import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="sobre">
                <div className="sobre-conteudo">
                    <h1>2ID - Investimentos</h1>
                    <p>O melhor gerenciador de investimentos</p>
                    <button>Saiba Mais</button>
                </div>
            </div>
            <div className="container-login">
                <div className="login-conteudo">
                    <h1>Olá Novamente!</h1>
                    <p>Bem vindo de volta.</p>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="submit" value="Entrar" />
                    <div className="container-span">
                        <span>Não tem uma conta?</span>
                        <span>
                            <a href="/registro">Registre-se!</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
