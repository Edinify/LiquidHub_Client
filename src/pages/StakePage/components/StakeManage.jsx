import { ReactComponent as BackIcon } from "../../../assets/mint/back-icon.svg";
import { ReactComponent as TimeIcon } from "../../../assets/stake/clock-1317-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import "./stake-manage.css";
import Logo from "../../../assets/stake/84110931964a58bc811be5b8e19e7605_360_360.jpg";
import CommisionImg from "../../../assets/stake/commision.png"
import { useState } from "react";
import StakeModal from "./StakeModal";

const StakeManage = ({ selectedList }) => {

    const [openModal,setOpenModal] = useState(false)

  const userData = [
    { id: 1, img: "", header: "Identity", data: selectedList.identity },
    { id: 2, img: "", header: "Bonded Tokens", data: selectedList.tokens },
    { id: 3, img: "", header: "Self Delegation", data: selectedList.delegation },
    {
      id: 4,
      img: "",
      header: "Min Self Delegation",
      data: selectedList.minSelf,
    },
    { id: 5, img: "", header: "Contact", data: selectedList.contact},
  ];
  const navigate = useNavigate();
  console.log(selectedList, "selected");
  return (
    <>
    {openModal && <StakeModal setOpenModal={setOpenModal} />}
    <div className="stake-manage">
      <div className="container">
        <div className="stake-content">
          <div className="stake-header">
            <div
              className="back-position"
              onClick={() => {
                navigate("/stake");
              }}
            >
              <BackIcon />
              <span>Back to all validators</span>
            </div>
          </div>
          <div className="stake-manage-cards">
            <div className="top-stake-cards">
              <div className="valid-name-card">
                <div className="card-header">
                  <div className="header-img">
                    <img src={Logo} alt="/" />
                  </div>
                  <div className="card-header-name">
                    <h2>{selectedList.name}</h2>
                  </div>
                  <div className="header-active">Active</div>
                </div>
                <div className="stake-card-context">
                  <p>
                    Bringing fun to staking. Delegate and grab your free lotto
                    tickets here: https://lotto.tedcrypto.io
                  </p>
                </div>
                <div className="stake-uptime">
                  <div className="stake-time-icon">
                    <TimeIcon />
                  </div>
                  <div className="uptime-context">
                    <span>Uptime</span>
                    <span>99.99%</span>
                  </div>
                </div>
              </div>
              <div className="valid-stake-card">
                <div className="stake-header">
                  <h3>My Stake</h3>
                </div>
                <div className="stake-context">
                  <p>{selectedList.stake}KUJI</p>
                </div>
                <div className="stake-buttons">
                  <button onClick={()=>setOpenModal(true)} >Stake</button>
                  <button>Redelegate</button>
                  <button>Unstake</button>
                </div>
              </div>
            </div>
            <div className="center-stake-cards">
              <div className="stake-user-card">
                {userData.map(item=>(
                    <div key={item.id} className="stake-uptime">
                  <div className="stake-time-icon">
                    <TimeIcon />
                  {/* <img src={item.img} alt="" /> */}
                  </div>
                  <div className="uptime-context">
                    <span>{item.header}</span>
                    <span>{item.data}</span>
                  </div>
                </div>
                ))}
                
              </div>
              <div className="user-commision">
              <div className="stake-header">
                  <h3>Commision</h3>
                </div>
                <div className="commision-img">
                    {/* <img src={CommisionImg} alt="" /> */}
                </div>
                <div className="commision-rate">
                    <div className="max-rate">
                        <h6>Max Rate</h6>
                        <span>10%</span>
                    </div>
                    <div className="change-rate">
                        <h6>Max Change Rate</h6>
                        <span>1%</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="bottom-stake-cards"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    </>
  );
};

export default StakeManage;
