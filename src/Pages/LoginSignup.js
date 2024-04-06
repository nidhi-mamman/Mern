import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const LoginSignup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: " ",
    password: " "
  });
  const handleLogin = (e) => {
    e.preventDefault(); //to stop automatic reloading/refresh of page
    const loggeduser = JSON.parse(localStorage.getItem("user")); //to convert into object
    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      navigate('/');
    }
    else {
      alert("Incorrect Credentials");
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin} style={{ height: "20em", width: "30%", padding: "20px", marginLeft: "28em", marginTop: "80px",marginBottom:"50px", border: "1px solid black", borderRadius: "5px" }}>
        <h2 style={{ fontFamily: "serif", marginLeft: "20px" }}>LOGIN PAGE</h2>
        <hr />
        <div style={{ display: "flex" }}>
          <input
            type="email"
            name="email"
            value={input.value}
            onChange={(e) => {
              setInput({
                ...input, [e.target.name]: e.target.value,
              })
            }}
            placeholder="Email"
            style={{ marginBottom: "20px", marginLeft: "20px", width: "80%" }} required />
        </div>

        <input
          type="password"
          name="password"
          value={input.value}
          onChange={(e) => {
            setInput({
              ...input, [e.target.name]: e.target.value,
            })
          }}
          placeholder="Password"
          style={{ marginBottom: "20px", marginLeft: "20px", width: "80%" }} required />

        <button className="btn btn-primary rounded-pill" type="submit" style={{ height: "40px", width: "80%", backgroundColor: "#edede9", color: "black", marginLeft: "20px" }}>Login</button>
        <p style={{ color: "grey", fontSize: "12px", marginLeft: "5em", marginTop: "8px" }}>New Customer?<Link to="/CreateAcc" style={{ textDecoration: "none" }}>Create Account first</Link></p>
      </form>

    </div>
  )
}


export default LoginSignup