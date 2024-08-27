import './Footer.css';
import '../../assets/styles/fonts.css';
import img_payments from '../../assets/img/pay.png';


function Footer() {
  return (
    <footer>
      <div className="testeFooter" id="footer">
        <div className="contato">
          <h3>Contato</h3>
          <address>
            <p><b>Endereço:</b> Fazenda Sant' Antônio, MG - BR</p>
            <p><b>Telefone:</b> +55 (19) 9 999001020</p>
            <p><b>Funcionamento</b> 8:00 - 20:00. Seg - Sex</p>
          </address>
          <h3>Redes Sociais</h3>
          <br />
          <div className="sociais">
            <a href="/home"><i className="fa-brands fa-facebook-square"></i></a>
            <a href="/home"><i className="fa-brands fa-youtube"></i></a>
            <a href="/home"><i className="fa-brands fa-telegram"></i></a>
            <a href="/home"><i className="fa-brands fa-instagram"></i></a>
            <a href="/home"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="sobre">
          <h3>Sobre</h3>
          <br />
          <a href="/home">Sobre Nós</a>
          <a href="/home">Infomações de entrega</a>
          <a href="/home">Política de privacidade</a>
          <a href="/home">Termos e condições</a>
          <a href="/home">Nos contate</a>
        </div>
        <div className="conta ">
          <h3>Conta</h3>
          <br />
          <a href="/home">Entrar</a>
          <a href="/home">Compras</a>
          <a href="/home">Carrinho</a>
          <a href="/home">Rastrear Pedido</a>
          <a href="/home">Ajuda</a>
        </div>
        <div className="pagamento">
          <h3>Pagamentos</h3>
          <br />
          <p>Site Seguro - Pagamentos Seguros</p>
          <img src={img_payments} alt="" />
        </div>

      </div>

    </footer>
  );
}

export default Footer;
