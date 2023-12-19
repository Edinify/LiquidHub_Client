import React from "react";
import "./dashboard.css";
import Chart from "react-apexcharts";


const Dashboardpage = () => {
  const firstCard = [
    { id: 1, header: "Token Price", price: "4.990", currency: "USD" },
    { id: 2, header: "Fully Diluted Value", price: "583.71M", currency: "" },
    { id: 3, header: "Liquid Supply", price: "39.43M", currency: "KUJI" },
    {
      id: 4,
      header: "90 Day Revenue",
      price: "$15.40M",
      currency: "24.41% APR",
    },
  ];

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#AA55E6"],
    labels: ["Label 1"],
  };

  const options2 = {
    chart: {
      type: "donut",
    },
    colors: ["#5FFBD0","#AA55E6",  "#1C6599", "#F47C01","#181823"],
    labels: ["Label 1"],
  };

  const series = [100];

  const series2 = [50, 25, 10, 10,5];

  const thirdCard = [
    {
      id: 1,
      header: "Block Height",
      price: "16,046,026",
      currency: "",
    },
    {
      id: 2,
      header: "Block Time",
      price: "4,282",
      currency: "ms",
    },
    { id: 3, header: "USK Price", price: "0.9997", currency: "USD" },
    { id: 4, header: "Inflation", price: "0.00", currency: "%" },
  ];
  // 

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Kujiro Dashboard</h1>
          </div>
          <div className="dashboard-cards">
            <div className="dashboard-box ">
              <div className="box-container">
                <div className="box-content">
                  {firstCard.map((card, i) => (
                    <div  key={card.id} className={`box-data box-${i + 1}`}>
                      <h3>{card.header}</h3>
                      <div className="box-currency">
                        <span>{card.price} </span>
                        <small>{card.currency}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dashboard-box ">
              <div className="box-container stake">
                <div className="box-content">
                  <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="250"
                  />
                  <div className="staked-balance">
                    <h3>Your Stacked Balance:</h3>
                    <div className="b"></div>
                    <span>
                      0.000 <small>KUJI</small>
                    </span>
                  </div>
                  <button className="stake-btn">Stake KUJI</button>
                </div>
              </div>
            </div>

            <div className="dashboard-box ">
              <div className="box-container">
                <div className="box-content block">
                  {thirdCard.map((card, i) => (
                    <div key={card.id} className={`box-data box-${i + 1}`}>
                      <h3>{card.header}</h3>
                      <div className="box-currency">
                        <span>{card.price} </span>
                        <small>{card.currency}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="dashboard-box ">
            <div className="box-container stake">
                <div className="box-content">
                  <Chart
                    options={options2}
                    series={series2}
                    type="donut"
                    width="250"
                  />
                  <div className="staked-balance">
                    <h3>Your Stacked Balance:</h3>
                    <div className="b"></div>
                    <span>
                      0.000 <small>KUJI</small>
                    </span>
                  </div>
                  <button className="fund-btn">Fund Community Pool</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
