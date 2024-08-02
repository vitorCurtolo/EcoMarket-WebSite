
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import './Header.css';
import '../../assets/styles/fonts.css';
import logo from '../../assets/img/logo-2.png';
import CadCliente from '../cadastroCliente/CadCliente';



function Header() {
    return (
        <header>
            <div id="header">
                <div className="header-logo">
                    <a href="indext.html"><img src={logo} alt="" /></a>
                </div>
                <div className="header-list">
                    <nav className="header-list-nav">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/cadastro">Cadastro</Link></li>
                            <li><Link to="/produtos">Contato</Link></li>
                        </ul>
                    </nav>
                    <div className="header-list-icon">
                        <a href=""><i className="fa fa-bag-shopping"></i></a>
                    </div>
                </div>

            </div>

            <div id="header-mob">
                <div className="header-list-mob" id="teste">
                    <nav className="header-list-nav-mob">
                        <ul>
                        <li><Link to="/home">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/cadastro">Cadastro</Link></li>
                            <li><Link to="/produtos">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>

    );
}

export default Header;
