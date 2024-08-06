import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import Image from "../../assets/img/cestaDesenho.png";
import Logo from "../../assets/img/logo.png";
import GoogleSvg from "../../assets/img/icons8-google.svg";

import './Login.css';



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


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
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Senha" />
                
                
              </div>

              <div className="login-center-options">
                <a href="#" className="forgot-pass-link">
                  Esqueceu sua senha?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
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