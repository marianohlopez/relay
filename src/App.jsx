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
          <MarqueeNews Texts={["NEWS","NOVEDADES"]} />
          <Instagram/> 
          <MarqueeNews Texts={["DISCOGRAFIA"]} />

        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
