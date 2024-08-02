
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import Main from '../main/Main';
import CadCliente from '../cadastroCliente/CadCliente';
import CadProd from '../cadastroProduto/CadProd';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                {/* <Route path="/produtos" element={<Produtos />} />
                <Route path="/cadastro" element={<Cadastro />} /> */}
                <Route path="/produtos" element={<CadProd />} />
                <Route path="/cadastro" element={<CadCliente />} />
            </Routes>
            <Footer />
        </Router>
    )

}

export default App;