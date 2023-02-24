import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarqueeNews from './components/home/MarqueeNews';
import Instagram from './components/novedades/Instagram';
import Videogif from './components/discografia/Videogif';
import Biografia from './components/biografia/Biografia';
import AlbumCarousel from './components/albumCarousel/AlbumCarousel';
import "@fontsource/roboto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
          <MarqueeNews Texts={["NEWS","NOVEDADES"]} Repeat={10} />
          <Instagram/> 
          <MarqueeNews Texts={["DISCOGRAFIA"]} Repeat={10} />
          <AlbumCarousel id={"carousel"} />
          <Videogif id={"videos"} />
          <MarqueeNews Texts={["BIOGRAFIA"]} Repeat={12} />
          <Biografia id={"biografia"} />
          <MarqueeNews Texts={["TOURS"]} Repeat={15} />

        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
