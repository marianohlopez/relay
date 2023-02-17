import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarqueeNews from './components/home/MarqueeNews';
import Instagram from './components/home/Instagram';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
          <MarqueeNews Texts={["NEWS","NOVEDADES"]} Repeat={10} />
          <Instagram/> 
          <MarqueeNews Texts={["DISCOGRAFIA"]} Repeat={7} />

        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;