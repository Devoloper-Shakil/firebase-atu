import logo from './logo.svg';
import './App.css';
import Singup from './components/Singup';
import Singin from './components/Singin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
        <Route path="" element={<Home></Home>} />
          <Route path="/singup" element={<Singup></Singup>} />
          <Route path="/singin" element={<Singin></Singin>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
