// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import "./Roleper.css";
// const Website= () => {
//   const navigate = useNavigate();

//   const handleAddClick = () => {

//     navigate('/add');
//   };

//   const handleEditClick = () => {

//     navigate('/edit');
//   };
//   const handleWebsiteClick= () => {


//   };
//   return (


//     <div className='container '>
// <div className='my-custom-dashboard'>
//       <div className="row header-row">

//         <div className="col-md-5">
//           <h3 className='mmm'>Manage Profile</h3>
//         </div>
//         <div className="col-md-7 text-end">
//           <h6 className='mmm'>ADMINISTRATOR</h6>
//         </div>
//       </div>


//       <div className=' container content-2'>
//         <div className="text-Role">

//           <span className=''>Role Permission</span>
//         </div>
//         <div className="row  space-1 mt-1">
//           <div className="col-5 center ">
//           <Link to="/website" className="sidebar-link" onClick={handleWebsiteClick} >
//             <span>Website Application</span>
//             </Link>
//           </div>
//           <div className="col-5  text-end ">
//           <Link to="/mobileapp" className="sidebar-link" onClick={handleWebsiteClick} >
//             <span className=' center '>Mobile App Application</span>
//             </Link>
//           </div>
//         </div>


//         <div className=" text-end">
//           <button className="logo-5 ">  <img src="images/arrow.png" alt="Logo 1" className="img" /></button>
//         </div>


//         <div className="row  mt-4">
//           <div className="col-md-12 ">
          
//             <div className='left'>
           
//                 <span className='view'> Sellect All</span>
               
//                   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                   <label className="form-check-label" for="flexCheckDefault">

//                   </label>
//                   </div>
      
//             <table className="table-1 ">
//               <thead>
//                 <tr>
//                   <th>S No</th>
//                   <th>Permission Name</th>
//                   <th>
                  
//                 <span className='view'> View</span>
               
//                   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                   <label className="form-check-label" for="flexCheckDefault">

//                   </label>
                      
//                   </th>

//                   <th>
//                   <span className='view'> View</span>
               
//                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                <label className="form-check-label" for="flexCheckDefault">

//                </label>
//                   </th>

//                   <th>
//                   <span className='view'> View</span>
               
//                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                <label className="form-check-label" for="flexCheckDefault">

//                </label>
//                   </th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>

//                   <td>qweertfc</td>
//                   <td >
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" for="flexCheckDefault">

//                       </label>
//                     </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>

//                 </tr>
//                 <tr>
//                   <td>1</td>

//                   <td>qweertfc</td>
//                   <td >
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" for="flexCheckDefault">

//                       </label>
//                     </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>

//                 </tr>
//                 <tr>
//                   <td>1</td>

//                   <td>qweertfc</td>
//                   <td >
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" for="flexCheckDefault">

//                       </label>
//                     </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>

//                 </tr>
//                 <tr>
//                   <td>1</td>

//                   <td>qweertfc</td>
//                   <td >
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" for="flexCheckDefault">

//                       </label>
//                     </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>

//                 </tr>
//                 <tr>
//                   <td>1</td>

//                   <td>qweertfc</td>
//                   <td >
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" for="flexCheckDefault">

//                       </label>
//                     </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>

//                 </tr>
//                 <tr>
//                   <td>1</td>

//                   <td>qweertfc</td>
//                   <td >
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" for="flexCheckDefault">

//                       </label>
//                     </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>
//                   <td><div className="form-check">
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" for="flexCheckDefault">

//                     </label>
//                   </div></td>

//                 </tr>

//               </tbody>


//               <tfoot>

//               </tfoot>

//             </table>
//             <div className="row">
//               <div className="col ">
//                 <button type="button" className="trow-one">
//                   Back
//                 </button>
//               </div>
//               <div className="col">
//                 <button type="button" className="trow-two">
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     </div>
//   );
// };

// export default Website;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Roleper.css";
const Website= () => {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState('website');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleBackButtonClick = () => {

    navigate('/rolemanage');
  }

 
  return (


      <div>
        <div className=" text-end">
          <button className="arrow  btn-sm">  <img src="images/arrow.png" alt="Logo 1" className="img" /></button>
        </div>


        <div className="row  mt-4">
          <div className="col-md-12 ">
          
            <div className='left'>
          
                <span className='view'> Sellect All</span>
              
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">

                  </label>
                  </div>
      
            <table className="table-1 ">
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Permission Name</th>
                  <th>
                  
                <span className='view'> View</span>
              
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">

                  </label>
                      
                  </th>

                  <th>
                  <span className='view'> View</span>
              
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label className="form-check-label" for="flexCheckDefault">

               </label>
                  </th>

                  <th>
                  <span className='view'> View</span>
              
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label className="form-check-label" for="flexCheckDefault">

               </label>
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>

              </tbody>


              <tfoot>

              </tfoot>

            </table>
            <div className="row">
              <div className="col ">
                <button type="button" className="trow-one" onClick={handleBackButtonClick}>
                  Back
                </button>
              </div>
              <div className="col">
                <button type="button" className="trow-two">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Website;
