import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
    return (
        <Header className="header">
            <div className="header-container">
                <h1 className="logo">ServiConecta</h1>

                <nav>
                    <ul className="menu">
                        <li><link to="/prestadores">Prestadores</link></li>
                        <li><link to="/voluntariado">Voluntariado</link></li>
                        <li><link to="/sobre">Sobre</link></li>
                        <li><link to="/contato">Contato</link></li>
                        <li>
                            <link to="/login" className="login-btn">Entrar</link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>
    );
}