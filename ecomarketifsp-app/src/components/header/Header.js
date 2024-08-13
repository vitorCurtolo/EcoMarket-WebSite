
import {
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import './Header.css';
import '../../assets/styles/fonts.css';
import logo from '../../assets/img/logo-2.png';
import CadCliente from '../cadastroCliente/CadCliente';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <header>
        <div id="header">
          <div className="header-logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="header-list">
            <nav className="header-list-nav">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/login">Log-In</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/listar">Listar</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            &#9776; {/* Ícone de menu hamburguer */}
          </div>
        </div>
  
        {isMobileMenuOpen && (
          <div id="header-mob">
            <div className="header-list-mob" id="teste">
              <nav className="header-list-nav-mob">
                <ul>
                  <li><Link to="/home" onClick={toggleMobileMenu}>Home</Link></li>
                  <li><Link to="/produtos" onClick={toggleMobileMenu}>Produtos</Link></li>
                  <li><Link to="/cadastro" onClick={toggleMobileMenu}>Cadastro</Link></li>
                  <li><Link to="/cadastro" onClick={toggleMobileMenu}>Log-In</Link></li>
                  <li><Link to="/listar" onClick={toggleMobileMenu}>Listar</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
    );
  };


export default Header;
