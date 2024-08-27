import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../assets/js/env';
import './ProdutosList.css'
import { useAuth } from '../../context/AuthContext';

const ProdutosList = () => {

  const { currentUser } = useAuth();

  //banco de dados
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);

  //carrinho
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  //lógica dos modais
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarForm, setMostrarForm] = useState(false);

  //variáveis do cliente
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [totalCompra, setTotalCompra] = useState('');

  const [isButtonDisabled, setButtonEnabled] = useState(false);

  const styles = {

    /* buttons enable and disable */
    disabledButton: {
      backgroundColor: 'gray',
    },

    enabledButton: {
      backgroundColor: '#066861',
    }

  }

  useEffect(() => {
    const fetchProdutos = async () => {
      const querySnapshot = await getDocs(collection(db, 'produtos'));
      const produtosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    const fetchProdutos = async () => {
      const querySnapshot = await getDocs(collection(db, 'clientes'));
      const clientesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setClientes(clientesData);
    };

    fetchProdutos();
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const novoTotal = total + parseFloat(produto.preco);
    setCarrinho([...carrinho, produto]);
    setTotal(parseFloat(novoTotal.toFixed(2)));
  };


  const removerDoCarrinho = (index) => {
    const itemRemovido = carrinho[index];
    const novoTotal = total - parseFloat(itemRemovido.preco);
    setCarrinho(carrinho.filter((_, i) => i !== index));
    setTotal(parseFloat(novoTotal.toFixed(2)));
  };

  const toggleModal = () => {
    if (currentUser) {
      setMostrarModal(!mostrarModal);
    }
    else { alert("É PRECISO ESTAR LOGADO") }
  };

  const toggleForm = () => {
    toggleModal();
    setMostrarForm(!mostrarForm)
  }

  const concluirCompra = () => {
    setMostrarForm(false);
    setMostrarForm(false);
    alert("PEDIDO REGISTRADO!!");
    setButtonEnabled(false);
    zerarVariaveis();
  }

  const zerarVariaveis = () => {
    setCarrinho([]);
    setTotal(0);
    setEmail("");
    setEndereco("");
    setNome("");
    setNumero("");
    setNumero("");
    setTelefone("");
    setTotalCompra("");
  }

  const procurarCliente = () => {

    const dados = clientes.find(cliente => cliente.email.toLowerCase() === email.toLowerCase());

    if (dados) {
      setButtonEnabled(true);
      setNome(dados.nome);
      setEndereco(dados.endereco);
      setNumero(dados.numero);
      setTelefone(dados.telefone);
      setTotalCompra(total + 10);
    } else {
      setButtonEnabled(false);
      alert("EMAIL NÃO CADASTRADO!!");
    }

  }

  return (
    <div className="produtos-container-ls">
      <header className="produtos-header-ls">
        <h1>Bem-vindo ao EcoMarket</h1>
        <p>Encontre os melhores produtos frescos e orgânicos para sua família</p>
      </header>

      <input
        type="submit"
        className="formbold-btn-ls"
        value={`Concluir compra: R$ ${total}`}
        onClick={toggleModal}
      />

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
              <button onClick={() => adicionarAoCarrinho(produto)} className="buy-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="produtos-section-ls">
        <h2>Legumes</h2>
        <div className="produtos-list-ls">
          {produtos.filter(produto => produto.categoria === 'legumes').map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <button onClick={() => adicionarAoCarrinho(produto)} className="buy-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="produtos-section-ls">
        <h2>Frutas</h2>
        <div className="produtos-list-ls">
          {produtos.filter(produto => produto.categoria === 'frutas').map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <button onClick={() => adicionarAoCarrinho(produto)} className="buy-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="produtos-section-ls">
        <h2>Cestas</h2>
        <div className="produtos-list-ls">
          {produtos.filter(produto => produto.categoria === 'cestas').map((produto, index) => (
            <div className="produto-card-ls" key={index}>
              <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              <span>{produto.categoria}</span>
              <h4>{produto.nome}</h4>
              <h3>{produto.descricao} </h3>
              <h4 className="preco">R${produto.preco}</h4>
              <button onClick={() => adicionarAoCarrinho(produto)} className="buy-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      {mostrarModal && (
        <div className="modal-carrinho">
          <div className="modal-content">
            <h2>Carrinho de Compras</h2>
            <ul>
              {carrinho.map((item, index) => (
                <li key={index}>
                  {item.nome} - R${item.preco}
                  <button className='removeButton' onClick={() => removerDoCarrinho(index)}>Remover</button>
                </li>
              ))}
            </ul>
            <div className="modal-footer">
              <button className='closeButton' onClick={toggleModal}>Fechar</button>
              <button style={total === 0 ?
                styles.disabledButton : styles.enabledButton}
                disabled={total === 0} className='buyButton' onClick={toggleForm}>Prosseguir</button>
            </div>
          </div>
        </div>
      )}


      {mostrarForm && (
        <div className="modal-carrinho">
          <div className="modal-content">
            <h2> Compras</h2>
            <input
              type="text"
              id="nome"
              className="form-input-ls"
              placeholder='Entre com seu e-mail cadastrado'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className='pesquisarButton' onClick={procurarCliente}>Procurar Cliente</button>


            <label htmlFor="nome" className="form-label">Confirme seus dados</label>


            <div className="form-input-flex">

              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder='Nome'
                value={nome}
                readOnly
              />

              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder='Telefone'
                value={telefone}
                readOnly
              />

            </div>

            <div className="form-input-flex">

              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder='endereço'
                value={endereco}
                readOnly
              />


              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder='Número'
                value={numero}
                readOnly
              />

            </div>

            <label htmlFor="nome" className="form-label">Total + FRETE R$10,00</label>
            <input
              type="text"
              id="nome"
              className="form-input"
              value={totalCompra}
              readOnly
            />

            <div className="modal-footer">
              <button className='closeButton' onClick={toggleForm}>Fechar</button>
              <button style={!isButtonDisabled ?
                styles.disabledButton : styles.enabledButton}
                disabled={!isButtonDisabled} className='buyButton' onClick={concluirCompra}>Concluir Compra</button>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default ProdutosList;
