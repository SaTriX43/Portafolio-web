import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Main from './componentes/Main';
import { ProyectosProvider } from './context/proyectosContext';
import { TamanioProvider } from './context/tamanioContext';
import { TemaProvider } from './context/temaContext';

function App() {
  return (
    <ProyectosProvider>
    <TamanioProvider>
    <TemaProvider>
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    </TemaProvider>
    </TamanioProvider>
    </ProyectosProvider>
  );
}

export default App;
