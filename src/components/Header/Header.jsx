import React from 'react'
import "./header.css"
import Logo from "../../assets/header/kujira-blue@2x.07824ad4.png";
import MobileLogo from "../../assets/header/kujira-blue-mobile.7a6f5460.png"

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="mobile-logo">
                    <img src={MobileLogo} alt="logo" />
                </div>
                <div className="header-buttons">
                    <button>Connect Wallet</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header