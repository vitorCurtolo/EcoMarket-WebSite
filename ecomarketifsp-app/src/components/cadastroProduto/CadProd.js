import './CadProd.css';
import '../../assets/styles/fonts.css';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../assets/js/env';


function CadProd() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [validade, setValidade] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'produtos'), {
        nome,
        preco,
        categoria,
        descricao,
        quantidade,
        validade,
        imagem
      });
      console.log('Produto registrado com ID: ', docRef.id);
      alert('Produto cadastrado com sucesso!');

      // Limpar os campos do formulário
      setNome('');
      setPreco('');
      setCategoria('');
      setDescricao('');
      setQuantidade('');
      setValidade('');
      setImagem(null);
    } catch (e) {
      console.error('Erro ao adicionar produto: ', e);
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <main className="mainCadCliente">
      <div className="form-main">
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-title">
              <h2>Cadastro de Produto</h2>
              <p>Cadastre o produto para sua loja!</p>
            </div>

            <div className="form-input-flex">
              <div>
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                  type="text"
                  id="nome"
                  className="form-input"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="preco" className="form-label">Preço</label>
                <input
                  type="text"
                  id="preco"
                  className="form-input"
                  required
                  placeholder="R$ 0,00"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}

                />
              </div>
            </div>

            <div className="form-input-flex">
              <div>
                <label htmlFor="categoria" className="form-label">Categoria</label>
                <select
                  id="categoria"
                  className="form-input"
                  required
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="frutas">Frutas</option>
                  <option value="legumes">Legumes</option>
                  <option value="cestas">Cestas</option>
                </select>
              </div>

              <div>
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <input
                  type="text"
                  id="descricao"
                  className="form-input"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-input-flex">
              <div>
                <label htmlFor="quantidade" className="form-label">Estoque</label>
                <input
                  type="number"
                  id="quantidade"
                  className="form-input"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="validade" className="form-label">Data de Validade</label>
                <input
                  type="date"
                  id="validade"
                  className="form-input"
                  placeholder="dd-mm-yyyy"
                  min="1997-01-01" max="2050-12-31"
                  value={validade}
                  onChange={(e) => setValidade(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="imagem" className="form-label">Imagem produto</label>
              <input
                type="text"
                placeholder='imagem URL'
                id="imagem"
                className="form-input"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
              />
            </div>

            <input type="submit" className="formbold-btn" value="Enviar" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default CadProd;
