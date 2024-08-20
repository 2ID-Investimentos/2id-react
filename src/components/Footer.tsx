import './Footer.css';

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
                    <div className="daniel">
                        <h1>Daniel Reis</h1>
                    </div>
                    <div className="igor">
                        <h1>Igor Jose</h1>
                    </div>
                    <div className="isadora">
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
