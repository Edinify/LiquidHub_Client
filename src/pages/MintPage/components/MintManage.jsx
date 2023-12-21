import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/mint/back-icon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/mint/minus-svgrepo-com.svg";
import { ReactComponent as PlusIcon } from "../../../assets/mint/plus-large-svgrepo-com.svg";

import Chart from "react-apexcharts";
import "./manage.css";
import { useState } from "react";

const options = {
  chart: {
    type: "donut",
  },
  colors: ["#AA55E6"],
  labels: ["Label 1"],
};

const series = [100];

const firstCard = [
  { id: 1, header: "ARB Deposited", price: "0.000", currency: "0.00 USD" },
  { id: 2, header: "New LTV", price: "0.00", currency: "0.000$" },
  { id: 3, header: "USK Minted", price: "0.000", currency: "0.00USD" },
  {
    id: 4,
    header: "Liquidation Price",
    price: "0.0000 USD",
    currency: "",
  },
];

const mintFee = [
  { id: 1, name: "Mint Fee", value: "0.000 USK" },
  { id: 2, name: "Interest", value: "1.0% APR" },
];

const MintManage = ({ currentObj}) => {
  const [value, setValue] = useState(0);
  const [mintValue, setMintValue] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="mint-manage">
      <div className="container">
        <div className="mint-content">
          <div className="mint-header">
            <div
              className="back-position"
              onClick={() => {
                navigate("/mint");
              }}
            >
              <BackIcon />
              <span>Back to all positions</span>
            </div>
            <h1>Manage Positions</h1>
          </div>
          <div className="mint-cards">
            <div className="mint-content-container">
              {/* {setSelectedManage(currentObj)} */}
              <div className="mint-card">
                <div className="mint-card-container">
                  <div className="mint-card-top">
                    {/* top -left */}
                    <div className="mint-card-top-left">
                      <div className="card-top-left">
                        <div className="left-header">
                          <h3>{currentObj?.leftHead}</h3>
                        </div>
                        <div className="left-content-container">
                          <div className="left-img">
                            <img src={currentObj?.leftImg} alt="" />
                            <h3>{currentObj?.imgContent}</h3>
                          </div>
                          <div className="left-content-price">
                            <h5>{currentObj?.leftPrice1}</h5>
                            <h6>{currentObj?.leftPrice2}</h6>
                          </div>
                        </div>
                        <div className="left-rate">
                          <h5>{currentObj?.leftRateCon}</h5>
                          <span>{currentObj?.leftRateValue}</span>
                        </div>
                      </div>
                    </div>
                    {/*  top -right */}
                    <div className="mint-card-top-right">
                      <div className="card-top-right">
                        <div className="right-header">
                          <h3>{currentObj?.rightHead}</h3>
                        </div>
                        <div className="right-content-container">
                          <div className="right-img">
                            <img src={currentObj?.rightImg} alt="" />
                            <h3>{currentObj?.rightImgContent}</h3>
                          </div>
                          <div className="right-content-price">
                            <h5>{currentObj?.rightPrice1}</h5>
                            <h6>{currentObj?.rightPrice2}</h6>
                          </div>
                        </div>
                        <div className="right-rate">
                          <h5>{currentObj?.rightRateCon}</h5>
                          <span>{currentObj?.rightRateValue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bottom */}
                  <div className="mint-card-bottom">
                    <div className="mint-card-top-left">
                      <div className="card-top-left">
                        <div className="left-content-container">
                          <div className="left-header">
                            <h2>{currentObj?.bottomLeft}</h2>
                            <h2>{currentObj?.bottomLeft2}</h2>
                          </div>
                          <div className="left-content-price">
                            <h5>{currentObj?.bottomPrice1}</h5>
                            <h6>{currentObj?.bottomPrice2}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  bottom -right */}
                    <div className="mint-card-top-left">
                      <div className="card-top-left">
                        <div className="left-content-container">
                          <div className="left-header">
                            <h2>{currentObj?.bottomRight}</h2>
                            <h3>{currentObj?.bottomRight2}</h3>
                          </div>
                          <div className="left-content-price">
                            <h5>{currentObj?.bottomRightPrice}</h5>
                            <h6>{currentObj?.bottomRightPrice2}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mint-chart">
                <Chart
                  options={options}
                  series={series}
                  type="donut"
                  width="250"
                />
                <h5>
                  Maximum supply <strong>1.00M</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="mint-cards manage">
            <div className="mint-content-container">
              <div className="mint-card manage">
                <div className="mint-manage-left">
                  <div className="manage-left-t">
                    <div className="left-header">
                      <h3>Deposit ARB</h3>
                    </div>
                    <div className="deposit-input">
                      <button onClick={() => setValue(value - 1)}>
                        <MinusIcon />
                      </button>
                      <div className="deposit-value">
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                        />
                      </div>
                      <button onClick={() => setValue(value + 1)}>
                        <PlusIcon />
                      </button>
                    </div>
                    <div className="add-arb">
                      <h3>Add ARB</h3>
                      <div className="arb-btns">
                        <button>+25%</button>
                        <button>+50%</button>
                        <button>+75%</button>
                        <button>+100%</button>
                      </div>
                    </div>
                  </div>
                  <div className="manage-left-b">
                    <div className="left-header">
                      <h3>Mint USK</h3>
                    </div>
                    <div className="deposit-input">
                      <button onClick={() => setMintValue(mintValue - 1)}>
                        <MinusIcon />
                      </button>
                      <div className="deposit-value">
                        <input
                          type="number"
                          value={mintValue}
                          onChange={(e) => setMintValue(e.target.value)}
                        />
                      </div>
                      <button onClick={() => setMintValue(mintValue + 1)}>
                        <PlusIcon />
                      </button>
                    </div>
                    <div className="add-arb">
                      <h3>Mint USK</h3>
                      <div className="arb-btns">
                        <button>+25%</button>
                        <button>+50%</button>
                        <button>+75%</button>
                        <button>+100%</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mint-manage-right">
                  <div className="mint-right-top">
                    {firstCard.map((card, i) => (
                      <div key={card.id} className={`box-data box-${i + 1}`}>
                        <h3>{card.header}</h3>
                        <div className="box-currency">
                          <span>{card.price} </span>
                          <small>{card.currency}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mint-right-b">
                    <div className="mint-fee-container">
                      {mintFee.map((item) => (
                        <div className="mint-fee" key={item.id}>
                          <span>{item.name}</span>
                          <p>{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="open-pos">
                      <button>Open Position</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
        <div className="danger-zone">
          <div className="danger-container">
            <h3>Danger Zone</h3>
            <p>
              Self-liquidate your position. All your collateral will be sold at
              a discount via ORCA. The amount owed on the position will be
              burned, the debt paid off, and the remaining USK will be returned
              to your wallet.
            </p>

            <button>Self Liquidate</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MintManage;
