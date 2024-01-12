import React from 'react';


const AddResion = () => {
  return (
    <div >
    <form className="center-form">
      <div className="row">
        <div className=" col-8">
          <label htmlFor="roleInput"><span className='text-2'> Resion</span></label>
          <input type="text" className="form-control-on" placeholder="Enter" />
        </div>
        <div className=" col-4">
          <input type="text" className="form-control-1" placeholder="" /><span className='text-2'>Is Active</span>
        </div>
      </div>
      <div className='buttons-one'>
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

export default AddResion;
