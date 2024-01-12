

import React, { useState } from 'react';
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isAdministratorOpen, setAdministratorOpen] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [isAdminTerritoryOpen, setAdminTerritoryOpen] = useState(false)
  const [isAdminBloodOpen, setAdminBloodOpen] = useState(false)
  const [isAdminProfileOpen, setAdminProfileOpen] = useState(false)
  const [isAdminAttendanceOpen, setAdminAttendanceOpen] = useState(false)
  const [isAdminDealerOpen, setAdminDealerOpen] = useState(false)
  const [isAdminGenderOpen, setAdminGenderOpen] = useState(false)
  const [isAdminVehicleOpen, setAdminVehicleOpen] = useState(false)
  const [isAdminGSMOpen, setAdminGSMOpen] = useState(false)
  const [isAdminFactorOpen, setAdminFactorOpen] = useState(false);
  const [isAdminHSNOpen, setAdminHSNOpen] = useState(false)
  const [isAdminSalesOpen, setAdminSalesOpen] = useState(false)
  const [isAdminTaxOpen, setAdminTaxOpen] = useState(false)
  // const [isAdminTerritoryOpen, setAdminTerritoryOpen] = useState(false);
const [isAttributesOpen, setAttributesOpen] = useState(false);
const [isTerritoryOpen, setTerritoryOpen] = useState(false);


  const navigate = useNavigate();

  const toggleAdministrator = () => {
    setAdministratorOpen(!isAdministratorOpen);
    setSelectedItem('administrator');
  };
  // const handleAdminTerritoryClick = () => {
  //   setAdminTerritoryOpen(!isAdminTerritoryOpen);
  //   closeOtherSections("territory");
  // };

  const handleAdminAttendanceClick = () => {
    setAdminAttendanceOpen(!isAdminAttendanceOpen);
    closeOtherSections("attendance");
  };

  const handleAdminProfileClick = () => {
    setAdminProfileOpen(!isAdminProfileOpen);
    closeOtherSections("profile");
  };

  const handleAdminBloodClick = () => {
    setAdminBloodOpen(!isAdminBloodOpen);
    closeOtherSections("blood");
  };

  const handleAdminDealerClick = () => {
    setAdminDealerOpen(!isAdminDealerOpen);
    closeOtherSections("dealer");
  };

  const handleAdminGenderClick = () => {
    setAdminGenderOpen(!isAdminGenderOpen);
    closeOtherSections("gender");
  };

  const handleAdminVehicleClick = () => {
    setAdminVehicleOpen(!isAdminVehicleOpen);
    closeOtherSections("vehicle");
  };

  const handleAdminGSMClick = () => {
    setAdminGSMOpen(!isAdminGSMOpen);
    closeOtherSections("gsm");
  };

  const handleAdminFactorClick = () => {
    setAdminFactorOpen(!isAdminFactorOpen);
    closeOtherSections("factor");
  };

  const handleAdminHSNClick = () => {
    setAdminHSNOpen(!isAdminHSNOpen);
    closeOtherSections("hsn");
  };

  const handleAdminSalesClick = () => {
    setAdminSalesOpen(!isAdminSalesOpen);
    closeOtherSections("sales");
  };

  const handleAdminTaxClick = () => {
    setAdminTaxOpen(!isAdminTaxOpen);
    closeOtherSections("tax");
  };

  const closeOtherSections = (selectedSection) => {
    const sections = [
      "territory", "attendance", "profile", "blood",
      "dealer", "gender", "vehicle", "gsm", "factor",
      "hsn", "sales", "tax"
    ];

    sections.forEach((section) => {
      if (section !== selectedSection) {
        switch (section) {
          case "territory":
            setAdminTerritoryOpen(false);
            break;
          case "attendance":
            setAdminAttendanceOpen(false);
            break;
          case "profile":
            setAdminProfileOpen(false);
            break;
          case "blood":
            setAdminBloodOpen(false);
            break;
          case "dealer":
            setAdminDealerOpen(false);
            break;
          case "gender":
            setAdminGenderOpen(false);
            break;
          case "vehicle":
            setAdminVehicleOpen(false);
            break;
          case "gsm":
            setAdminGSMOpen(false);
            break;
          case "factor":
            setAdminFactorOpen(false);
            break;
          case "hsn":
            setAdminHSNOpen(false);
            break;
          case "sales":
            setAdminSalesOpen(false);
            break;
          case "tax":
            setAdminTaxOpen(false);
            break;
          default:
            break;
        }
      }
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDashboard = () => {
    setSelectedItem('dashboard');
    navigate('/dashboard');
  }
 
  const handleAdminTerritoryClick = () => {
    setAdminTerritoryOpen(!isAdminTerritoryOpen);
    closeOtherSections("territory");
  };
  
  const handleAttributesClick = () => {
    setAttributesOpen(!isAttributesOpen);
    closeOtherSections("attributes");
  };
  
  const handleTerritoryClick = () => {
    setTerritoryOpen(!isTerritoryOpen);
    closeOtherSections("territory");
  };
  const closeNewSections = (selectedSection) => {
    const sections = [
      "territory", "attributes", "territory", "attendance", "profile", "blood",
      "dealer", "gender", "vehicle", "gsm", "factor", "hsn", "sales", "tax"
    ];
  
    sections.forEach((section) => {
      if (section !== selectedSection) {
        eval(`set${section.charAt(0).toUpperCase() + section.slice(1)}Open(false)`);
      }
    });
  };
  
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="top-section">
        <img src="images/logo.png" alt="Top Image" className='small' />
        <button className="toggle-btn" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M20 7.08328H1.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 1.25H1.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 12.9167H1.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 18.75H1.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

     
 

<div className="search-input">
      <div className="input-group">
        <input type="text" className="form-control-color" placeholder="Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        </div>
      </div>
    </div>
      <div className="sidebar-column">
      <div className={`item-2 ${selectedItem === 'dashboard' ? 'selected' : ''}`} onClick={toggleDashboard}>
        <img src="images/dashboard.png" alt="Logo 1" className="logo-1" />
        <span>DASHBOARD</span>
      </div>
       <div
        className={`item-2 ${selectedItem === 'administrator' ? 'selected' : ''}`}
        onClick={toggleAdministrator}
      >
            <span> <img src="images/admin-1.png" alt="Logo 1" className="logo-1" />
         ADMINISTRATOR</span>
      </div>
        {isAdministratorOpen  && (
          <div className='submenu'>
           <div className='sidebar-text'>
           <Link to="/rolemanage" className="sidebar-link" onClick={handleAdminProfileClick}>
            <div className={`sidebar-text ${selectedItem === 'manageProfile' ? 'selected' : ''}`}>
              <img
                src={isAdminProfileOpen? 'images/squre-2.png' : 'images/squre.png'}
                alt="Logo"
                className="logo-1"
              />
              <span style={{ color: isAdminProfileOpen ? '#0672A3' : 'black' }}>Manage Profile</span>
            </div>
          </Link> 
          </div>
          <div className='sidebar-text'>
        <Link to="/attendance" className="sidebar-link" onClick={handleAdminAttendanceClick}>
        <img
          src={isAdminAttendanceOpen? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color:isAdminAttendanceOpen? "#0672A3" : "black" }}>Manage Attendance </span>
        </Link>
      </div>
        
<div className='sidebar-text sidebar-link' onClick={handleAdminTerritoryClick}>
  <img
    src={isAdminTerritoryOpen ? 'images/squre-2.png' : 'images/squre.png'}
    alt="Logo"
    className="logo-1"
  />
  <span style={{ color: isAdminTerritoryOpen ? "#0672A3" : "black" }}>Manage Admin Territory</span>

  {isAdminTerritoryOpen && (
    <ul>
      <li>
        <div className='sidebar-text'>
          <Link to="/resion" className="sidebar-link" >
            <img
              src={isAttributesOpen ? 'images/squre-2.png' : 'images/squre.png'}
              alt="Logo"
              className="logo-1"
            />
            <span style={{ color: isAttributesOpen ? "#0672A3" : "black" }}>Manage Attributes</span>
          </Link>
        </div>
      </li>
      <li>
        <div className='sidebar-text'>
          <Link to="/territory" className="sidebar-link" >
            <img
              src={isTerritoryOpen ? 'images/squre-2.png' : 'images/squre.png'}
              alt="Logo"
              className="logo-1"
            />
            <span style={{ color: isTerritoryOpen ? "#0672A3" : "black" }}>Manage Territory</span>
          </Link>
        </div>
      </li>
    </ul>
  )}
</div>



        <div className='sidebar-text'>
        <Link to="/blood-group" className="sidebar-link" onClick={handleAdminBloodClick}>
        <img
          src={isAdminBloodOpen? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color:isAdminBloodOpen? "#0672A3" : "black" }}>Manage Blood Group</span>
        </Link>
      </div>
      <div className='sidebar-text'>
        <Link to="/dealer-type" className="sidebar-link"  onClick={handleAdminDealerClick}>
        <img
          src={isAdminDealerOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color:isAdminDealerOpen? "#0672A3" : "black" }}>Manage Dealer</span>
        </Link>
      </div>
      <div className='sidebar-text'>
        <Link to="/gender" className="sidebar-link" onClick={handleAdminGenderClick}>
        <img
          src={isAdminGenderOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color: isAdminGenderOpen ? "#0672A3" : "black" }}>Manage Gender</span>
        </Link>
      </div>
      <div className='sidebar-text'>
        <Link to="/vehicle" className="sidebar-link" onClick={handleAdminVehicleClick}>
        <img
          src={isAdminVehicleOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color: isAdminVehicleOpen ? "#0672A3" : "black" }}>Manage Vehicle</span>
        </Link>
      </div>
      <div className='sidebar-text'>
        <Link to="/gsmpage" className="sidebar-link" onClick={handleAdminGSMClick}>
        <img
          src={isAdminGSMOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color: isAdminGSMOpen ? "#0672A3" : "black" }}>Manage GSM</span>
        </Link>
      </div>
      <div className='sidebar-text' >
        <Link to="/factor" className="sidebar-link" onClick={handleAdminFactorClick}>
        <img
          src={isAdminFactorOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color: isAdminFactorOpen ? "#0672A3" : "black" }}>Manage Burst Factor</span>
        </Link>
      </div>
      <div className='sidebar-text'>
        <Link to="/hsn-type" className="sidebar-link" onClick={handleAdminHSNClick}>
        <img
          src={isAdminHSNOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color: isAdminHSNOpen ? "#0672A3" : "black" }}>Manage HSN/ SAC</span>
        </Link>
      </div>

      <Link to="/sale-order" className="sidebar-link" onClick={handleAdminSalesClick}>
        <div className='sidebar-text'>
        <img
          src={isAdminSalesOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
          <span style={{ color: isAdminSalesOpen ? "#0672A3" : "black" }}>Manage Sales Order Type</span>
        </div>

      </Link>
      <div className='sidebar-text'>
          <Link to="/tax-type" className="sidebar-link" onClick={handleAdminTaxClick}>
          <img
          src={isAdminTaxOpen ? "images/squre-2.png" : "images/squre.png"}
          alt="Logo"
          className="logo-1"
        />
            <span style={{ color: isAdminTaxOpen ? "#0672A3" : "black" }}>Manage Tax Type</span>
          </Link>
        </div>
      
           
          </div>
        )}
       
      </div>
    </div>
    
    

  );
};

export default Sidebar;


