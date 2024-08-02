
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import './CadProd.css';
import '../../assets/styles/fonts.css';
import logo from '../../assets/img/logo-2.png';
import CadCliente from '../cadastroCliente/CadCliente';



function CadProd() { 
    return (
        <main className="mainCadCliente">

            <div className="form-main">
                <div className="form-card">
                    <form action="./cadastroPessoa.html" method="POST">
                        <div className="form-title">
                            <h2 className="">Cadastro de Produto</h2>
                            <p>
                                Cadastre o produto para sua loja!
                            </p>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" name="nome" id="nome" className="form-input" />
                            </div>

                            <div>
                                <label htmlFor="preco" className="form-label"> Preço </label>
                                <input type="text" name="preco" id="preco" className="form-input" required placeholder="R$ 0,00" />
                            </div>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="categoria" className="form-label"> Categoria </label>
                                <input type="text" name="categoria" id="categoria" className="form-input" required placeholder="Frutas/Legumes/Verduras" />
                            </div>

                            <div>
                                <label htmlFor="descricao" className="form-label"> Descrição </label>
                                <input type="text" name="descricao" id="descricao" className="form-input" />
                            </div>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="quantidade" className="form-label"> Estoque </label>
                                <input type="number" name="quantidade" id="quantidade" className="form-input" />
                            </div>

                            <div>
                                <label htmlFor="validade" className="form-label"> Data de Validade </label>
                                <input type="date" name="validade" id="validade" className="form-input" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="imagem" className="form-label">Imagem produto</label>
                            <input type="file" name="imagem" id="imagem" />
                        </div>

                        <input type="button" className="formbold-btn"  value="Enviar" />

                    </form>
                </div>
            </div>
        </main>

    );
}

export default CadProd;
