import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../assets/js/env';
import './ProdutosList.css'

const ProdutosList = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const querySnapshot = await getDocs(collection(db, 'produtos'));
      const produtosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);

  return (
    <div className="produtos-container-ls">
      <header className="produtos-header-ls">
        <h1>Bem-vindo ao EcoMarket</h1>
        <p>Encontre os melhores produtos frescos e orgânicos para sua família</p>
      </header>

      <section className="produtos-section-ls">
        <h2>Destaques</h2>
        <div className="produtos-list-ls">

          {produtos.map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <a href="#" className="buy-icon"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section className="produtos-section-ls">
        <h2>Legumes</h2>
        <div className="produtos-list-ls">
          {produtos.filter(produto => produto.categoria === 'Legumes').map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <a href="#" className="buy-icon"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section className="produtos-section-ls">
        <h2>Frutas</h2>
        <div className="produtos-list-ls">
          {produtos.filter(produto => produto.categoria === 'Frutas').map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <a href="#" className="buy-icon"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section className="produtos-section-ls">
        <h2>Cestas</h2>
        <div className="produtos-list-ls">
          {produtos.filter(produto => produto.categoria === 'Cestas').map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <a href="#" className="buy-icon"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProdutosList;
