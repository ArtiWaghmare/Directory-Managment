// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import "./Report.css";
// import PaginationForm from '../../components/Layout/PaginationForm';
// const Reporting = () => {
//   const navigate = useNavigate();
//   const [selectedLink, setSelectedLink] = useState('website');
//   const handleLinkClick = (link) => {
//     setSelectedLink(link);


//     switch (link) {
//         case 'role':
//             navigate('/rolemanage'); // Replace '/role' with the actual route for the role page
//             break;
//         case 'hierarchy':
//             navigate('/reporting'); // Replace '/role-hierarchy' with the actual route for the role hierarchy page
//             break;
//         case 'employee':
//             navigate('/employee'); // Replace '/employee' with the actual route for the employee page
//             break;
//         default:
//             break;
//     }
// };
//   const handleAddClick = () => {

//     navigate('/add-reporting');
//   };


//   const handleEditClick = () => {

//     navigate('/edit-reporting');
//   };
//   return (


//     <div className='container '>
//   <div className='my-custom-dashboard'>
//       <div className="row header-row">

//         <div className="col-md-5">
//           <h3 className='mmm'>Manage Profile</h3>
//         </div>
//         <div className="col-md-7 text-end">
//           <h6 className='mmm'>ADMINISTRATOR</h6>
//         </div>
//       </div>
//       <div className='border'></div>
// <div className='gap'>


// <div className="row  space mt-4">
//         <div className="col">


//           <button type="button" className="btcolor me-2">CSV</button>
//           <button type="button" className="btcolor me-2">Excel</button>
//           <button type="button" className="btcolor me-2">PDF</button>
//           <button type="button" className="btcolor me-2">Print</button>
//           <button type="button" className="btcolor-1 me-2">Column visibility</button>
//         </div>
//         <div className="col text-end ">

//           <button type="button" className=" import-button  me-2">
//             <img src="images/import.png" alt="Logo 1" className="logo-1" />Import
//           </button>

//           <button type="button" className=" bcolor">
//             <img src="images/re-down.png" alt="Logo 1" className="logo-1" />Sample Download
//           </button>

//         </div>
//       </div>

// {/* 
//       <div className="row second-row">

//         <div className='header-two'>
//           <div className='row'>
//             <div className='col-3 dealer-one'><span>Role</span></div>
//             <div className='col dealer-one'><span>Reporting To</span></div>
//             <div className='col  dealer-one'><span>Employee</span></div>
//           </div>
//         </div>
//         <div className='border'></div>
//         <div className='row'><div className="col-md-3">

// <button type="button" className="add-button" onClick={handleAddClick}>
//   <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
// </button>
// </div>
// <div className='col'></div>
// <div className="col">

// <div className="search-inputt">
//   <div className="input-group">
//     <input type="text" className="form-control" placeholder="Search" />
//     <div className="input-group-append">
//       <span className="input-group-text">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//         </svg>
//       </span>
//     </div>
//   </div>
// </div>

// </div></div>

//       </div> */}
//         <div className="row second-row">

// <div className="row mt-1">
//     <div className="col-4 center">
//         <span
//             onClick={() => handleLinkClick('role')}
//             style={{
//                 borderBottom: selectedLink === 'role' ? '2px solid #0672A3' : 'none',
//                 width: '200px',
//                 display: 'inline-block',
//                 cursor: 'pointer',
//             }}
//         >
//             Role
//         </span>
//     </div>
//     <div className="col-3 text-end">
//         <span
//             onClick={() => handleLinkClick('hierarchy')}
//             style={{
//                 borderBottom: selectedLink === 'hierarchy' ? '2px solid #0672A3' : 'none',
//                 width: '200px',
//                 display: 'inline-block',
//                 textAlign: 'center',
//             }}
//         >
//             Role hierarchy
//         </span>
//     </div>
//     <div className="col margin">
//         <span
//             onClick={() => handleLinkClick('employee')}
//             style={{
//                 borderBottom: selectedLink === 'employee' ? '2px solid #0672A3' : 'none',
//                 width: '200px',
//                 display: 'inline-block',
//                 textAlign: 'center',
//             }}
//         >
//             Employee
//         </span>
//     </div>
// </div>
// {/* <div className="row  mt-1">
// <div className="col-4 center ">

//     <span
//         onClick={() => handleLinkClick('role')}
//         style={{
//             borderBottom: selectedLink === 'role' ? '2px solid #0672A3' : 'none',
//             width: '200px',  
//             display: 'inline-block',  
//             cursor: 'pointer',  
//         }}
//     >
//         Role
//     </span>

// </div>
// <div className="col-3  text-end ">

// <span
// onClick={() => handleLinkClick(' hierarchy')}
// style={{
// borderBottom: selectedLink === ' hierarchy' ? '2px solid #0672A3' : 'none',
// width: '200px',
// display: 'inline-block',
// textAlign: 'center', 
// }}
// >
//         Role hierarchy
//     </span>

// </div>
// <div className="col  margin ">

// <span
// onClick={() => handleLinkClick('employee')}
// style={{
// borderBottom: selectedLink === 'employee' ? '2px solid #0672A3' : 'none',
// width: '200px',
// display: 'inline-block',
// textAlign: 'center', 
// }}
// >
//       Employee
//     </span>

// </div>
// </div> */}
// <div className='border'></div>
// <div className='row'><div className="col-md-3">

