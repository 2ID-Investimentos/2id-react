import Button from './Button';
import Input from './Input';

const RegisterForm = () => {
    const handleRegister = async () => {
        const response = await fetch('/api/register/', {
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
            <h1>Olá</h1>
            <p>Registre-se para continuar</p>
            <Input type="text" placeholder="Nome Completo" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button onClick={handleRegister} navigateTo="/dashboard">
                Registrar
            </Button>
            <div className="container_span">
                <span>Já tem uma conta?</span>
                <a href="/login">Entrar!</a>
            </div>
        </div>
    );
};

export default RegisterForm;
