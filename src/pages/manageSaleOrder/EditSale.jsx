import React from 'react';


const EditSale= () => {
  return (
    // <div className='cls-1'>
    //   <div className='cls2'>
    //     <span className='cls3'>Edit Sales Order Type</span>
    //   </div>
    //   <div className='cls4'>
    //     <form className="center-form">
    //       <div className="row">
    //         <div className=" col-8">
    //           <label htmlFor="roleInput"><span className='text-2'> SO Type</span></label>
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
    //         Update
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
    <form >
    <div className="row edit-page">
      <div className=" col top">
        <div><label htmlFor="roleInput"><span className='text-Edit-Role'>SO Type</span></label></div>
        
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

export default EditSale;
