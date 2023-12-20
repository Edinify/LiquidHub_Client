import React, { useState } from "react";
import "./common.css";
import { ReactComponent as DownArrow } from "../../../assets/swap/arrow-down.svg";
import { ReactComponent as UpArrow } from "../../../assets/swap/arrow-up.svg";
import AtomLogo from "../../../assets/swap/molecule-svgrepo-com.svg";
import { ReactComponent as ForwardIcon } from "../../../assets/bridge/forward-svgrepo-com.svg";

const Cosmos = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    img: "",
    name: "",
  });

  const firstData = [
    { id: 1, img: AtomLogo, name: "rATOM", num: "0.000" },
    { id: 2, img: AtomLogo, name: "FRNZ", num: "0.000" },
    { id: 3, img: AtomLogo, name: "PEPE", num: "0.000" },
    { id: 4, img: AtomLogo, name: "stlNJ", num: "0.000" },
  ];

  const [secondDrop, setSecondDrop] = useState(false);
  const [selectedSecondItem, setSelectedSecondItem] = useState({
    name: "",
    img: "",
  });

  const secondData = [
    { id: 1, img: AtomLogo, name: "rATOM", num: "0.000" },
    { id: 2, img: AtomLogo, name: "FRNZ", num: "0.000" },
    { id: 3, img: AtomLogo, name: "PEPE", num: "0.000" },
    { id: 4, img: AtomLogo, name: "stlNJ", num: "0.000" },
  ];

  const [sendNum, setSendNum] = useState(0);
  return (
    <div className="common-page cosmos">
      <div className="container">
        <div className="common-content-container">
          <div className="common-header">
            <h2>Send tokens between Cosmos Networks</h2>
          </div>
          <div className="common-content">
            <div className="common-top-content">
              <div className="input-drop-container">
                <div
                  className="input-container"
                  onClick={() => setFirstDrop(!firstDrop)}
                >
                  <input type="text" value={selectedItem.name} readOnly />
                  <span className="icon-container">
                    {firstDrop ? <UpArrow /> : <DownArrow />}
                  </span>
                </div>
                {firstDrop && (
                  <div className="first-drop">
                    {firstData.map((item) => (
                      <div
                        className="first-drop-container"
                        key={item.id}
                        onClick={() =>
                          setSelectedItem({ name: item.name, img: item.img })
                        }
                      >
                        <div
                          className="drop-img"
                          onClick={() => setFirstDrop(false)}
                        >
                          <img src={item.img} alt="" />
                          <p>{item.name}</p>
                        </div>
                        <div>
                          <span>{item.num}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <span className="forward-icon">
                <ForwardIcon />
              </span>
              <div className="input-drop-container">
                <div
                  className="input-container"
                  onClick={() => setSecondDrop(!secondDrop)}
                >
                  <input type="text" value={selectedSecondItem.name} readOnly />
                  <span className="icon-container">
                    {secondDrop ? <UpArrow /> : <DownArrow />}
                  </span>
                </div>
                {secondDrop && (
                  <div className="first-drop">
                    {secondData.map((item) => (
                      <div
                        className="first-drop-container"
                        key={item.id}
                        onClick={() =>
                          setSelectedSecondItem({
                            name: item.name,
                            img: item.img,
                          })
                        }
                      >
                        <div
                          className="drop-img"
                          onClick={() => setSecondDrop(false)}
                        >
                          <img src={item.img} alt="" />
                          <p>{item.name}</p>
                        </div>
                        <div>
                          <span>{item.num}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="common-top-content">
              <div className="input-drop-container">
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Loading balance..."
                    readOnly
                  />
                  <span className="icon-container">
                    <DownArrow />
                  </span>
                </div>
              </div>
              <span className="forward-icon">
                <ForwardIcon />
              </span>
              <div className="input-drop-container">
                <div className="input-container">
                  <input
                    type="text"
                    value={sendNum || ""}
                    placeholder={sendNum ? "" : "Send Amount"}
                    onChange={(e) => setSendNum(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="from-to">
            <span>From</span>
            <span><ForwardIcon/></span>
            <span>To</span>
          </div>
          <div className="transfer-btn">
            <button>Initiate IBC transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmos;
