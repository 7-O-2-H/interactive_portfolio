import React, { useState } from "react";
import '../styles/Registration.css';
import { addUser } from "../helpers/usersHelpers";
import Cookies from "js-cookie";

const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    return addUser(name, email, password)
    .then((data) => {
      console.log(data);
      if(!(data['data'][0])) {
        console.log(data['data'][1]);
      } else {
        setUserId(data['data'][1]);
        Cookies.set(userId, data['data'][1]);
      }
    });
  };


  return (
    
    <form id="register" className="input-group-register" onSubmit={handleSubmit}>
      <input
        type="name"
        className="input-field"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        className="input-field"
        placeholder="Email Id"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        className="input-field"
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <div className="checkbox-container">
        <input type="checkbox" className="check-box" />
        <span>I agree to the terms and conditions</span>
      </div>
      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};
export default Registration;
