import PreNav from './components/PreNav.js';
import Navbar from './components/Navbar'
import './App.css';
import Header from './components/Header'
import Sobre from './components/Sobre'
import Localizacao from './components/Localizacao'
import Formulario from './components/Formulario'
import Footer from './components/Footer.js';
function App() {
  return (
    <>
      <PreNav />
      <Navbar />
      <Header />
      <Sobre />
     <Formulario/>
      <Localizacao />
      <Footer />
    </>
  );
}

export default App;