//     <button type="button" className="add-button" onClick={handleAddClick}>
//         <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
//     </button>
// </div>
//     <div className='col'></div>
//     <div className="col">

//         <div className="search-inputt">
//             <div className="input-group">
//                 <input type="text" className="form-control" placeholder="Search" />
//                 <div className="input-group-append">
//                     <span className="input-group-text">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//                         </svg>
//                     </span>
//                 </div>
//             </div>
//         </div>

//     </div></div>

// </div>


//       <div className="row mt-4">
//         <div className="col-md-12">
//           <table className="table tabel">
//             <thead>
//               <tr>
//                 <th>S No</th>
//                 <th>Active</th>
//                 <th>Role Name</th>
//                 <th>Reporting to</th>
//                 <th>Status</th>
//                 <th>Created Date</th>
//                 <th>Created By</th>


//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>
//                   <span className="me-2" onClick={handleEditClick}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
//                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                       <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
//                     </svg>
//                   </span>

//                 </td>
//                 <td>Yash savasiya</td>
//                 <td>Super Admin</td>
//                 <td >
//                   <span className='clt'>Active</span></td>
//                 <td>Super Admin</td>
//                 <td>09/06/2023</td>

//               </tr>
//               <tr>
//                 <td>1</td>
//                 <td>
//                   <span className="me-2" onClick={handleEditClick}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
//                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                       <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
//                     </svg>
//                   </span>

//                 </td>
//                 <td>Yash savasiya</td>
//                 <td>Super Admin</td>
//                 <td><span className='clt'>Active</span></td>
//                 <td>Super Admin</td>
//                 <td>09/06/2023</td>

//               </tr>
//               <tr>
//                 <td>1</td>
//                 <td>
//                   <span className="me-2" onClick={handleEditClick}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
//                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                       <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
//                     </svg>

//                   </span>

//                 </td>
//                 <td>Yash savasiya</td>
//                 <td>Super Admin</td>
//                 <td><span className='clt'>Active</span></td>
//                 <td>Super Admin</td>
//                 <td>09/06/2023</td>

//               </tr>




//             </tbody>
//             <tfoot>

//             </tfoot>
//           </table>
//         </div>
//       </div>
//       <div className="">
//         <div className="col-md ms-auto text-end">
//           <PaginationForm/>
//         </div>
//         </div>
//       </div>
//       </div>
//     </div>

//   );
// };

// export default Reporting;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import "./Report.css";
import PaginationForm from '../../components/Layout/PaginationForm';
import AddReporting from './AddReporting';
import ReportingTable from './ReportingTable';
const Reporting = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);


    switch (link) {
      case 'role':
        navigate('/rolemanage');
        break;
      case 'hierarchy':
        navigate('/reporting');
        break;
      case 'employee':
        navigate('/employee');
        break;
      default:
        break;
    }
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (


    <div className='container '>
      <div className='my-custom-dashboard'>
        <div className="row header-row">

          <div className="col-md-5">
            <h3 className='mmm'>Manage Profile</h3>
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
                <img src="images/import.png" alt="Logo 1" className="logo-1" />Import
              </button>

              <button type="button" className=" bcolor">
                <img src="images/re-down.png" alt="Logo 1" className="logo-1" />Sample Download
              </button>

            </div>
          </div>


          <div className="row second-row">

            {/* <div className='header-two'>
              <div className='row'>
                <div className='col-3 dealer-one'><span>Role</span></div>
                <div className='col dealer-one'><span>Reporting To</span></div>
                <div className='col  dealer-one'><span>Employee</span></div>
              </div>
            </div> */}
          <div className="row mt-1">
      <div className="col center">
        <span
          onClick={() => handleLinkClick('Resion')}
          style={{
            borderBottom: selectedLink === 'Resion' ? '2px solid #0672A3' : 'none',
            width: '200px',
            display: 'inline-block',
            cursor: 'pointer',
          }}
        >
          Resion
        </span>
      </div>
      <div className="col text-end">
        <span
          onClick={() => handleLinkClick('state')}
          style={{
            borderBottom: selectedLink === 'state' ? '2px solid #0672A3' : 'none',
            width: '200px',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          State
        </span>
      </div>
      <div className="col margin">
        <span
          onClick={() => handleLinkClick('district')}
          style={{
            borderBottom: selectedLink === 'district' ? '2px solid #0672A3' : 'none',
            width: '200px',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          District
        </span>
      </div>
      <div className="col margin">
        <span
          onClick={() => handleLinkClick('city')}
          style={{
            borderBottom: selectedLink === 'city' ? '2px solid #0672A3' : 'none',
            width: '200px',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          City
        </span>
      </div>
    </div>
            <div className='border'></div>
            <div className='row'>
              {/* <div className="col-md-3">

<button type="button" className="trow" onClick={handleAddClick}>
  <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
</button>
      </div> */}
              <div className="col-md-3">

                <button type="button" className="add-button" onClick={handleAddClick}>
                  <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
                </button>



                {showModal && (

                  <div className="modal fade show " style={{ display: 'block', }} tabIndex="" role="dialog">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className='add-reporting'>Add Reporting To</span>
                          <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>

                        </div>
                        <div className='space-one'>
                          <AddReporting onClose={handleCloseModal} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
            <ReportingTable/>
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

export default Reporting;
