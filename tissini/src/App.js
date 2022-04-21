import './App.css';
import { Route, Routes } from 'react-router-dom';

import Error404 from './Page/Error404'
import Index from './Page/Index'
import ShoppingCar from './Page/ShoppingCar.jsx'
import Login from './Page/Login.jsx'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Index />} />
        <Route path='/ShoppingCar' element={<ShoppingCar />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
