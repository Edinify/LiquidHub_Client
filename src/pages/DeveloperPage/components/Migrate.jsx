import React, { useState } from "react";
import "./common.css";

const Migrate = () => {
  const [codeId, setCodeId] = useState("");
  return (
    <div className="store">
      <div className="container">
        <form className="migrate-form">
          <input
            type="text"
            placeholder="Code ID"
            value={codeId}
            onChange={(e) => setCodeId(e.target.value)}
          />
          <input type="text" placeholder="Migrate Code ID" />
        </form>
        <div className="contract-container">
        <div className="contract-content">
            <h5>No Contracts for code ID {codeId}</h5>
          </div>
          <div className="execute-btn">
          <button>Execute Migration</button>
          </div>
          
          </div>

      </div>
    </div>
  );
};

export default Migrate;
