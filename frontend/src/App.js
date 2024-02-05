import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categorypa from './pages/categorypage/Categorypa';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Store from './pages/Store/Store';
import Footer from './components/footer/Footer';

function App() {
  const user = true; // You can replace this with your authentication logic

  return (
    <>
      <div>
      <Router>
        <Routes>
          {user ? (
            <>
            <Route exact path="/" element={<Home/>} />
              <Route exact path="/purse" element={<Categorypa type="purse" />} />
              <Route exact path="/jewellery" element={<Categorypa type="jewellery" />} />
              <Route exact path="/phonecase" element={<Categorypa type="phonecase" />} /> 
              <Route exact path="/store" element={<Store/>} />  
              <Route exact path="/register" element={<Register/>} />            
            </>
          ):(<Route exact path="/register" element={<Register/>} />)}
        </Routes>
        {user &&<Footer></Footer>}
      </Router>
    </div>
    </>
  );
}

export default App;
