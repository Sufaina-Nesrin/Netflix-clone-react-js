import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {auth,login} from '../../firebase/Config';

function Login(props) {

    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');

    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
     e.preventDefault();

     login(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/')
    // ...
  })
  .catch((error) => {
    alert(error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
    navigate('/login')
  });

   
    }

  return (
    <div>
      <div className="background-banner">
        <div className="navbar">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Loading.."
          />
          <button onClick={()=>{navigate('/signup')}} className="signup-button">Sign up</button>
          {console.log(password,email)}
        </div>
        <div className="content-div">
          <div className="login-div">
            <div className="the-content-div">
              <h1 className="heading">Unlimited movies, TV shows and more.</h1>
              <p className="text">Watch anywhere. Cancel anytime.</p>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
            </div>
            <form>
            <div className="div-nothing">  
                <input className="input1" type="email"placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
              <input className="input2" type="password"placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
              <button className="get-started" onClick={handleSubmit}>GET STARTED</button>
                </form>
               
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;