import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/login/', {
                // URL da API Django
                method: 'POST',
                body: JSON.stringify({ email, password }), // Envia email e senha
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Falha no login');
            }

            const data = await response.json();
            console.log('Login bem-sucedido:', data);

            // Aqui você pode armazenar o token se necessário, por exemplo:
            // localStorage.setItem('token', data.token);

            navigate('/dashboard');
            // Redirecionar para o dashboard ou outra página
        } catch (error) {
            console.error('Erro:', error);
            navigate('senha_incorreta*');
        }
    };

    return (
        <div className="esquerda">
            <h1>Olá!</h1>
            <p>Bem-vindo de volta.</p>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Entrar</Button>
            <div>
                <span>Não tem uma conta?</span>
                <a href="/registro">Registre-se!</a>
            </div>
        </div>
    );
};

export default LoginForm;
