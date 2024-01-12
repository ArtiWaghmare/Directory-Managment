import React from 'react';


import "./AddTerritory.css"
const EditTerritory = () => {

  return (


    <div className='container '>
    <div className='my-custom-dashboard'>
      
      <div className="row header-row">

        <div className="col-md-4">
          <h3 className='mmm'>Manage Territory</h3>
        </div>
        <div className="col text-end">
          <h6 className='mmm'>ADMINISTRATOR</h6>
        </div>
      </div>
      <div className='border'></div>
      <div className='gap'>
        <div className="row  space mt-4">

          <div className=" ">
            <h5 className='Add-Territory'>Edit Territory</h5>
            <div className='terrytory'>
              <form>




                <div className="row">
                  <div className=" col-md-3">
                    <label for="inputCity">Region Name</label>
                    <span className='plus'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></span>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className=" col-md-3">
                    <label for="inputState">State Name</label>
                    <span className='plus'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></span>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-3  mb-3">
                    <label for="inputZip">District Name</label>
                    <span className='pluss'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></span>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3  mb-3">
                    <label for="inputZip" className='inputZipp"'>City</label>
                    <span className='plu'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></span>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                  </div>
                  <div className=" col-md-3 mb-3">

                    <input type="text" className="form-control-t" placeholder="" /><span className='text-2'>Is Active</span>
                  </div>

                </div>
                <div className='buttons-teritory'>
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
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  );
};

export default EditTerritory;
