import "./stake.css";
import { ReactComponent as SearchIcon } from "../../assets/stake/search-svgrepo-com.svg";
import { ReactComponent as DownArrow } from "../../assets/swap/arrow-down.svg";
import { ReactComponent as UpArrow } from "../../assets/swap/arrow-up.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const StakePage = ({ setSelectedList }) => {
  const statusData = [
    { id: 1, name: "Active" },
    { id: 2, name: "Deactiving" },
    { id: 3, name: "Inactive" },
  ];
  const [selectedValid, setSelectedValid] = useState("");
  const [openStatus, setOpenStatus] = useState(false);
  const [changeSelect, setChangeSelect] = useState(false);

  const navigate = useNavigate();

  const validData = [
    {
      id: 1,
      name: "Tedctypto.io",
      total: "1000k",
      voting: "0.67%",
      commision: "5.00%",
      stake: "0.000",
      identity: "6D5F63F1DDCF0404",
      tokens: "436.398k KUJI",
      delegation:"1.000 KUJI",
      minSelf:"1.000000 KUJI",
      contact:"aaaaa@tedcrypto.io"
    },
    {
      id: 2,
      name: "aaa",
      total: "1000k",
      voting: "0.67%",
      commision: "5.00%",
      stake: "0.000",
      identity: "6D5F63F1DDCF0404",
      tokens: "436.398k KUJI",
      delegation:"1.000 KUJI",
      minSelf:"1.000000 KUJI",
      contact:"support@tedcrypto.io"
    },
    {
      id: 3,
      name: "aaa",
      total: "1000k",
      voting: "0.67%",
      commision: "5.00%",
      stake: "0.000",
      identity: "6D5F63F1DDCF0404",
      tokens: "436.398k KUJI",
      delegation:"1.000 KUJI",
      minSelf:"1.000000 KUJI",
      contact:"support@tedcrypto.io"
    },
  ];
  return (
    <>
      <div className="stake-page">
        <div className="container">
          <div className="stake-content">
            <div className="stake-header">
              <h1>Validators</h1>
              <div className="stake-search">
                <div className="stake-search-left">
                  <div className="search-input" tabIndex="0">
                    <input type="text" placeholder="Search" />
                    <SearchIcon />
                  </div>
                  <div
                    tabIndex="0"
                    onClick={() => setOpenStatus(!openStatus)}
                    className="valid-status "
                  >
                    <p>{selectedValid ? selectedValid : "Active"}</p>
                    {openStatus ? <UpArrow /> : <DownArrow />}
                    {openStatus && (
                      <div className="status-dropdown">
                        <ul>
                          {statusData.map((item) => (
                            <li
                              className={
                                selectedValid === item.name ? "active" : ""
                              }
                              key={item.id}
                            >
                              <span onClick={() => setSelectedValid(item.name)}>
                                {item.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="valid-number">
                    <span>{validData.length} validators</span>
                  </div>
                </div>
                <div className="search-right">
                  <div
                    className={`select-d ${changeSelect ? "active" : " "}`}
                    onClick={() => setChangeSelect(!changeSelect)}
                  >
                    <span>
                      {changeSelect
                        ? "Cancel selection"
                        : "Select delegators..."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="stake-lists">
              <h3>Equal Power Threshold</h3>
              {validData.map((item) => (
                <div
                  key={item.id}
                  className="stake-list"
                  onClick={() => {
                    setSelectedList(item);
                    navigate("/stake/manage");
                  }}
                >
                  <div className="stake-name">
                    <div className="name-bg"></div>
                    <span className="name">{item.name}</span>
                    <span>My Stake</span>
                    <span>{item.stake}</span>
                  </div>
                  <div className="stake-total">
                    <span>Total Stake</span>
                    <span>{item.total}</span>
                  </div>
                  <div className="stake-vote">
                    <span>Voting Power</span>
                    <span> {item.voting}</span>
                  </div>
                  <div className="stake-commision">
                    <span>Commision</span>
                    <span> {item.commision}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakePage;
