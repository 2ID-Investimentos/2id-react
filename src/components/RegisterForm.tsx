import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/register/', {
                // URL da API Django
                method: 'POST',
                body: JSON.stringify({ name, email, password }), // Envia nome, email e senha
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Falha no registro');
            }

            const data = await response.json();
            console.log('Registro bem-sucedido:', data);

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
            <p>Registre-se para continuar</p>
            <Input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleRegister}>Registrar</Button>
            <div>
                <span>Já tem uma conta?</span>
                <a href="/login">Entrar!</a>
            </div>
        </div>
    );
};

export default RegisterForm;
