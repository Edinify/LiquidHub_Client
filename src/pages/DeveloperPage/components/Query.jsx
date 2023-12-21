import React, { useState } from "react";
import "./common.css";

const Query = () => {
  return (
    <div className="store query">
      <div className="container">
        <div className="query-container">
          <div className="query-left">
        <form className="query-form">
          <label>Enter Contract Address:</label>
          <input type="text" />
        </form>
        <div className="contract-container">
          <div className="contract-content">
            <h5>Enter a contract address to continue...</h5>
          </div>
        </div>
        </div>
        <div className="query-right">
          <h3>Stored Queries</h3>
          <div className="saved-query">
            <p>No saved queries</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Query;
