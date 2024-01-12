import React,{useState} from 'react'
import AddRoleForm from './AddRoleForm';
import { useNavigate } from 'react-router-dom';
import RoleTable from './RoleTable';
import "./AddModal.css";
function AddModal() {



  
    const [activeLink, setActiveLink] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [selectedLink, setSelectedLink] = useState('website');
  const handleLinkClick = (link) => {
    setSelectedLink(link);
}
  const handleRoleClick = () => {

    navigate('/rolemanage');
    setActiveLink('role');
  };
  
  const handleEmployeeClick = () => {
    setActiveLink('employee');
    navigate('/employee');
  };



  const handlePermissionClick = () => {

    navigate('/website');
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddCloseModal = () => {
    setShowModal(false);
  };

  const handleEditClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
    <div className='row gap-table'>
    <div className="col-md-3">

    <button type="button" className="add-button" onClick={handleAddClick}>
  <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
</button>



{showModal && (

  <div className="modal fade show " style={{ display: 'block', }} tabIndex="" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
        <span className='add-role'>Add Role</span>
          <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        
        </div>
          <div className='space-one'>
          <AddRoleForm onClose={handleCloseModal} />
          </div>
      </div>
    </div>
  </div>
)}
</div>
<div className='col'></div>
<div className="col">

<div className="search-inputt">
<div className="input-group">
<input type="text" className="form-control" placeholder="Search" />
<div className="input-group-append">
<span className="input-group-text">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
</span>
</div>
</div>
</div>

</div>

</div>

</div>
  )
}

export default AddModal;



