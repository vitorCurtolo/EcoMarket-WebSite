import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import Image from "../../assets/img/cestaDesenho.png";
import Logo from "../../assets/img/logo.png";
import GoogleSvg from "../../assets/img/icons8-google.svg";

import './Singup.css';



const Singup = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>EcoMarket</h2>
            <p>Faça seu cadastro aqui!</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Senha" />
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Já possue conta? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;