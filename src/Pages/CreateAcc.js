import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateAcc = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    name: " ",
    email: " ",
    password: " "
  });
  // to store values in local storage
  const handleSubmit=(e)=>{
    e.preventDefault();    // to stop reloading
    localStorage.setItem("user",JSON.stringify(input)) // to convert into string because localstorage cannot store objects
    alert("Account Created Successfully");
    navigate('/login')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} style={{ height: "22em", width: "30%", padding: "20px", marginLeft: "28em", marginTop: "80px",marginBottom:"50px", border: "1px solid black", borderRadius: "5px" }}>
          <h2 style={{ fontFamily: "serif", marginLeft: "20px" }}>Create Account</h2>
          <hr />
          <input
            type="username"
            name="name"
            value={input.value}
            onChange={(e) => {
              setInput({
                ...input, [e.target.name]: e.target.value,
              })
            }}
            id="name"
            placeholder="Username"
            style={{ marginBottom: "20px", marginLeft: "20px", width: "80%" }} required />

          <input
            type="email"
            name="email"
            value={input.value}
            onChange={(e) => {
              setInput({
                ...input, [e.target.name]: e.target.value,
              })
            }}
            id="email"
            placeholder="Email"
            style={{ marginBottom: "20px", marginLeft: "20px", width: "80%" }} required />

          <input
            type="password"
            name="password"
            value={input.value}
            onChange={(e) => {
              setInput({
                ...input, [e.target.name]: e.target.value,
              })
            }}
            id="password"
            placeholder="Password"
            style={{ marginBottom: "20px", marginLeft: "20px", width: "80%", position: "relative" }} required />

          <button className="btn btn-primary rounded-pill" type="submit" style={{ height: "40px", width: "80%", backgroundColor: "#edede9", color: "black", marginLeft: "20px" }}>Sign Up</button>

          <p style={{ color: "grey", fontSize: "12px", marginLeft: "8em", marginTop: "8px" }}>Already Customer?<Link to="/CreateAcc" style={{ textDecoration: "none" }}>Login</Link></p>
        </form>

      </div>
    </>
  )
}

export default CreateAcc