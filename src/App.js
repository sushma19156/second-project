import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import './App.css';
import React, {useState} from 'react';

function App() {

const [type, setType] = useState('password')
const [icon, setIcon] = useState(eyeOff)

const handleToggle=()=>{
  if(type==='password'){
    setIcon(eye);
    setType('text');
  }
  else{
    setIcon(eyeOff);
    setType('password')
  }
}
  return (
    <div className="App">
      <section>
      <div>
        <h1>facebook</h1>
        <br/>
        <p>Facebook helps you to connect <br/> share with the people.</p>
    </div>
    <div className='formbox'>
      <form>
        <input type="email" placeholder="Enter your email-id"/>
        <br/>
        <br/>
        <input type={type} placeholder="Enter password" id="password" /><br/>
        <span className="eye" onClick={handleToggle}>
          <Icon icon={icon}/></span>
        <br/>
        <div className="btn">
            <button >Login</button>
            <br/>
            <br/>
            <a href="List.html">Forgot password?</a>
            <br/>
            <br/>
            <hr/>
            <br/>
            <button >Create New Account</button>
        </div>
      </form>
    </div>
      </section>

    </div>
  );
}

export default App;
