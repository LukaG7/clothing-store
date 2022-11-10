import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
