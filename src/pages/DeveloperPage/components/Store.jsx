import React from 'react'
import "./common.css"

const Store = () => {
  return (
    <div className='store'>
      <div className="container">
        <div className="store-header">
          <h3>
            WASM File
          </h3>
        </div>
        <div className="store-content store ">
          <div className="left-store-content">
            <div className="upload-btn">
            <input type="file" id='uploadBtn' />
            <label htmlFor="uploadBtn">Choose File</label>
            <h3>No file chosen</h3>
            </div>
            <div className="store-code">
              <button>Store Code</button>
            </div>
          </div>
          <div className="right-store-content">
            <h5>Store Results...</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store