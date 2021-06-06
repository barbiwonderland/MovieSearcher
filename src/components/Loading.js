
import React from "react";

function Loading() {
  return (
    <div>
      <React.Fragment>
        <div className="text-center">
          <h2 className="text-warning ">Loading...</h2>
        </div>
        <div className="d-flex justify-content-center  ">
          <div className="spinner-grow  text-warning mt-3">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Loading;