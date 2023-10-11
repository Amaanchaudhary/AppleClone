import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
