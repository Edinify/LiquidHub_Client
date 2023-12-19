import React, { useState } from "react";
import "./swap.css";
import { ReactComponent as DownArrow } from "../../assets/swap/arrow-down.svg";
import { ReactComponent as UpArrow } from "../../assets/swap/arrow-up.svg";
import AtomLogo from "../../assets/swap/molecule-svgrepo-com.svg";
import { ReactComponent as SwapLogo } from "../../assets/sidebar/swap-horizontal-solid-svgrepo-com.svg";

const SwapPage = () => {
  //  first
  const [firstValue, setFirstValue] = useState(0);
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

  // second

  const [secondValue, setSecondValue] = useState(0);
  const [secondDrop, setSecondDrop] = useState(false);
  const [selectedSecondItem, setSelectedSecondItem] = useState({
    img: "",
    name: "",
  });

  const secondData = [
    { id: 1, img: AtomLogo, name: "rATOM", num: "0.000" },
    { id: 2, img: AtomLogo, name: "FRNZ", num: "0.000" },
    { id: 3, img: AtomLogo, name: "PEPE", num: "0.000" },
    { id: 4, img: AtomLogo, name: "stlNJ", num: "0.000" },
  ];

  // fixed

  const [fixed, setFixed] = useState(false);

  const rateData = [
    { id: 1, name: "Swap Rate", value: "0.000" },
    { id: 2, name: "Swap Fee", value: "0.000" },
    {
      id: 3,
      name: "",
      value: "",
      estimated: " Estimated return after fees: 0. 000 ATOM",
      wallet: "Connect Wallet",
    },
  ];

  const fixedData = [
    { id: 1, name: "Fixed Swap Rate", value: "5.204000" },
    {
      id: 2,
      name: "Return after fees:",
      value: "0.000000 KUJI",
      percent: " +0.000%",
    },
    {
      id: 3,
      name: "Estimated amount filled instantly:",
      value: "0.000000 KUJI",
      percent: " +0.000%",
    },
    { id: 4, name: null, value: null, percent: null, wallet: "Connect Wallet" },
  ];

  return (
    <div className="swap-page">
      <div className="container">
        <div className="swap-content">
          <div className="swap-header">
            <h1>Swap</h1>
            <p>
              Instantly trade on the Kujira Network at the best available rate
            </p>
          </div>
          <div className="swap-exchange">
            <div className="swap-dropdowns">
              <div className="left-drop">
                <div
                  className="input-container"
                  onClick={() => setFirstDrop(!firstDrop)}
                >
                  <input type="text" value={selectedItem.name} readOnly />
                  <span className="icon-container">
                    {firstDrop ? <UpArrow /> : <DownArrow />}
                  </span>
                </div>
                <input
                  type="number"
                  value={firstValue}
                  onChange={(e) => setFirstValue(e.target.value)}
                />
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

              <div>
                <SwapLogo />
              </div>

              <div className="right-drop">
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
                  <div className="second-drop">
                    {secondData.map((item) => (
                      <div
                        className="second-drop-container"
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

          {/* rate */}

          <div className="swap-rate">
            {rateData.map((item) => (
              <div className="swap-rate-container">
                <div className="swap-rate-fee">
                  <h5>{item.name}</h5>
                  {item.estimated && (
                    <div className="estimated">{item.estimated}</div>
                  )}
                </div>
                <div className="fixed-rate-nums">
                  <h5>{item.value}</h5>
                  {item.wallet && (
                    <div className="connect-wallet">{item.wallet}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* fixed-price */}

          <div className="fixed-price">
            <div onClick={() => setFixed(!fixed)} className="fixed-header">
              <span>Fixed Price Swap</span>
              {fixed ? <UpArrow /> : <DownArrow />}
            </div>

            {fixed && (
              <div className="fixed-rate">
                <div className="top-container">
                  {fixedData.map((item) => (
                    <div className="fixed-rate-fee">
                      <div className="swap-rate-fee">
                        <h5>{item.name}</h5>
                      </div>
                      <div className="fixed-rate-nums">
                        {item.percent ? (
                          <h5>
                            {item.value} <span>{item.percent}</span>{" "}
                          </h5>
                        ) : (
                          <h5>{item.value} </h5>
                        )}
                        {item.wallet && (
                          <div className="connect-wallet">{item.wallet}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="last-tag">
                  Track your order on FIN. Get notified when the rest of your
                  order is filled via SeaShanty
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
