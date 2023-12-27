import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as DashboardLogo } from "../../assets/sidebar/dashboard-logo.svg";
import { ReactComponent as WalletLogo } from "../../assets/sidebar/wallet-alt-svgrepo-com.svg";
import { ReactComponent as SwapLogo } from "../../assets/sidebar/swap-horizontal-solid-svgrepo-com.svg";
import { ReactComponent as MintLogo } from "../../assets/sidebar/coin-svgrepo-com.svg";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as DeveloperLogo } from "../../assets/sidebar/developer-centerpublic-api-svgrepo-com.svg";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openGovern, setOpenGovern] = useState(false);
  const dropdownRef = useRef(null);
  const governRef = useRef();
  // const [selectedManage, setSelectedManage] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setOpenGovern(true);
    }
  };

  const handleOutsideGovernClick = (event) => {
    if (governRef.current && !governRef.current.contains(event.target)) {
      setOpenGovern(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutsideGovernClick);
    return () => {
      document.removeEventListener("click", handleOutsideGovernClick);
    };
  }, []);

  return (
    <>
      <ul className="sidebar">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <DashboardLogo />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className={location.pathname === "/wallet" ? "active" : ""}
          >
            <WalletLogo />
            Wallet
          </Link>
        </li>
        <li>
          <Link
            to="/swap"
            className={location.pathname === "/swap" ? "active" : ""}
          >
            <SwapLogo />
            Swap
          </Link>
        </li>
        <li>
          <div className="dropdown" ref={dropdownRef}>
            <Link
              onClick={handleClick}
              to="/bridge/cosmos"
              className={location.pathname === "/bridge" ? "active" : ""}
            >
              IBC/Bridge
            </Link>
            {isOpen && (
              <ul>
                <li>
                  <Link
                    className={
                      location.pathname === "/bridge/cosmos" ? "active" : ""
                    }
                    to="/bridge/cosmos"
                  >
                    Cosmos IBC Transfer
                  </Link>
                </li>
                <li>
                  <Link  className={
                      location.pathname === "/bridge/axel" ? "active" : ""
                    } to="/bridge/axel">Axelar Bridge</Link>
                </li>
                <li>
                  <Link  className={
                      location.pathname === "/bridge/gravity" ? "active" : ""
                    } to="/bridge/gravity">Gravity Bridge</Link>
                </li>
                <li>
                  <Link  className={
                      location.pathname === "/bridge/nomic" ? "active" : ""
                    } to="/bridge/nomic">Nomic BTC</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link
            to="/mint"
            className={location.pathname === "/mint" ? "active" : ""}
          >
            <MintLogo />
            Mint
          </Link>
        </li>
        <li>
          <Link
            to="/stake"
            className={location.pathname === "/stake" ? "active" : ""}
          >
            Stake
          </Link>
        </li>
        <li>
          <div className="dropdown" ref={governRef}>
            <Link
              onClick={() => setOpenGovern(!openGovern)}
              to="/govern/chain"
              className={location.pathname === "/govern/chain" ? "active" : ""}
            >
              Govern
            </Link>
            {openGovern && (
              <ul>
                <li>
                  <Link
                    className={
                      location.pathname === "/govern/chain" ? "active" : ""
                    }
                    to="/govern/chain"
                  >
                    Chain Governance
                  </Link>
                </li>
                <li>
                  <Link  className={
                      location.pathname === "/gevern/sentinel" ? "active" : ""
                    } to="/govern/sentinel">Sentinel</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link
            to="/developer/store"
            className={location.pathname === "/developer" ? "active" : ""}
          >
            <DeveloperLogo />
            Developer
          </Link>
        </li>
      </ul>

      <ul className="sidebar-mobile">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className={location.pathname === "/wallet" ? "active" : ""}
          >
            <WalletLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/swap"
            className={location.pathname === "/swap" ? "active" : ""}
          >
            <SwapLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/bridge"
            className={location.pathname === "/bridge" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/mint"
            className={location.pathname === "/mint" ? "active" : ""}
          >
            <MintLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/stake"
            className={location.pathname === "/stake" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/govern"
            className={location.pathname === "/govern" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/developer"
            className={location.pathname === "/developer" ? "active" : ""}
          >
            <DeveloperLogo />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
