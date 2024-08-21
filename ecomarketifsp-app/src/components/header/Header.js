
import {
    Link
} from "react-router-dom";
import React, { useState, useEffect   } from 'react';
import './Header.css';
import '../../assets/styles/fonts.css';
import logo from '../../assets/img/logoEcoMarket.png';
import CadCliente from '../cadastroCliente/CadCliente';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const auth = getAuth();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setIsLogged(true);
          } else {
              setIsLogged(false);
          }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
  }, [auth]);

  const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const signOutUser = () => {
      signOut(auth).then(() => {
        alert("Usuário desconectado!!")
          console.log('Sign-out successful.');
      }).catch((error) => {
          console.error('An error happened:', error);
      });
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
                          {!isLogged && (<li><Link to="/login">Sign-in</Link></li>)}
                          {isLogged && (<li><a onClick={signOutUser}>Sign-out</a></li>)}
                          <li><Link to="/produtos">Cadastro Produto</Link></li>
                          <li><Link to="/cadastro">Cadastro Cliente</Link></li>
                          <li><Link to="/listar">Produtos</Link></li>
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
                  <li><Link to="/produtos" onClick={toggleMobileMenu}>Cadastro Produto</Link></li>
                  <li><Link to="/cadastro" onClick={toggleMobileMenu}>Cadastro Cliente</Link></li>
                  <li><Link to="/cadastro" onClick={toggleMobileMenu}>Log-In</Link></li>
                  <li><Link to="/listar" onClick={toggleMobileMenu}>Produtos</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
    );
  };


export default Header;
