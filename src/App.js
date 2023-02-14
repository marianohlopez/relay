import './App.css';
import NavBar from './components/Home/navbar/Navbar';
import FontImage from './components/Home/homeImage/Font.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <FontImage />
        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
