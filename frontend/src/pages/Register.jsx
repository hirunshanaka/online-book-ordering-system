import React, { useState } from 'react';
import '../App.css';
import HeaderContent from '../HomePage/HeaderContent/HeaderContent';
import './Register.css';
import Footer from '../HomePage/Footer/Footer';

function Register() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [UserName, setUserName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [action] = useState('Register');

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ FirstName, LastName, UserName, PhoneNumber, Email, Password }),
      });
  
      if (!response.ok) {
       
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.success) {
        alert('Thank you for your successful registration');
      } else {
        alert(`Registration failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      // catch any errors
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };
  

  return (
    <>
      <HeaderContent />
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
        </div>
        <form onSubmit={handleRegister}>
          <div className='inputs'>
            <div className='input'>
              <input type="text" placeholder="FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='input'>
              <input type="text" placeholder="LastName" value={LastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='input'>
              <input type="text" placeholder="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className='input'>
              <input type="tel" placeholder="PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className='input'>
              <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='input'>
              <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className='submit'>Register</button>
        </form>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}

export default Register;
