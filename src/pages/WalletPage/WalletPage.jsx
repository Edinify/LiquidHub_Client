import React from "react";
import "./wallet.css";
import SonarImg from "../../assets/wallet/sonar.svg"
import LeapImg from "../../assets/wallet/leap.png"
import KelprImg from "../../assets/wallet/63edd5d1a40b9a48841ac1d2_Keplr Logo.svg"
import XDEFIImg from "../../assets/wallet/site-logo.svg"

const WalletPage = () => {

  const walletCard=[
    {id:1,img:SonarImg,text:"The Premier Kujira Experience "},
    {id:2,img:SonarImg,text:"Download Terra Station Browser Extension"},
    {id:3,img:KelprImg,text:"Download Kepir Station Browser Extension"},
    {id:4,img:LeapImg,text:"Download Leap Wallet"},
    {id:5,img:XDEFIImg,text:"Download XDEFI Wallet "},
  ]
  return (
    <div className="wallet-page">
      <div className="container">
        <div className="wallet-content">
          <div className="wallet-header">
            <h1>Wallet</h1>
            <div className="wallet-alert">
              <h5>You do not have a wallet connected</h5>
            </div>
            <p>
              If you already have a wallet setup, click on the <strong>Connect Wallet </strong>
              button on the top right of your screen.
            </p>
          </div>
          <div className="wallet-cards">
            <div className="wallet-card">
              {walletCard.map((item,i)=>(
                <div  key={item.id} className={`wallet-box box-${i + 1}`} >
                  <img src={item.img} alt="" />
                  <h2>{item.text}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
