import { useState } from 'react';
import HeaderContent from '../HomePage/HeaderContent/HeaderContent';
import Footer from '../HomePage/Footer/Footer';
import './Login.css';

function Login() {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    //request to the backend
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UserName, Password }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <HeaderContent />
      <div className="container1">
      <div className="header1">
        <h2 className="text1">Login</h2>
          <form onSubmit={handleLogin}>
          <div className="inputs1">
            <div className="input1">
              <input type="text"  placeholder="User Name" value={UserName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="input1">
              <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
              <button type="submit" className="submit1">Submit</button>
          </div>
          </form>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Login;
