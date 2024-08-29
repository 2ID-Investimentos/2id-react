import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="d-flex">
            <nav className="sidebar  vh-100">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <h1>Acesso Rapido</h1>
                        <li className="nav-item">
                            <NavLink exact to="/dashboard" className="nav-link text-white" activeClassName="active">
                                <i className="bi bi-house-door-fill"></i> Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/historico" className="nav-link text-white" activeClassName="active">
                                <i className="bi bi-clock-history"></i> Histórico
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/carteira" className="nav-link text-white" activeClassName="active">
                                <i className="bi bi-wallet2"></i> Carteira
                            </NavLink>
                        </li>
                        <h1>Serviços</h1>
                        <li className="nav-item">
                            <NavLink to="/transacoes" className="nav-link text-white" activeClassName="active">
                                <i className="bi bi-cash-coin"></i> Transações
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="content flex-grow-1">
                {/* Coloque aqui o componente da página que você deseja renderizar */}
            </div>
        </div>
    );
};

export default Sidebar;
