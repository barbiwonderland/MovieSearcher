import { Pagination } from "@material-ui/lab";
import React from "react";
function CustomPagination({ setPage, numbOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="container">
      <div className="row">
        <div className=" d-flex my-4 col-12 text-center justify-content-center">
          <Pagination
            size="large"
            count={numbOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomPagination;
