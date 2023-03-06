import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {auth,checkUser,signout} from '../../firebase/Config';

function Navbar(props) {
  const [user,setUser] = useState('')
 
const signOut = ()=>{
  signout(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

  useEffect(() => {
    checkUser(auth, (user) => {
      if (user) {
        setUser(user)
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        setUser(null)
        console.log('Signout')
        // User is signed out
        // ...
      }
    });
  }, [user]); 
  
    return (
        <div className='navbar'>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Loading.." />
          <div className='right-container'>
            {user?<div><img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" /><button className='sign-out-button' onClick={signOut}>sign out</button></div>:<Link to="/login"><button className='sign-up-button'>sign in</button></Link>}
           
          
          <Link to="/signup"> 
          <button className='sign-up-button'>join now</button>
          </Link> 
          </div>
        </div>
    );
}

export default Navbar;