import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

 

  const handleIconClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };


 
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
  navigate('/');
  };
  return (
    <div className="">
      <nav className="navbar">

      <div className='row'>
        <div className='col'> 
        <div className="navbar-brand">
          <span className='small-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bell" viewBox="0 0 26 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </span>
        </div>
</div>
        <div className='col'>
        <div className="thtt">
      <div className="custom-input">
        <div className="input-container">
          <img
            src="images/Ellipse 5.png"
            alt="icon"
            className="left-icon"
          />
          <input type="text" className="form-control" placeholder="" />
          <div className="right-icon" onClick={handleIconClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
        
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
    </div>
      </div>
       
      </nav>
    </div>
  );
}

export default Navbar;
