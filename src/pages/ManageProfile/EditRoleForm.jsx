import React, { useState } from 'react';
import "./Edit.css";

const EditRoleForm = ({ onClose }) => {
  const handleCancel = () => {
    onClose(); // Call the onClose function passed from the parent
  };
  return (
    
    <div>
      <form >
        <div className="row edit-page">
          <div className=" col top">
            <div><label htmlFor="roleInput"><span className='text-Edit-Role'> Role</span></label></div>
            
            <input type="text" className="form-control-on" placeholder="Enter" />
          </div>
          <div className=" col side">
            <input type="text" className="form-control-1" placeholder="" /><span className='text-2'>Is Active</span>
          </div>
        </div>
        <div className='buttons-edit'>
            <div className="row">
                <div className="col-2">
                    <button type="button" className=" btn-sm button-on">
                        Submit
                    </button>
                </div>
                <div className="col-2 ">
                    <button type="button" className="btn-sm button-tw">
                        Cancle
                    </button>
                </div>
            </div>
            </div>
      </form>
  
      </div>


   



  );
};

export default EditRoleForm;
