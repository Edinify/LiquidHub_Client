import React from "react";
import "./footer.css";
import TwitterLogo from "../../assets/footer/twitter-3-svgrepo-com.svg";
import DiscordLogo from "../../assets/footer/discord-svgrepo-com.svg";

const Footer = () => {
  const list = [
    { id: 1, name: "Kujira" ,link:"" },
    { id: 2, name: "Developer",link:"/developer" },
    { id: 3, name: "Docs",link:"" },
    { id: 4, name: "Merch",link:"" },
    { id: 5, name: "Apps",link:"" },
    { id: 6, name: "Connect to Migration Network",link:"" },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-list">
              <ul>
                {list.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-icons">
              <img src={TwitterLogo} alt="logo" />
              <img src={DiscordLogo} alt="logo" />
              <img src={TwitterLogo} alt="logo" />
              <img src={TwitterLogo} alt="logo" />
              <img src={TwitterLogo} alt="logo" />
            </div>
          </div>
          {/* <div className="footer-bottom">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
