import React from "react";
import "./common.css";

const Contract = () => {
  return (
    <div className="store">
      <div className="container">
        <div className="store-header">
          <h3>Instantiate Contract</h3>
        </div>
        <div className="store-content">
          <div className="left-store-content">
            <form className="contract-form">
              <input type="text" placeholder="Code ID" />
              <input type="text" placeholder="Admin" />
              <input type="text" placeholder="Label" />
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </form>
            <div className="store-code">
            <button>Add Token</button>
              <button>Instantiate</button>
             
            </div>
          </div>
          <div className="right-store-content">
            <h5>Instantiate Results...</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
