import  React from 'react';
import Navbar from './Components/NavBar/Navbar';//   src/components/Navbar folder/Navbar js
import './App.css';  // same path
import Banner from './Components/Banner/Banner'; //  src/com/Banner folder /Banner.js
import Rowpost from './Components/Rowpost/Rowpost';
import { action,originals } from './urls';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost title='Netflix Orginals' url={originals} />
     <Rowpost title='Action' isSmall url={action} />
    </div>
  );
}

export default App;
