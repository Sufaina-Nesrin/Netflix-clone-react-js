import React,{useState,useContext} from 'react';

import './Signup.css';
import {auth, create} from '../../firebase/Config';
import {useNavigate} from "react-router-dom"





function Signup(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();

      create(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
    console.log(user.uid);
    
    alert('success')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  navigate("/login") 
 };
      
   
    return (
        <div>
          <div className='background-banner'>
            <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Loading.." />
            </div>
          
            <div className='signup-div'>
              <div className='header'>
                <h1>Sign In</h1>
              </div>
              <div></div>
                <div className='input-div' >
                <form onSubmit={handleSubmit}>
      
      <input className='input-box'
        type="email"
        id="email"
        placeholder='Email or Phone'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      
      <input className='input-box'
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input className='submit-button' value="Sign In" type="submit"/>
     
      
    
    </form>
       </div>
       
  
       <div class="container">
  <div class="box1" ><input type="checkbox"/><labele>Remember me</labele></div>
  <div class="box2" ><lable>Need help?</lable></div>
</div>

<div className='container-2'>
<div><p style={{color:"#737373"}}>New to Netflix? <a>Sign up now</a>.</p><br></br></div>
<div style={{marginTop:"3px",color:"#737373"}}><p style={{fontSize:" 0.8em",fontWeight:500}}>This page is protected by Google reCAPTCHA to<br></br> ensure you're not a bot. Learn more.</p></div>
</div>
</div>

<div  className='footer-div'>
  <div style={{padding:"45px"}}>
    <h4>Questions? Call 000-800-919-1694</h4>
  <div className='flex-div'  >
  <p className='paragraph' >FAQ</p>
  <p className='paragraph'>Help center</p>
  <p className='paragraph'>Terms of Use</p>
  <p className='paragraph'>Privacy</p>
    </div>
   
    <div className='flex-div'  >
  <p className='paragraph'>Cookie Preferences</p>
  <p className='paragraph'>Corporate Information</p>
    </div>

</div>
  </div>
    

            </div>   
        </div>
    );
}

export default Signup;