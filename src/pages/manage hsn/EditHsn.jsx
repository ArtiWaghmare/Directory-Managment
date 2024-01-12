import React from 'react';

import "./Hsn.css";
const EditHsn = () => {
    return (
       
        <div className='hsn-top'> <form className="">
        <div className="row space-lable">
            <div className="col">
                <label htmlFor="roleInput"><span className='text-hsn'>HSN/ SAC code</span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="col">
                <label htmlFor="roleInput"><span className='text-hsn'>HSN/ SAC Type</span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

           
        </div>
        <div className="row form">
            <div className='col-1'><input type="text" className="form-control" placeholder="" /></div>
            <div className='col-1'><span className='text-2'>Is Active</span></div>
                
            </div>
        <div className='buttons'>
        <div className="row">
            <div className="col-2">
                <button type="button" className=" btn-sm button-on">
                 Update
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

export default EditHsn;
