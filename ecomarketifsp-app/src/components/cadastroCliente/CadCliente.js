import './CadCliente.css';
import '../../assets/styles/fonts.css';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../assets/js/env'


function CadCliente() {

    //formatação de campo telefone
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const { currentUser } = useAuth();

    //dados cliente
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [bairro, setBairro] = useState('');
    const [endereco, setLogradouro] = useState('');
    const [cidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComple] = useState('');

    const handleInputChange = (event) => {
        const input = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        const formattedPhone = formatPhoneNumber(input);
        setPhone(formattedPhone);
    };

    const formatPhoneNumber = (value) => {
        if (!value) return value;

        const phoneNumberLength = value.length;

        if (phoneNumberLength < 3) {
            return `(${value}`;
        }

        if (phoneNumberLength < 8) {
            return `(${value.slice(0, 2)})${value.slice(2)}`;
        }

        return `(${value.slice(0, 2)})${value.slice(2, 7)}-${value.slice(7, 11)}`;
    };

    function cleanFields() {
        document.getElementById("bairro").value = "";
        document.getElementById("cep").value = "";
        document.getElementById("localidade").value = "";
        document.getElementById("logradouro").value = "";
        document.getElementById("uf").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("sobreNome").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("comple").value = "";
        document.getElementById("numero").value = "";
    }

    //consultar api de CEP

    const [setJson] = useState({});


    useEffect(() => {
        const cepInput = document.getElementById("cep");

        const handleBlur = async () => {
            let Cep = cepInput.value;

            if (!Cep.trim()) {
                console.log("CEP está vazio");
                cleanFields();
                return;
            }

            let search = Cep.replace("-", "");

            try {
                const response = await fetch(`https://viacep.com.br/ws/${search}/json/`, {
                    method: "GET",
                    mode: "cors",
                    caches: "default"
                });

                if (!response.ok) {
                    alert("Erro ao buscar CEP");
                    console.error("Erro ao buscar o CEP");
                    cleanFields();
                    return;
                }

                const data = await response.json();
                setJson(data);
                document.getElementById("bairro").value = data.bairro || '';
                document.getElementById("localidade").value = data.localidade || '';
                document.getElementById("logradouro").value = data.logradouro || '';
                document.getElementById("uf").value = data.uf || '';
            } catch (error) {
                alert("Erro ao buscar CEP");
                console.error("Erro ao buscar o CEP:", error);
                cleanFields();
            }
        };

        cepInput.addEventListener("blur", handleBlur);

        return () => {
            cepInput.removeEventListener("blur", handleBlur);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, 'clientes'), {
                nome,
                sobreNome,
                email: currentUser.email,
                phone,
                uf,
                cidade,
                cep,
                endereco,
                bairro,
                numero,
                complemento,
                createdAt: new Date()
            });

            alert("Cadastro realizado!!");
            console.log('Cliente cadastrado com sucesso!');
            cleanFields();

        } catch (error) {
            alert("Erro ao cadastrar !");
            console.error('Erro ao cadastrar cliente:', error);
            cleanFields();
        }
    };

    return (
        <main className="mainCadCliente">

            <div className="form-main">
                <div className="form-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-title">
                            <h2 className="">Cadastro de Clientes</h2>
                            <p>
                                Cadastre-se e fique por dentro das mais novas atualizações e promoções!
                            </p>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    className="form-input"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required />
                            </div>

                            <div>
                                <label htmlFor="sobreNome" className="form-label"> Sobrenome </label>
                                <input
                                    type="text"
                                    name="sobreNome"
                                    id="sobreNome"
                                    value={sobreNome}
                                    onChange={(e) => setSobreNome(e.target.value)}
                                    className="form-input"
                                    required />
                            </div>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="phone" className="form-label"> Telefone </label>
                                <input
                                    className='form-input'
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handleInputChange}
                                    placeholder="Digite seu telefone"
                                    maxLength="14"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cep" className="form-label"> CEP </label>
                                <input
                                    type="text"
                                    name="cep"
                                    id="cep"
                                    maxLength="9"
                                    className="form-input"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    required
                                />
                            </div>

                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="bairro" className="form-label"> Bairro </label>
                                <input
                                    type="text"
                                    name="bairro"
                                    id="bairro"
                                    className="form-input"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                    required />
                            </div>

                            <div>
                                <label htmlFor="logradouro" className="form-label">Endereço</label>
                                <input
                                    type="text"
                                    name="logradouro"
                                    id="logradouro"
                                    className="form-input"
                                    value={endereco}
                                    onChange={(e) => setLogradouro(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="localidade" className="form-label"> Cidade </label>
                                <input
                                    type="text"
                                    name="localidade"
                                    id="localidade"
                                    className="form-input"
                                    value={cidade}
                                    onChange={(e) => setLocalidade(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="uf" className="form-label"> Estado </label>
                                <input
                                    type="text"
                                    name="uf"
                                    id="uf"
                                    className="form-input"
                                    value={uf}
                                    onChange={(e) => setUf(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="form-input-flex">
                            <div>
                                <label htmlFor="numero" className="form-label"> Número </label>
                                <input
                                    type="text"
                                    name="numero"
                                    id="numero"
                                    className="form-input"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="comple" className="form-label"> Complemento </label>
                                <input
                                    type="text"
                                    name="comple"
                                    id="comple"
                                    className="form-input"
                                    value={complemento}
                                    onChange={(e) => setComple(e.target.value)}
                                />
                            </div>
                        </div>

                        <button className="formbold-btn" type="submit">Cadastrar</button>

                    </form>
                </div>
            </div>

        </main>
    );
}

export default CadCliente;
