import { Col, Container, Row } from 'react-bootstrap';
import '../styles/global.css';
import Sobre from '../components/Sobre';
import RegisterForm from '../components/RegisterForm';

const Registro = () => {
    return (
        <Container fluid className="container-fluid">
            <Row className="g-0 w-100 h-100">
                <Col md={8} className="sobre">
                    <Sobre />
                </Col>
                <Col md={4}>
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Registro;
