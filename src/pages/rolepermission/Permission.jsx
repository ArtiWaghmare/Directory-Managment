// import React, { useState } from 'react';
// import Website from './Website';
// import MobileApp from './MobileApp';

// const Permission = () => {
//   const [selectedLink, setSelectedLink] = useState('website');

//   const handleLinkClick = (link) => {
//     setSelectedLink(link);
//   };

//   return (
//     <div>
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <button onClick={() => handleLinkClick('website')}>Website</button>
//             </li>
//             <li>
//               <button onClick={() => handleLinkClick('mobileApp')}>Mobile App</button>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         {selectedLink === 'website' && <WebsiteTable/>}
//         {selectedLink === 'mobileApp' && <MobileAppTable />}
//       </main>
//     </div>
//   );
// };

// const WebsiteTable = () => {
//   return (
//     <div>
//       <h2>Website Table</h2>
//       {/* Add your table content here */}
//     </div>
//   );
// };

// const MobileAppTable = () => {
//   return (
//     <div>
//       <h2>Mobile App Table</h2>
//       {/* Add your table content here */}
//     </div>
//   );
// };

// export default Permission;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Roleper.css";
import Website from './Website';
import MobileApp from './MobileApp';
const Permission = () => {
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState('website');


    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    const handleAddClick = () => {

        navigate('/add');
    };
    const handleWebsiteClick = () => {


    };

    const handleEditClick = () => {

        navigate('/edit');
    };
    return (


        <div className='container '>
            <div className='my-custom-dashboard'>
               

                <div className='container '>
                    <div className="text-Role">

                        <span className='perm'>Role Permission</span>
                    </div>
                    <div className='border-lin'></div>
                    <div className=' row-per'>
                    <div className="row  space-1 mt-1">
                        <div className="col-5 center ">

                            <span
                                onClick={() => handleLinkClick('website')}
                                style={{
                                    borderBottom: selectedLink === 'website' ? '2px solid #0672A3' : 'none',
                                    width: '300px',  
                                    display: 'inline-block',  
                                    cursor: 'pointer',  
                                }}
                            >
                                Website Application
                            </span>

                        </div>
                        <div className="col-5  text-end ">

                        <span
                onClick={() => handleLinkClick('mobileApp')}
                style={{
                  borderBottom: selectedLink === 'mobileApp' ? '2px solid #0672A3' : 'none',
                  width: '300px',
                  display: 'inline-block',
                  textAlign: 'center', 
                }}
              >
                                Mobile App
                            </span>

                        </div>
                    </div>
                    </div>
                    <main>
                        {selectedLink === 'website' && <Website />}
                        {selectedLink === 'mobileApp' && <MobileApp />}
                    </main>

                </div>

            </div>
        </div>
    );
};

export default Permission;
