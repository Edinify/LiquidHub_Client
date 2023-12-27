import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/mint/back-icon.svg";
import SuccessIcon from "../../../assets/govern/success-filled-svgrepo-com.svg";
import ErrorIcon from "../../../assets/govern/error-filled-svgrepo-com.svg";
import {ReactComponent as DownArrow} from "../../../assets/swap/arrow-down.svg";
import {ReactComponent as UpArrow} from "../../../assets/swap/arrow-up.svg"
import { useState } from "react";

const GovernManage = ({ propos }) => {
  const navigate = useNavigate();
  const [openFilter,setOpenFilter] = useState(false)
  const [selectedVote,setSelectedVote] = useState("")

  const votedData = [
    {
      id: 1,
      img: SuccessIcon,
      voted: "No",
      percent: "69.50%",
      price: "Quorum: 33%",
    },
    {
      id: 2,
      img: SuccessIcon,
      voted: "Yes",
      percent: "69.50%",
      price: "Quorum: 33%",
    },
    {
      id: 3,
      img: SuccessIcon,
      voted: "No",
      percent: "69.50%",
      price: "Quorum: 33%",
    },
    {
      id: 4,
      img: SuccessIcon,
      voted: "Yes",
      percent: "69.50%",
      price: "Quorum: 33%",
    },
    {
      id: 5,
      img: SuccessIcon,
      voted: "No",
      percent: "69.50%",
      price: "Quorum: 33%",
    },
  ];

  const selectVote=[
    {id:1,name:"All"},
    {id:2,name:"Yes"},
    {id:3,name:"No"},
    {id:4,name:"Abstain"},
    {id:5,name:"Veto"},
  ]

  return (
    <div className="govern-manage">
      <div className="container">
        <div className="govern-content">
          <div className="govern-header">
            <div
              className="back-position"
              onClick={() => {
                navigate("/govern/chain");
              }}
            >
              <BackIcon />
              <span>Back to all proposals</span>
            </div>
            <h1>{propos?.header}</h1>
            <p>{propos?.content}</p>
          </div>
          <div className="govern-cards">
            <div className="status">
              <span>
                Status : <strong>{propos?.status}</strong>
              </span>
            </div>
            <div className="propos-voted">
              {votedData.map((item) => (
                <div key={item.id}  className="vote-container">
                  {item.voted === "Yes" ? (
                    <img src={item.img} alt="" />
                  ) : (
                    <img src={ErrorIcon} alt="" />
                  )}
                  <span>{item.voted}</span>
                  <h5>{item.percent}</h5>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="govern-cards vote">
            <h4>Votes</h4>
            <div className="vote-header">
              <div className="left-side">
                <p>
                  Learn more about this proposal by viewing votes. Note that if
                  you don't vote, your vote is deferred to your staked
                  validator(s), so it's important to stake with a validator that
                  you feel is aligned with your interests.
                </p>
              </div>
              <div className="right-side">
                <h6> Filter votes</h6>
                <div className="filter-type" onClick={()=>setOpenFilter(!openFilter)} >
                  <p>{selectedVote?selectedVote : "All"}</p>
                  {openFilter ? <UpArrow/> : <DownArrow/>}

                  {openFilter &&
                  <div className="status-dropdown">
                  <ul className="select-vote" >
                    {selectVote.map(vote=>(
                      <li  onClick={()=>setSelectedVote(vote.name)}  key={vote.id} >{vote.name}</li>
                    ))}
                  </ul>
                  </div>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernManage;
