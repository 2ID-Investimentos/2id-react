import { Col, Container, Row } from 'react-bootstrap';
import '../styles/global.css';
import Sobre from '../components/Sobre';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <Container fluid className="container-fluid ">
            <Row className="g-0 w-100 h-100">
                <Col md={8} className="sobre">
                    <Sobre />
                </Col>
                <Col md={4}>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
