
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import Main from '../main/Main';
import CadCliente from '../cadastroCliente/CadCliente';
import CadProd from '../cadastroProduto/CadProd';
import Login from '../login/Login';
import Singup from '../singup/Singup';
import { AuthProvider } from '../../context/AuthContext';
import ProtectedRoute from '../ProtectedRoute';

const AppContent = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  const isSignupRoute = location.pathname === '/signup';

  return (
    <>
      {!(isLoginRoute || isSignupRoute) && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/produtos" element={<ProtectedRoute element={CadProd} />} />
        <Route path="/cadastro" element={<ProtectedRoute element={CadCliente} />} />
      </Routes>
      {!(isLoginRoute || isSignupRoute) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;