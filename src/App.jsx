import './App.css';
import Home from './components/home/Home';
import { BrowserRouter } from 'react-router-dom';
import MarqueeNews from './components/home/MarqueeNews';
import Instagram from './components/novedades/Instagram';
import Videogif from './components/discografia/Videogif';
import Biografia from './components/biografia/Biografia';
import AlbumCarousel from './components/albumCarousel/AlbumCarousel';
import "@fontsource/roboto";
import Footer from './components/footer/Footer';
import Tours from './components/fechas/Tours';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
          <MarqueeNews Texts={["NEWS","NOVEDADES"]} Repeat={10} />
          <Instagram/> 
          <MarqueeNews Texts={["DISCOGRAFIA"]} Repeat={10} />
          <AlbumCarousel />
          <Videogif />
          <MarqueeNews Texts={["BIOGRAFIA"]} Repeat={12} />
          <Biografia />
          <MarqueeNews Texts={["FECHAS"]} Repeat={15} />
          <Tours />
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
