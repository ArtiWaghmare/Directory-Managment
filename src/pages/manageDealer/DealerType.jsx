import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dealer.css";
import PaginationForm from '../../components/Layout/PaginationForm';
import DealerTable from './DealerTable';
import AddDealer from './AddDealer';
const DealerType = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState('');
 
  const handleLinkClick = (link) => {
    setSelectedLink(link);


    switch (link) {
      case 'dealer':
        navigate('/dealer-type');
        break;
      case 'week':
        navigate('/week-close');
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

          <div className="col-md-4">
            <h3 className='mmm'>Manage Dealer</h3>
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



            </div>
          </div>

          <div className="row second-row">

     
<div className='header-two'>
         <div className="row mt-1">
              <div className="col-7 dealer-one">
                <span
                  onClick={() => handleLinkClick('dealer')}
                  style={{
                    borderBottom: selectedLink === 'role' ? '2px solid #0672A3' : 'none',
                    width: '150px',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                >
                Dealer Type
                </span>
              </div>
              <div className="col-3 text-end">
                <span
                  onClick={() => handleLinkClick('week')}
                  style={{
                    borderBottom: selectedLink === 'hierarchy' ? '2px solid #0672A3' : 'none',
                    width: '150px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                Week Close
                </span>
              </div>
              </div>
            </div>
            <div className='border'></div>
            <div className='row'><div className="col-md-3">

              <button type="button" className="add-button" onClick={handleAddClick}>
                <img src="images/plus.png" alt="Logo 1" className="logo-4" /> Add
              </button>
              {showModal && (

                <div className="modal fade show " style={{ display: 'block', }} tabIndex="" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className='add-reporting'>Add Dealer Type</span>
                        <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>

                      </div>
                      <div className='space-one'>
                        < AddDealer onClose={handleCloseModal} />
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
            <DealerTable />
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

export default DealerType;