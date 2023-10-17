import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Iphone15pro from './Components/Iphone15pro';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/iphone15pro' element={<Iphone15pro/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
