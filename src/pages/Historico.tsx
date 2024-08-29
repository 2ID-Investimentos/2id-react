import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Historico = () => {
    const [compraData, setCompraData] = useState([]);
    const [vendaData, setVendaData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        axios
            .get('/api/historico')
            .then((response) => {
                setCompraData(response.data.compra);
                setVendaData(response.data.venda);
            })
            .catch((error) => console.error('There was an error fetching the data!', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="my-4">Histórico de Compra</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Stocks</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compraData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.stocks}</td>
                                    <td>{item.value}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="my-4">Histórico de Venda</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Stocks</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendaData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.stocks}</td>
                                    <td>{item.value}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Historico;
