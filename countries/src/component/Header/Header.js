import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className='header'>
        <div className="logo-box">
          <div className='logo'>x</div>
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Single Page app</span>
            <span className="heading-primary-sub">App That performs CRUD</span>
          </h1>

          <a href="#form" className="btn btn-white btn-animated">
            Add country now
          </a>
        </div>
      </div>
    );
}

export default Header
