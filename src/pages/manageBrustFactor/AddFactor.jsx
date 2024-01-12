import React from 'react';


const AddFactor= () => {
  return (
    // <div className='cls-1'>
    //   <div className='cls2'>
    //     <span className='cls3'>Add Brust Factor</span>
    //   </div>
    //   <div className='cls4'>
    //     <form className="center-form">
    //       <div className="row">
    //         <div className=" col-8">
    //           <label htmlFor="roleInput"><span className='text-2'> Brust Factor</span></label>
    //           <input type="text" className="form-control-2" placeholder="Enter" />
    //         </div>
    //         <div className=" col-4">
    //           <input type="text" className="form-control-1" placeholder="" /><span className='text-2'>Is Active</span>
    //         </div>
    //       </div>
    //       <div className='buttons'>
    //       <div className="row">
    //         <div className="col ">
    //           <button type="button" className="trow-1">
    //          Submit
    //           </button>
    //         </div>
    //         <div className="col ">
    //           <button type="button" className="trow-2">
    //             Cancle
    //           </button>
    //         </div>
    //       </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div >
    <form className="center-form">
      <div className="row">
        <div className=" col-8">
          <label htmlFor="roleInput"><span className='text-2'> District</span></label>
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

export default AddFactor;
