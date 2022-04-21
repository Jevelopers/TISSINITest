import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer.jsx'
import { Route, Routes } from 'react-router-dom';

import Error404 from './Page/Error404'
import Index from './Page/Index'
import ShoppingCar from './Page/ShoppingCar.jsx'
import Login from './Page/Login.jsx'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Index />} />
        <Route path='/Somos' element={<ShoppingCar />} />
        <Route path='/Somos' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
