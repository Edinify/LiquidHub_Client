import React, { useState } from "react";
import "./common.css";
import { ReactComponent as DownArrow } from "../../../assets/swap/arrow-down.svg";
import { ReactComponent as UpArrow } from "../../../assets/swap/arrow-up.svg";
import AtomLogo from "../../../assets/swap/molecule-svgrepo-com.svg";

const Gravity = () => {
 

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

  const [secondValue, setSecondValue] = useState(0);

  const sourceData = [
    {
      id: 2,
      source: "Source Balance",
      name: "Connect Wallet",
      class: "wallet",
    },
  ];

  return (
    <div className="common-page gravity">
      <div className="container">
        <div className="common-content-container">
          <div className="axel-header">
            <h2>
              Cross-chain communication to the Kujira Network. Powered by <strong>Gravity</strong>
            </h2>
          </div>
          <div className="common-content">
            <div className="common-top-content">
              <div className="left-drop">
                <div
                  className="input-container"
                  onClick={() => setSecondDrop(!secondDrop)}
                >
                  <input type="text" value={selectedSecondItem.name} readOnly />
                  <span className="icon-container">
                    {secondDrop ? <UpArrow /> : <DownArrow />}
                  </span>
                </div>
                <input
                  type="number"
                  value={secondValue}
                  onChange={(e) => setSecondValue(e.target.value)}
                />
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
          </div>
          <div className="axel-source">
            <ul>
              {sourceData.map((item) => (
                <li key={item.id}>
                  <span>{item.source}</span>
                  <span className={item.class}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="transfer-btn">
            <button>Connet Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gravity;
