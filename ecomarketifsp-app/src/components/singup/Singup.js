import React, { useState } from "react";
import {
  Link, useNavigate 
} from "react-router-dom";
import Image from "../../assets/img/cestaDesenho.png";
import './Singup.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../assets/js/env.js';

import './Singup.css';



const Singup = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword] = useState(false);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      
      //alerta para usuário
      console.log('User signed up:', userCredential.user);
      alert("Usuário cadastrado com sucesso");

      //limpar campos de login
      document.getElementById("userEmail").value = "";
      document.getElementById("userPassword").value = "";

      //redireciona
      navigate("/home");

    } catch (error) {

      console.error('Error signing up:', error);
      alert("Erro ao cadastrar", error);

      //limpar campos de login
      document.getElementById("userEmail").value = "";
      document.getElementById("userPassword").value = "";
    }
  };


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Bem-Vindo ao EcoMarket</h2>
            <p>Faça seu cadastro aqui!</p>
            <form onSubmit={handleSignup}>
              <input
                type="email"
                id="userEmail"
                placeholder="Email"
                value={userEmail}
                onChange={handleEmailChange}
              />
              <div className="pass-input-div">
                <input
                  id="userPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={userPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="login-center-buttons">
                <button type="submit">Cadastre-se</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Já tem uma conta? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;