import React, { useState } from "react";
import "./mint.css";
import Chart from "react-apexcharts";
import MintImg from "../../assets/mint/dollar-minimalistic-svgrepo-com.svg";
import MintManage from "./components/MintManage";
import { useNavigate } from "react-router-dom";

const MintPage = ({setCurrentObj}) => {
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#AA55E6"],
    labels: ["Label 1"],
  };

  const series = [100];
  const [openPosition, setOpenPosition] = useState(false);
  const [selectedManage, setSelectedManage] = useState(null);
  const navigate = useNavigate()

  const mintData = [
    {
      id: 1,
      leftHead: "Deposited",
      leftImg: MintImg,
      imgContent: "ARB",
      leftPrice1: "0.000",
      leftPrice2: "0.000",
      leftRateCon: "Interest Rate",
      leftRateValue: "1.0%",
      rightHead: "Borrowed",
      rightImg: MintImg,
      rightImgContent: "USK",
      rightPrice1: "0.000",
      rightPrice2: "0.000",
      rightRateCon: "Interest Rate",
      rightRateValue: "1.0%",
      bottomLeft: "Loan Risk",
      bottomLeft2: "No Loan",
      bottomPrice1: "0.000",
      bottomPrice2: "0.000",
      bottomRight: "ARB Price",
      bottomRight2: "$ 1. 0620",
      bottomRightPrice: "Liquidation Price",
      bottomRightPrice2: "0.000",
    },
    {
      id: 2,
      leftHead: "Deposited",
      leftImg: MintImg,
      imgContent: "ARB",
      leftPrice1: "0.000",
      leftPrice2: "0.000",
      leftRateCon: "Interest Rate",
      leftRateValue: "1.0%",
      rightHead: "Borrowed",
      rightImg: MintImg,
      rightImgContent: "USK",
      rightPrice1: "0.000",
      rightPrice2: "0.000",
      rightRateCon: "Interest Rate",
      rightRateValue: "1.0%",
      bottomLeft: "Loan Risk",
      bottomLeft2: "No Loan",
      bottomPrice1: "0.000",
      bottomPrice2: "0.000",
      bottomRight: "ARB Price",
      bottomRight2: "$ 1. 0620",
      bottomRightPrice: "Liquidation Price",
      bottomRightPrice2: "0.000",
    },
  ];

  console.log(selectedManage,"select")

  return (
    <>
     { openPosition && <MintManage
        selectedManage={selectedManage}
        setOpenPosition={setOpenPosition}
        openPosition={openPosition}
      />
     }
      <div className="mint-page">
        <div className="container">
          <div className="mint-content">
            <div className="mint-header">
              <h1>Mint USK</h1>
              <span>Markets</span>
            </div>
            <div className="mint-cards">
              {mintData.map((item) => (
                <div key={item.id} className="mint-content-container">
                  {/* {setSelectedManage(item)} */}
                  <div className="mint-card">
                    <div className="mint-card-container">
                      <div className="mint-card-top">
                        {/* top -left */}
                        <div className="mint-card-top-left">
                          <div className="card-top-left">
                            <div className="left-header">
                              <h3>{item.leftHead}</h3>
                            </div>
                            <div className="left-content-container">
                              <div className="left-img">
                                <img src={item.leftImg} alt="" />
                                <h3>{item.imgContent}</h3>
                              </div>
                              <div className="left-content-price">
                                <h5>{item.leftPrice1}</h5>
                                <h6>{item.leftPrice2}</h6>
                              </div>
                            </div>
                            <div className="left-rate">
                              <h5>{item.leftRateCon}</h5>
                              <span>{item.leftRateValue}</span>
                            </div>
                          </div>
                        </div>
                        {/*  top -right */}
                        <div className="mint-card-top-right">
                          <div className="card-top-right">
                            <div className="right-header">
                              <h3>{item.rightHead}</h3>
                            </div>
                            <div className="right-content-container">
                              <div className="right-img">
                                <img src={item.rightImg} alt="" />
                                <h3>{item.rightImgContent}</h3>
                              </div>
                              <div className="right-content-price">
                                <h5>{item.rightPrice1}</h5>
                                <h6>{item.rightPrice2}</h6>
                              </div>
                            </div>
                            <div className="right-rate">
                              <h5>{item.rightRateCon}</h5>
                              <span>{item.rightRateValue}</span>
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
                                <h2>{item.bottomLeft}</h2>
                                <h2>{item.bottomLeft2}</h2>
                              </div>
                              <div className="left-content-price">
                                <h5>{item.bottomPrice1}</h5>
                                <h6>{item.bottomPrice2}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  bottom -right */}
                        <div className="mint-card-top-left">
                          <div className="card-top-left">
                            <div className="left-content-container">
                              <div className="left-header">
                                <h2>{item.bottomRight}</h2>
                                <h3>{item.bottomRight2}</h3>
                              </div>
                              <div className="left-content-price">
                                <h5>{item.bottomRightPrice}</h5>
                                <h6>{item.bottomRightPrice2}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="open-btn">
                        <button
                          onClick={() => {
                            setCurrentObj(item);
                            setOpenPosition(true);
                            navigate(`/mint/manage/${item.id}`)
                          }}
                        >
                          Open Position
                        </button>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintPage;
