import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    navigateTo?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, navigateTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) navigate(navigateTo);
        if (onClick) onClick?.();
    };

    return <button onClick={handleClick}>{children}</button>;
};

export default Button;
