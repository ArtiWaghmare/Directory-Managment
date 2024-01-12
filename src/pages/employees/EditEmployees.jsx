import React from 'react'
import "./AddEmployees.css";
function EditEmployee() {
  return (



    <div className=" form-regist mt-4">
      <div className='header-1'><span className='add-text'>Edit Employee</span></div>
      
        <div className='container-fluid'>
         
          <form className="form-one">
          <h6 className='emp-text'>Employee Registration</h6>
          <div className='border'></div>
            <div className='row'>
              <div className='col'> <label htmlFor="employeeName" className='labe-text'>Employee Name *</label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter " required /></div>
              <div className='col'>  <label htmlFor="employeeCode" className='labe-text'>Employee Code</label>
                <input type="text" className="form-control" id="employeeCode" placeholder="Enter " /></div>
              <div className='col'><label htmlFor="email" className='labe-text'>Email ID</label>
                <input type="email" className="form-control" id="email" placeholder="Enter " /></div>
            </div>
            <div className="row">
              <div className=" col">
                <label htmlFor="mobileNumber" className='labe-text'>Mobile Number</label>
                <input type="tel" className="form-control" id="mobileNumber" placeholder="Enter " />
              </div>
              <div className=" col">
                <label htmlFor="department" className='labe-text'> Department</label>
                <input type="text" className="form-control" id="department" placeholder="Enter" />
              </div>
              <div className=" col">
                <label htmlFor="role" className="labe-text">Role</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>

                </select>
              </div>


            </div>
            <div className="row">
              <div className=" col">
                <label htmlFor="Role hierarchy " className='labe-text'>Role hierarchy </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>

                </select>
              </div>
              <div className=" col">
                <label htmlFor="dob" className='labe-text'>Date Of Birth</label>
                <input type="date" className="form-control" id="dob" />
              </div>
              <div className=" col">
                <label htmlFor="doj" className='labe-text'>Date of Joining</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>

                </select>
              </div>

            </div>
            <div className="row">
              <div className=" col">
                <label htmlFor="emergencyContact" className='labe-text'><span>Emergency Contact Number</span></label>
                <input type="tel" className="form-control" id="emergencyContact" placeholder="Enter" />
              </div>
              <div className=" col">
                <label htmlFor="bloodGroup" className='labe-text'>Blood Group</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>

                </select>
              </div>
              <div className=" col">
                <label htmlFor="gender" className='labe-text'>Gender</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className="  col">
                <label htmlFor="maritalStatus" className='labe-text'>Marital Status</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected> select</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="companyNumber" className='labe-text'>Company Number</label>
                <input type="text" className="form-control" id="companyNumber" placeholder=" Number" />
              </div>
              <div className=' col'></div>
            </div>
            <h6 className='emp-text'>Permanent Address</h6>
            <div className='border'></div>
            <div className="form-row">
              <div className=" col">
                <label htmlFor="employeeName" className='labe-text'>Address  </label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter " required />
              </div>
              <div className=" col">
                <label htmlFor="employeeCode" className='labe-text'>Region   </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className=" col">
                <label htmlFor="email" className='labe-text'>State</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="  col">
                <label htmlFor="employeeName" className='labe-text'>District </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="  col">
                <label htmlFor="employeeCode" className='labe-text'>City</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="  col">
                <label htmlFor="email" className='labe-text'>Area</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="  col-4">
                <label htmlFor="employeeName" className='labe-text'>Pincode</label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter " required />
                
              </div>
             <div className=" col-md-3">
              <div className="row">
                <div className="col-1">
                  <input type="text" className="form-control-three" id="employeeCode" placeholder="" />
                </div>
                <div className="col same">
                  <label htmlFor="employeeCode" className='label-text'>Is Temporary Address the Same</label>
                </div>
              </div>
              </div>

            </div>
            <h6 className='emp-text'>Temporary Address</h6>
            <div className='border'></div>
            <div className="row">
              <div className=" col">
                <label htmlFor="employeeName" className='labe-text'>Address   </label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter " required />
              </div>
              <div className="col">
                <label htmlFor="employeeCode" className='labe-text'>Region  </label>
                <select className="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className=" col">
                <label htmlFor="email" className='labe-text'>State  </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className=" col">
                <label htmlFor="employeeName" className='labe-text' >District </label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter" required />
              </div>
              <div className="col">
                <label htmlFor="employeeCode" className='labe-text'>City  </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className=" col">
                <label htmlFor="email" className='labe-text'>Area  </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className='row'>   <div className="col-4">
                <label htmlFor="employeeCode" className='labe-text'>Pincode   </label>
                <input type="text" className="form-control" id="employeeCode" placeholder="Enter " />
              </div>

              </div>
            </div>
            <h6 className='emp-text'>Emergency</h6>
            <div className='border'></div>
            <div className="row">
              <div className=" col">
                <label htmlFor="employeeName" className='labe-text'>Emergency Name </label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter " required />
              </div>
              <div className=" col">
                <label htmlFor="employeeCode" className='labe-text'>Emergency Number  </label>
                <input type="text" className="form-control" id="employeeCode" placeholder="Number " />
              </div>
              <div className=" col">
                <label htmlFor="email" className='labe-text'>Emergency Relation </label>
                <input type="email" className="form-control" id="email" placeholder="Enter " />
              </div>
            </div>
            <div className="row">
                <div className="col-1">
                  <input type="text" className="form-control-three" id="employeeCode" placeholder="" />
                </div>
                <div className="col-3 same">
                  <label htmlFor="employeeCode" className='labe-text'>Is Temporary Address the Same</label>
                </div>
              </div>
             
              <div className="row sub-but">
                        <div className="col-md-2">
                            <button type="button" className="sub-button">
                                Submit
                            </button>
                        </div>
                        <div className=" col-md-2">
                            <button type="button" className="edit-button">
                                Cancle
                            </button>
                        </div>
                    </div>
          </form>
        </div>
    
      <div className='footer'></div>
    </div>
  )
}

export default EditEmployee;