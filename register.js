import { useState } from 'react';
import axios from 'axios';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
    dateOfBirth: '',
    password: '',
  });

  const { name, email, phoneNumber, aadharNumber, dateOfBirth, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res); // Log the entire response
      alert(res?.data?.message);
    } catch (err) {
      console.error(err); // Log any error response
      alert(err?.response?.data?.message || 'Registration failed');
    }
  };
  
  

  return (
    <div className="register-container">
      <form onSubmit={onSubmit}>
        <h2>Register</h2>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="text" name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="Phone Number" required />
        <input type="text" name="aadharNumber" value={aadharNumber} onChange={onChange} placeholder="Aadhar Number" required />
        <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={onChange} required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
