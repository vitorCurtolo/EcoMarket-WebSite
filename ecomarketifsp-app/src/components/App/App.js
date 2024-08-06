
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import Main from '../main/Main';
import CadCliente from '../cadastroCliente/CadCliente';
import CadProd from '../cadastroProduto/CadProd';
import Login from '../login/Login';
import Singup from '../singup/Singup';

const AppContent = () => {
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';
    const isSingupRoute = location.pathname === '/singup';
  
    return (
      <>
        {!(isLoginRoute || isSingupRoute) && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/produtos" element={<CadProd />} />
          <Route path="/cadastro" element={<CadCliente />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
        {!(isLoginRoute || isSingupRoute) && <Footer />}
      </>
    );
  };
  
  const App = () => {
    return (
      <Router>
        <AppContent />
      </Router>
    );
  };
  
  export default App;