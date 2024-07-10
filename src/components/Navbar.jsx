import React from 'react'
import {Link}  from 'react-router-dom'
function Navbar() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid d-flexmx-auto">
    <a className="navbar-brand" href="#">E-Commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link  className="nav-link bg-warning" aria-current="page" to="/">Home</Link>
          <Link className="nav-link bg-warning mx-auto  border border-rounded " aria-current="page" to="/login">login</Link>
          <Link className="nav-link bg-warning mx-auto  border border-rounded" to='/registration'>Registration</Link>
          <Link className="nav-link bg-warning mx-auto  border border-rounded" to='/cart'>cart</Link>
          <Link className="nav-link bg-warning mx-auto  border border-rounded" to='/about'>About</Link>
          <Link className="nav-link bg-warning mx-auto  border border-rounded" to='/contact'>contact</Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar