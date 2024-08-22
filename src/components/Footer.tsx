import Button from './Button';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="empresa">
                    <h1>2ID - INVESTIMENTOS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis ab doloremque rem quo
                        voluptas accusantium, quaerat sequi magni sapiente harum nostrum natus praesentium laborum iure
                        mollitia culpa excepturi illum!
                    </p>
                </div>
                <div className="creditos">
                    <div className="pessoa">
                        <h1>Daniel Reis</h1>
                        <div className="links">
                            <Button
                                onClick={() => {
                                    window.open('https://www.linkedin.com/in/drgsantaana/');
                                }}
                            >
                                Linkedin
                            </Button>
                            <Button
                                onClick={() => {
                                    window.open('https://www.linkedin.com/in/drgsantaana/');
                                }}
                            >
                                GitHub
                            </Button>
                        </div>
                    </div>
                    <div className="pessoa">
                        <h1>Igor Jose</h1>
                    </div>
                    <div className="pessoa">
                        <h1>Isadora Zanitti</h1>
                    </div>
                </div>
            </div>

            <p className="copright">
                © 2ID - Investimentos, 2024. Todos os direitos reservados. Este conteúdo foi criado por Daniel, Igor e
                Isadora, e é protegido por leis de direitos autorais.
            </p>
        </footer>
    );
};

export default Footer;
