import './CadCliente.css';
import '../../assets/styles/fonts.css';


function CadCliente() {
    return (
        <main className = "mainCadCliente">

            <div class="form-main">
                <div class="form-card">
                    <form action="./cadastroPessoa.html" method="POST">
                        <div class="form-title">
                            <h2 class="">Cadastro de Clientes</h2>
                            <p>
                                Cadastre-se e fique por dentro das mais novas atualizações e promoções!
                            </p>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" name="nome" id="nome" class="form-input" />
                            </div>

                            <div>
                                <label for="sobreNome" class="form-label"> Sobrenome </label>
                                <input type="text" name="sobreNome" id="sobreNome" class="form-input" />
                            </div>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="email" class="form-label"> Email </label>
                                <input type="email" name="email" id="email" class="form-input" required placeholder="seuemail@dominio.com" />
                            </div>
                            <div>
                                <label for="phone" class="form-label"> Telefone </label>
                                <input type="text" name="phone" id="phone" oninput="formatPhoneNumber()" class="form-input" required placeholder="(XX) XXXXX-XXXX" />
                            </div>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="cep" class="form-label"> CEP </label>
                                <input type="text" name="cep" id="cep" maxlength="8" class="form-input" />
                            </div>
                            <div>
                                <label for="bairro" class="form-label"> Bairro </label>
                                <input type="text" name="bairro" id="bairro" class="form-input" />
                            </div>
                        </div>

                        <div class="form-input-g">
                            <label for="logradouro" class="form-label">Endereço</label>
                            <input type="text" name="logradouro" id="logradouro" class="form-input" />
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="localidade" class="form-label"> Cidade </label>
                                <input type="text" name="localidade" id="localidade" class="form-input" />
                            </div>
                            <div>
                                <label for="uf" class="form-label"> Estado </label>
                                <input type="text" name="uf" id="uf" class="form-input" />
                            </div>
                        </div>

                        <div class="form-input-flex">
                            <div>
                                <label for="numero" class="form-label"> Número </label>
                                <input type="text" name="numero" id="numero" class="form-input" />
                            </div>
                            <div>
                                <label for="comple" class="form-label"> Complemento </label>
                                <input type="text" name="comple" id="comple" class="form-input" />
                            </div>
                        </div>

                        <input type="button" class="formbold-btn" onclick="enviar()" value="Enviar" />

                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadCliente;
