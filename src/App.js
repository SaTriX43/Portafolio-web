import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componente/Header';
import Home from './pages/Home';
import Footer from './componente/Footer';
import About from './pages/About';
import { ProyectsProvider } from './context/proyects';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact';
import { LanguajeProvider } from './context/languaje';
import { ThemeProvider } from './context/theme';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LanguajeProvider>
        <ProyectsProvider>
        <ThemeProvider>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/portafolio' element={<Portafolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          <Footer/>
        </ThemeProvider>
        </ProyectsProvider>
        </LanguajeProvider>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
