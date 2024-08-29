import Button from './Button';

const Sobre = () => {
    return (
        <div className="sobre">
            <div className="sobre-conteudo">
                <h1>2ID - Investimentos</h1>
                <p>O melhor gerenciador de investimentos</p>
                <Button navigateTo="/saiba-mais">Saiba Mais</Button>
            </div>
        </div>
    );
};

export default Sobre;
