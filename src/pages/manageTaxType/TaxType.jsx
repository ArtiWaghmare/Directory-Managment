import React from 'react';
import { useNavigate } from 'react-router-dom';

import PaginationForm from '../../components/Layout/PaginationForm';
const TaxType = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {

    navigate('/addsaleorder');
  };


  const handleEditClick = () => {

    navigate('/editsaleorder');
  };
  return (


    <div className='container '>
      <div className='my-custom-dashboard'>

        <div className="row header-row">

          <div className="col-md-4">
            <h3 className='mmm'>Manage Tax</h3>
          </div>
          <div className="col text-end">
            <h6 className='mmm'>ADMINISTRATOR</h6>
          </div>
        </div>

        <div className='border'></div>
        <div className='gap'>

          <div className="row  space mt-4">
            <div className="col">


              <button type="button" className="btcolor me-2">CSV</button>
              <button type="button" className="btcolor me-2">Excel</button>
              <button type="button" className="btcolor me-2">PDF</button>
              <button type="button" className="btcolor me-2">Print</button>
              <button type="button" className="btcolor-1 me-2">Column visibility</button>
            </div>
            <div className="col text-end ">

              <button type="button" className=" import-button  me-2">
                <img src="images/import.png" alt="Logo 1" className="logo-btn" />Import
              </button>

              <button type="button" className=" bcolor">
                <img src="images/re-down.png" alt="Logo 1" className="logo-btn" /> Sample Download
              </button>

            </div>
          </div>



          <div className="row second-row">

            <div className='header-two'>

            </div>

            <div className='row'><div className="col-md-3">

              <button type="button" className="add-button" onClick={handleAddClick}>
                <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
              </button>
            </div>
              <div className='col'></div>
              <div className="col">

                <div className="search-inputt">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

              </div></div>

          </div>


          <div className="row mt-4">
            <div className="col-md-12">
              <table className="table tabel">
                <thead>
                  <tr>
                    <th>S No</th>
                    <th>Tax Type</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Created By</th>
                    <th>Action</th>




                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>

                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td >
                      <span className='clt'>Active</span></td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td>
                      <span className="me-2" onClick={handleEditClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                      </span>

                    </td>


                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td >
                      <span className='clt'>Active</span></td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td>
                      <span className="me-2" onClick={handleEditClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                      </span>

                    </td>


                  </tr>
                  <tr>
                    <td>1</td>

                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td >
                      <span className='clt'>Active</span></td>
                    <td>Lorem ipsum dolor </td>
                    <td>Lorem ipsum dolor </td>
                    <td>
                      <span className="me-2" onClick={handleEditClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                      </span>

                    </td>


                  </tr>


                </tbody>
                <tfoot>

                </tfoot>
              </table>
            </div>
          </div>
          <div className="">
            <div className="col-md ms-auto text-end">
              <PaginationForm />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TaxType;