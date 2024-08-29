import React, { useState } from 'react';
import axios from 'axios';

const Transacoes = () => {
    const [compra, setCompra] = useState({ ticker: '', quantidade: '', preco: '', dataCompra: '' });
    const [venda, setVenda] = useState({ ticker: '', quantidade: '', preco: '', dataVenda: '' });
    const [novoAtivo, setNovoAtivo] = useState({ ticker: '', nome: '', setor: '', outro: '' });

    const handleCompra = () => {
        axios.post('/api/transacoes/compra', compra)
            .then(response => console.log("Compra realizada com sucesso!"))
            .catch(error => console.error("Erro ao realizar compra!", error));
    };

    const handleVenda = () => {
        axios.post('/api/transacoes/venda', venda)
            .then(response => console.log("Venda realizada com sucesso!"))
            .catch(error => console.error("Erro ao realizar venda!", error));
    };

    const handleNovoAtivo = () => {
        axios.post('/api/transacoes/novo-ativo', novoAtivo)
            .then(response => console.log("Novo ativo cadastrado com sucesso!"))
            .catch(error => console.error("Erro ao cadastrar ativo!", error));
    };

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-4">
                    <h4>Compra</h4>
                    <input type="text" placeholder="Ticker" onChange={(e) => setCompra({ ...compra, ticker: e.target.value })} />
                    <input type="number" placeholder="Quantidade" onChange={(e) => setCompra({ ...compra, quantidade: e.target.value })} />
                    <input type="number" placeholder="Preço" onChange={(e) => setCompra({ ...compra, preco: e.target.value })} />
                    <input type="date" placeholder="Data da compra" onChange={(e) => setCompra({ ...compra, dataCompra: e.target.value })} />
                    <button className="btn btn-primary mt-2" onClick={handleCompra}>Comprar</button>
                </div>
                <div className="col-md-4">
                    <h4>Venda</h4>
                    <input type="text" placeholder="Ticker" onChange={(e) => setVenda({ ...venda, ticker: e.target.value })} />
                    <input type="number" placeholder="Quantidade" onChange={(e) => setVenda({ ...venda, quantidade: e.target.value })} />
                    <input type="number" placeholder="Preço" onChange={(e) => setVenda({ ...venda, preco: e.target.value })} />
                    <input type="date" placeholder="Data da venda" onChange={(e) => setVenda({ ...venda, dataVenda: e.target.value })} />
                    <button className="btn btn-primary mt-2" onClick={handleVenda}>Vender</button>
                </div>
                <div className="col-md-4">
                    <h4>Cadastrar Ativo</h4>
                    <input type="text" placeholder="Ticker" onChange={(e) => setNovoAtivo({ ...novoAtivo, ticker: e.target.value })} />
                    <input type="text" placeholder="Nome" onChange={(e) => setNovoAtivo({ ...novoAtivo, nome: e.target.value })} />
                    <input type="text" placeholder="Setor" onChange={(e) => setNovoAtivo({ ...novoAtivo, setor: e.target.value })} />
                    <input type="text" placeholder="Outro" onChange={(e) => setNovoAtivo({ ...novoAtivo, outro: e.target.value })} />
                    <button className="btn btn-primary mt-2" onClick={handleNovoAtivo}>Cadastrar</button>
                </div>
            </div>
            {/* Placeholder for the investment report and watchlist */}
            <div className="row">
                <div className="col-12">
                    <h4>Relatório de Investimento</h4>
                    <div id="portfolio-analytics" style={{ height: '300px', backgroundColor: '#f0f0f0' }}>Graph Placeholder</div>
                </div>
            </div>
        </div>
    );
};

export default Transacoes;
