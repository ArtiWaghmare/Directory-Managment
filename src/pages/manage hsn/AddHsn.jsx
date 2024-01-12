import React from 'react';
// import "./AddReport.css";

const AddHsn = () => {
    return (
       
        <div> <form className="">
        <div className="row space-lable">
            <div className="col">
                <label htmlFor="roleInput"><span className=''>HSN/ SAC code </span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="col">
                <label htmlFor="roleInput"><span className=''>HSN/ SAC Type </span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="form-group">
                <input type="text" className="form-con" placeholder="" /><span className='texxt-2'>Is Active</span>
            </div>
        </div>
        <div className='buttons'>
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

export default AddHsn;
