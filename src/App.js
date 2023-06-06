import './App.css';
import { Route, Routes, BrowserRouter as Adidas } from 'react-router-dom';
import Header from './Components/Header';
import Naslovna from './Components/Naslovna';
import Povijest from './Components/Povijest';
import Footer from './Components/Footer';
import Logo from './Components/Logo';
import Trgovina from './Components/Trgovina';

function App() {
  return (
    <div className="App">
      <center>
        <Adidas>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Naslovna />}></Route>
            <Route path='/povijest' element={<Povijest />}></Route>
            <Route path='/logo' element={<Logo />}></Route>
            <Route path='/trgovina' element={<Trgovina />}></Route>
          </Routes>
          <Footer></Footer>
        </Adidas>
      </center>
    </div>
  );
}

export default App;