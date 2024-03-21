import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Categorypa from './pages/categorypage/Categorypa';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Store from './pages/Store/Store';
import Footer from './components/footer/Footer';
import Login from './pages/loginPage/LoginPage';
import Landing from './pages/landing/Landing';
import UserRegister from './pages/userRegister/UserRegister';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || "");

  // useEffect to update user state if local storage changes
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser !== user) {
      setUser(storedUser || "");
    }
  }, [user]); 

  return (
    <>
      <div>
        <Router>
          {!user && <Navigate to="/landing" />}
          <Routes>
            {/* Use Navigate to redirect to register page if user is not logged in */}
            {/* Routes for logged in users */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/purse" element={<Categorypa type="purse" />} />
            <Route exact path="/jewellery" element={<Categorypa type="jewellery" />} />
            <Route exact path="/phonecase" element={<Categorypa type="phonecase" />} />
            <Route exact path="/store" element={<Store user={user} />} />
            <Route exact path="/landing" element={<Landing setUser={setUser} />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/userregister" element={<UserRegister />} />
            <Route exact path="/login" element={<Login type="business" />} />
            <Route exact path="/userlogin" element={<Login type="user" user={user} setUser={setUser} />} />
          </Routes>
          {user && <Footer></Footer>}
        </Router>
      </div>
    </>
  );
}

export default App;
