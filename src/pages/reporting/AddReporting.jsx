import React from 'react';
import "./AddReport.css";

const AddReporting = () => {
    return (
        // <div className='clss-1'>
        //     <div className='clss2'>
        //         <span className='clss3'>Add Reporting To</span>
        //     </div>
        //     <div className='clss4'>
        //         <form className="center-form">
        //             <div className="row">
        //                 <div className="col-md-6">
        //                     <label htmlFor="roleInput"><span className='text-2'>Role Name</span></label>
        //                     <select className="form-control-2" aria-label="Default select example">
        //                         <option selected>select</option>
        //                         <option value="1">One</option>
        //                         <option value="2">Two</option>
        //                         <option value="3">Three</option>
        //                     </select>
        //                 </div>

        //                 <div className="col-md-6">
        //                     <label htmlFor="roleInput"><span className='text-2'>Reporting To</span></label>
        //                     <select className="form-control-2" aria-label="Default select example">
        //                         <option selected>select</option>
        //                         <option value="1">One</option>
        //                         <option value="2">Two</option>
        //                         <option value="3">Three</option>
        //                     </select>
        //                 </div>

        //                 <div className="form-group">
        //                     <input type="text" className="forrm-control-1" placeholder="" /><span className='texxt-2'>Is Active</span>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col">
        //                     <button type="button" className="trrow-1">
        //                         Submit
        //                     </button>
        //                 </div>
        //                 <div className="col ">
        //                     <button type="button" className="trrow-2">
        //                         Cancle
        //                     </button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>

<div> <form className="">
            <div className="row space-lable">
                <div className="col">
                    <label htmlFor="roleInput"><span className='text-2'>Role Name</span></label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="col">
                    <label htmlFor="roleInput"><span className='text-2'>Reporting To</span></label>
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

export default AddReporting;
