import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

const PaginationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = 20;

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    const startPage = Math.max(currentPage - 3, 1);
    const endPage = Math.min(startPage + itemsPerPage - 1, totalPages);

    
    if (startPage > 1) {
      items.push(
        <li className="page-item dots" key="start-dots">
          <span className="page-link">...</span>
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
          <button className="page-link" onClick={() => handlePaginationClick(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (endPage < totalPages) {
      items.push(
        <li className="page-item dots" key="end-dots">
          <span className="page-link">...</span>
        </li>
      );
    }

    return items;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePaginationClick(currentPage - 1)}
          >
            {'<'}
          </button>
        </li>
        {renderPaginationItems()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePaginationClick(currentPage + 1)}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationForm;
