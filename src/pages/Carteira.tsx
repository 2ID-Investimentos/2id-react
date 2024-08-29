import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carteira = () => {
    const [carteiraData, setCarteiraData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        axios.get('/api/carteira')
            .then(response => {
                setCarteiraData(response.data);
            })
            .catch(error => console.error("There was an error fetching the data!", error));
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Carteira</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Stocks</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Crescimento</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Setores</th>
                    </tr>
                </thead>
                <tbody>
                    {carteiraData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.stocks}</td>
                            <td>{item.value}</td>
                            <td className={item.growth >= 0 ? "text-success" : "text-danger"}>
                                {item.growth}%
                            </td>
                            <td>{item.quantidade}</td>
                            <td>{item.sectors}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Carteira;
