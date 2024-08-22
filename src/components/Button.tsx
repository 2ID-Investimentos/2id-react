import { useNavigate } from 'react-router-dom';
import './button.css';
const Button = ({ children, onClick, navigateTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
        if (onClick) {
            onClick();
        }
    };

    return <button onClick={handleClick}>{children}</button>;
};

export default Button;
