import './App.css'
import Navbar from './components/navbar';
import Presentation from './components/presentation';
import SobreMi from './components/sobreMi';
import MainProyect from './components/MainProyect';
import MainSystem from './components/MainSystem';
import Articulos from './components/articulos';
import Contacto from './components/contacto';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="App">
         <Navbar/>
         <Presentation/>
         <SobreMi/>
         <MainProyect/>
         <MainSystem/>
         <Articulos/>
         <Contacto/>
         <Footer/>
      </div>
    </>
  
  );
}

export default App;
