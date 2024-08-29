import Button from './Button';
import Input from './Input';

const LoginForm = () => {
    const handleLogin = async () => {
        const response = await fetch('/api/login/', {
            method: 'POST',
            body: JSON.stringify({
                /* your data */
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        // Handle response
    };

    return (
        <div className="esquerda">
            <h1>Olá Novamente!</h1>
            <p>Bem vindo de volta.</p>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button onClick={handleLogin} navigateTo="/dashboard">
                Entrar
            </Button>
            <div className="container_span">
                <span>Não tem uma conta?</span>
                <a href="/registro">Registre-se!</a>
            </div>
        </div>
    );
};

export default LoginForm;
