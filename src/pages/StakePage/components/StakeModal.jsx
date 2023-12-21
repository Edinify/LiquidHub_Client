import React from 'react'
import "./stake-modal.css"
import {ReactComponent as CloseIcon} from "../../../assets/stake/x-close.svg"

const StakeModal = ({setOpenModal}) => {
  return (
    <div className='stake-modal'>
        <div className="stake-modal-container">
        <div className='stake-modal-context'>
            <div className="modal-header">
               <div className="header-context">
                <h3>Stake KUJI</h3>
                <p>Please note there is a <strong>2 week </strong>unstaking time.</p>
               </div>
               <div onClick={()=>setOpenModal(false)} className="close-icon">
                    <CloseIcon/>
               </div>
            </div>
            <div className="modal-input">
                <h4>Amount</h4>
                <input type="text" />
            </div>
        </div>

        </div>
    </div>
  )
}

export default StakeModal