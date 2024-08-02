
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

            <div class="form-main">
                <div class="form-card">
                    <form action="./cadastroPessoa.html" method="POST">
                        <div class="form-title">
                            <h2 class="">Cadastro de Produto</h2>
                            <p>
                                Cadastre o produto para sua loja!
                            </p>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" name="nome" id="nome" class="form-input" />
                            </div>

                            <div>
                                <label for="preco" class="form-label"> Preço </label>
                                <input type="text" name="preco" id="preco" class="form-input" required placeholder="R$ 0,00" />
                            </div>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="categoria" class="form-label"> Categoria </label>
                                <input type="text" name="categoria" id="categoria" class="form-input" required placeholder="Frutas/Legumes/Verduras" />
                            </div>

                            <div>
                                <label for="descricao" class="form-label"> Descrição </label>
                                <input type="text" name="descricao" id="descricao" class="form-input" />
                            </div>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="quantidade" class="form-label"> Estoque </label>
                                <input type="number" name="quantidade" id="quantidade" class="form-input" />
                            </div>

                            <div>
                                <label for="validade" class="form-label"> Data de Validade </label>
                                <input type="date" name="validade" id="validade" class="form-input" />
                            </div>
                        </div>

                        <div>
                            <label for="imagem" class="form-label">Imagem produto</label>
                            <input type="file" name="imagem" id="imagem" />
                        </div>

                        <input type="button" class="formbold-btn" onclick="enviar()" value="Enviar" />

                    </form>
                </div>
            </div>
        </main>

    );
}

export default CadProd;
