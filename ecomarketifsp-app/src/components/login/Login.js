import React, { useState } from 'react';
import {
  Link, useNavigate
} from "react-router-dom";
import Image from "../../assets/img/cestaDesenho.png";
import './Login.css';
import { signInWithEmailAndPassword, sendPasswordResetEmail  } from 'firebase/auth';
import { auth } from '../../assets/js/env.js';

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword] = useState(false);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
      console.log('User logged in:', userCredential.user);
      navigate("/home");
    } catch (error) {
      alert("Erro ao logar");
      console.error('Error logging in:', error);
    }
  };

  const handleForgotPassword = async () => {
    if (!userEmail) {
      alert("Por favor, insira seu email para recuperar a senha.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, userEmail);
      alert("Email de recuperação de senha enviado!");
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert("Erro ao enviar email de recuperação de senha.");
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
            <h2>Bem-Vindo de volta!</h2>
            <p>Entre com seus dados</p>
            <form onSubmit={handleLogin}>
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

              <div className="login-center-options">
                <a href="/home" className="forgot-pass-link" onClick={handleForgotPassword}>
                  Esqueceu sua senha?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Entrar</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Não tem uma conta? <Link to="/singup">Cadastro</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
