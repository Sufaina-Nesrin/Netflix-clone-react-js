import  React from 'react';
import Navbar from './Components/NavBar/Navbar';//   src/components/Navbar folder/Navbar js
import './App.css';  // same path
import Banner from './Components/Banner/Banner'; //  src/com/Banner folder /Banner.js

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
    </div>
  );
}

export default App;
