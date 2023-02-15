import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
