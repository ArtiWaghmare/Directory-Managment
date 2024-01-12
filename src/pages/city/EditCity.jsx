import React from 'react';


const  EditCity= () => {
  return (
    <form >
    <div className="row edit-page">
      <div className=" col top">
        <div><label htmlFor="roleInput"><span className='text-Edit-Role'> City</span></label></div>
        
        <input type="text" className="form-control-on" placeholder="Enter" />
      </div>
      <div className=" col side">
        <input type="text" className="form-control-1" placeholder="" /><span className='text-2'>Is Active</span>
      </div>
    </div>
    <div className='buttons-role'>
        <div className="row">
            <div className="col-2">
                <button type="button" className=" btn-sm button-on">
                    update
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
  );
};

export default EditCity;
