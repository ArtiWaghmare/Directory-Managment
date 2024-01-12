import React, { useState } from 'react';
import EditReporting from './EditReporting';

function ReportingTable() {
    const [showModal, setShowModal] = useState(false);

    const handleEditClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <div className="col-md-12">
                <table className="table tabel">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Active</th>
                            <th>Role Name</th>
                            <th>Reporting to</th>
                            <th>Status</th>
                            <th>Created Date</th>
                            <th>Created By</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <span className="me-2" onClick={handleEditClick} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                </span>
                                {showModal && (

                                    <div className="modal fade show " style={{ display: 'block', }} tabIndex="" role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <span className='add-reporting'>Edit Reporting To</span>
                                                    <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                                <div className='space-one'>
                                                    <EditReporting onClose={handleCloseModal} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </td>
                            <td>Yash savasiya</td>
                            <td>Super Admin</td>
                            <td >
                                <span className='clt'>Active</span></td>
                            <td>Super Admin</td>
                            <td>09/06/2023</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <span className="me-2"onClick={handleEditClick} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                </span>

                            </td>
                            <td>Yash savasiya</td>
                            <td>Super Admin</td>
                            <td><span className='clt'>Active</span></td>
                            <td>Super Admin</td>
                            <td>09/06/2023</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <span className="me-2"onClick={handleEditClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>

                                </span>

                            </td>
                            <td>Yash savasiya</td>
                            <td>Super Admin</td>
                            <td><span className='clt'>Active</span></td>
                            <td>Super Admin</td>
                            <td>09/06/2023</td>

                        </tr>




                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default ReportingTable;