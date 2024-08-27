import './Main.css';
import '../../assets/styles/fonts.css';

import hab_1 from '../../assets/img/habilidades/f1.png';
import hab_2 from '../../assets/img/habilidades/f2.png';
import hab_3 from '../../assets/img/habilidades/f3.png';
import hab_4 from '../../assets/img/habilidades/f4.png';
import hab_5 from '../../assets/img/habilidades/f5.png';

import img_tomate from '../../assets/img/tomate.png';
import img_alface from '../../assets/img/alface.png';
import img_batata from '../../assets/img/batata.png';
import img_cenoura from '../../assets/img/cenoura.png';
import img_cestaP from '../../assets/img/P_semBG.png';
import img_cestaM from '../../assets/img/M_semBG.png';
import img_cestaG from '../../assets/img/G_semBG.png';
import img_cestaF from '../../assets/img/F_semBG.png';

import {
    Link
} from "react-router-dom";


function Main() {
    return (
        <main>
            <section id="card">
                <h4>Dia de Feira,</h4>
                <h1>É na EcoMarket</h1>
                <p>Pague menos, coma mais suadável!!</p>
                <Link to="/listar"><button>COMPRE AGORA</button></Link>
            </section>

            <section id="habilidades" className="secao-p1">
                <div className="h-box">
                    <img src={hab_1} alt="compra online" />
                    <h6>Compre Online</h6>
                </div>
                <div className="h-box">
                    <img src={hab_2} alt="envico rápido" />
                    <h6>Envio rápido</h6>
                </div>
                <div className="h-box">
                    <img src={hab_3} alt="economize" />
                    <h6>Economize</h6>
                </div>
                <div className="h-box">
                    <img src={hab_4} alt="promoções" />
                    <h6>Promoções</h6>
                </div>
                <div className="h-box">
                    <img src={hab_5} alt="suporte" />
                    <h6>Suporte 24H</h6>
                </div>
            </section>

            <section className="produto-sec">
                <h1>Nossas Cestas</h1>
                <p>Todos colhidos com muito amor</p>
                <br></br><br></br>
                <div className="pro-colecao">
                    <div className="produto-card">
                        <img src={img_cestaP} alt="imagem produto" />
                        <span>Cesta</span>
                        <h4>Cesta Pequena</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="preco">R$ 24,90</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                    <div className="produto-card">
                        <img src={img_cestaM} alt="imagem produto" />
                        <span>Cesta</span>
                        <h4>Cesta Média</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="preco">R$ 49,90</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                    <div className="produto-card">
                        <img src={img_cestaG} alt="imagem produto" />
                        <span>Cesta</span>
                        <h4>Cesta Grande</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="preco">R$ 74,90</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                    <div className="produto-card">
                        <img src={img_cestaF} alt="imagem produto" />
                        <span>Cesta</span>
                        <h4>Cesta Familia</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="preco">R$ 124,90</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                </div>
            </section>

            <section className="produto-sec">
                <h1>Também Temos Produtos</h1>
                <p>Todos colhidos com muito amor</p>
                <br></br><br></br>
                <div className="pro-colecao">
                    <div className="produto-card">
                        <img src={img_tomate} alt="imagem produto" />
                        <span>Produto</span>
                        <h4>Tomate Holandês</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="preco">R$20,00 kg</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                    <div className="produto-card">
                        <img src={img_alface} alt="imagem produto" />
                        <span>Produto</span>
                        <h4>Alface Americano</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="preco">R$7,00 un</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                    <div className="produto-card">
                        <img src={img_cenoura} alt="imagem produto" />
                        <span>Produto</span>
                        <h4>Cenoura</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>

                        </div>
                        <h4 className="preco">R$10,00 kg</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                    <div className="produto-card">
                        <img src={img_batata} alt="imagem produto" />
                        <span>Produto</span>
                        <h4>Batata</h4>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>

                        </div>
                        <h4 className="preco">R$12,00 un</h4>
                        <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
                    </div>
                </div>
            </section>

            <section id="banners" className="secao-p4">

                <div className="big-banners">
                    <div className="big-banners-1">
                        <h4>A Primavera vem, e com ela chega</h4>
                        <h2>Frutas Da Primavera</h2>
                        <span>Compre frutas da primavera em nosso empório</span>
                        <button className="banner-btn">Saiba Mais</button>
                    </div>

                    <div className="big-banners-2">
                        <h4>O Outono vem, e com ele chega</h4>
                        <h2>Frutas do Outono</h2>
                        <span>Compre frutas do outono em nosso empório</span>
                        <button className="banner-btn">Saiba Mais</button>
                    </div>
                </div>

            </section>

            <section id="noticias">
                <div className="noticias-text">
                    <h3>Fique por dentro das nóticas</h3>
                    <h5>Receba emails sobre promoções e chegada de produtos</h5>
                </div>
                <div className="form">
                    <input type="email" placeholder="Seu e-mail" id="email-input" />
                    <button>Assinar</button>
                </div>
            </section>

        </main>

    );
}

export default Main;
