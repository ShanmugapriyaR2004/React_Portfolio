import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className="circle"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <a className="navbar-brand" href="#">
          Portfolio sp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavBar"
          aria-controls="myNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavBar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Home{" "}
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                About me
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link  " href="#">
                Skills
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Tools
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav