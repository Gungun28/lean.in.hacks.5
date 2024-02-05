import './App.css';
import Store from './pages/Store/Store';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/register/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Store/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
