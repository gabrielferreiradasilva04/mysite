import './App.css';
import LogoImg from './img/BeautyCosméticos.png'
import Products from './components/Products/Products';

function App() {
  return (
    <header>
      <div id='logo-container'>
        <img id='logo-header' src={LogoImg}></img>
      </div>
      <div className='menu-container'>
        <nav id='menu-options'>
          <a href='#cuide-da-sua-pele'>Produtos</a>
          <a href='#nossos-clientes'>Clientes</a>
          <a href='#localizacao'>Localização</a>
          <a href='#main-title'>Utilitários</a>
          <a href='#agendamento'>Agendamento</a>
          <a href='#sobre-nos'>Sobre nós</a>
          <a href='https://uol.com.br' target='_blank'>Notícias</a>
        </nav>
      </div>

    </header>
  );
}

export default App;
