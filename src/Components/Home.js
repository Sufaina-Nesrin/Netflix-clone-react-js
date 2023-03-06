import React from "react";
import Navbar from './NavBar/Navbar';
  // same path
 import Banner from './Banner/Banner'; 
 import Rowpost from './Rowpost/Rowpost';
import { action,originals,horror,thriller,romantic,comedy } from '../urls';
//  import Signup from './Signup/Signup';

function Home(props) {
   return (
       <div>
         <Navbar/>
    <Banner/>
    <Rowpost title='Popular on Netflix' url={originals} />
    <Rowpost title='Action'  url={action} />
    <Rowpost title='Sci-Fiction'  url={horror} />
    <Rowpost title='Crime-Thriller'  url={thriller} />
    <Rowpost title='Marvel-Movies'  url={romantic} />
    <Rowpost title='Comedy'  url={comedy} />   
       </div>
   );
}

export default Home;