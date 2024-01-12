import React, { useState } from 'react';

import { BsCalendar } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import "./Attendance.css";
import PaginationForm from '../../components/Layout/PaginationForm';
const ManageAttendace = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const navigate = useNavigate();

    const handleAddClick = () => {

        navigate('/add-territory');
    };


    const handleEditClick = () => {

        navigate('/edit-territory');
    };


    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (


        <div className='container'>
            <div className='my-custom-dashboard'>
                <div className="row header-row">

                    <div className="col-md-5">
                        <h3 className='mmm'>Manage Attendance</h3>
                    </div>
                    <div className="col-md-7 text-end">
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
                                <img src="images/import.png" alt="Logo 1" className="logo-btn" />Import Attandance
                            </button>

                            <button type="button" className=" bcolor">
                                <img src="images/re-down.png" alt="Logo 1" className="logo-btn" /> Sample Download Attandance
                            </button>

                        </div>
                    </div>


                    <div className="row second-row">

                        <form>

                            <div className='row'>
                                <div className="col-md-4">
                                    
                                <div className="form-group">
                                        <div className="input-group">
                                            <input className="form-control" id="date" name="date" placeholder="Date Range" type="text" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div className='col-md-4'>
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="">Employee</option>
                                        <option value="admin">Admin</option>
                                        <option value="employee">Employee</option>
                                        <option value="manager">Manager</option>

                                    </select>
                                </div>
                                <div className='col-md-1'>
                                    <button className='button-header'> <img src="images/refresh.png" alt="Logo 1" className="logo-btn" /></button>
                                </div>
                                <div className="col-md-1">

                                    <button type="button" className="search">
                                        Search<img src="images/search.png" alt="Logo 1" className="logo-btn" />
                                    </button>

                                </div></div>
                        </form>
                    </div>
                    <div className="row row-one">

                        <div className='header-two'>

                        </div>

                        <div className='row'><div className="col-md-3">

                            <button type="button" className="add-button" onClick={handleAddClick}>
                                <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
                            </button>
                        </div>
                            <div className='col'></div>
                            <div className="col">

                                <div className="">
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
                                        <th>Action</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                        <th>Battery Status</th>
                                        <th>Address</th>

                                        

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>  <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>

                                            </span> </td>
                                        <td>1234</td>
                                        <td>qweertfc </td>
                                        <td>qweertfc </td>
                                        <td >
                                        Lorem ipsum dolor sit amet consectetur. Tristique sit placerat a habitant.</td>

                                        
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>  <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>

                                            </span> </td>
                                        <td>1234</td>
                                        <td>qweertfc </td>
                                        <td>qweertfc </td>
                                        <td >
                                        Lorem ipsum dolor sit amet consectetur. Tristique sit placerat a habitant.</td>

                                        
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>  <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>

                                            </span> </td>
                                        <td>1234</td>
                                        <td>qweertfc </td>
                                        <td>qweertfc </td>
                                        <td >
                                        Lorem ipsum dolor sit amet consectetur. Tristique sit placerat a habitant.</td>

                                        
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

export default ManageAttendace;






                                    



                               