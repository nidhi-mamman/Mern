import React, { useContext, useState } from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContextProvider'


const Navbar = () => {
  const [menu, setMenu] = useState("Home")
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontFamily: "Lucida Handwriting", fontSize: "35px" }}><img src={logo} style={{ height: "1.5em", width: "1.5em",marginLeft:"2em" }} alt="E-commerce" />ShopZone</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => setMenu("home")}>
                <Link className="nav-link active" to="/" style={{ marginLeft: "7em", marginRight: "2em" }} aria-current="page" >Home{menu === "home" ? <hr /> : <></>}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" style={{ marginLeft: "3em", marginRight: "2em" }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={() => setMenu("men")}><Link className="dropdown-item" to="/men" >Men{menu === "men" ? <hr /> : <></>}</Link></li>
                  <li onClick={() => setMenu("women")}><Link className="dropdown-item" to="/women" >Women{menu === "women" ? <hr /> : <></>}</Link></li>
                  <li onClick={() => setMenu("kids")}><Link className="dropdown-item" to="/kids" >Kids{menu === "kids" ? <hr /> : <></>}</Link></li>
                </ul>
              </li>
              <li className="nav-item" onClick={() => setMenu("contact")}>
                <Link className="nav-link active" to="/contact" aria-current="page" style={{ marginLeft: "3em", marginRight: "5em" }}>Contact{menu === "contact" ? <hr /> : <></>}</Link>
              </li>
            </ul>
              <Link to="/login"> <button className="btn btn-outline-primary my-2" type="submit">Login</button></Link>
              <p style={{ color: "grey", fontSize: "12px", marginLeft: "1em", marginTop: "8px" }}>New Customer?<Link to="/" style={{ textDecoration: "none" }}>Create Account first</Link></p>
              <Link to="/cart"><i className='bx bx-cart bx-md' style={{ color: '#34b9a8', marginTop: "8px" }}></i></Link>
              <div style={{ backgroundColor: "red", color: "white", marginTop: "8px",marginBottom:"2em",marginRight: "5em", textAlign: "center", borderRadius: "50%", height: "1.5em", width: "35px" }}>{getTotalCartItems()}</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar