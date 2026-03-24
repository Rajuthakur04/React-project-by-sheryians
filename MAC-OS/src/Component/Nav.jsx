import React from 'react'
import "./Nav.scss"
const Nav = () => {
  return (
    <nav>
        <div className="left">
         <div className="apple-icon">
            <img src="/Doc.icone/apple.png" alt="" />
         </div>
         <div className="nav-item">
            <p>Raju Thakur</p>
         </div>
           <div className="nav-item">
            <p>File</p>
         </div>
           <div className="nav-item">
            <p> Windo</p>
         </div>
          <div className="nav-item">
            <p>Terminal</p>
         </div>
        </div>
        <div className="right"></div>
    </nav>
  )
}

export default Nav
