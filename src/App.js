import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Product from './Components/Product';
import About from './Components/About'
import Contact from './Components/Contact'

function App(props) {
  const [cartNumb, setCartNumb]=useState();
  const handleCartNumber=(numb)=>{
    setCartNumb(numb);
  }
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
