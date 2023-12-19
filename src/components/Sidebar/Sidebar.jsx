import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as DashboardLogo } from "../../assets/sidebar/dashboard-logo.svg";
import { ReactComponent as WalletLogo } from "../../assets/sidebar/wallet-alt-svgrepo-com.svg";
import { ReactComponent as SwapLogo } from "../../assets/sidebar/swap-horizontal-solid-svgrepo-com.svg";
import { ReactComponent as MintLogo } from "../../assets/sidebar/coin-svgrepo-com.svg";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const [selectedManage, setSelectedManage] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
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
              to="/bridge"
              className={location.pathname === "/bridge" ? "active" : ""}
            >
              IBC/Bridge
            </Link>
            {isOpen && (
              <ul>
                <li>
                  <Link
                    className={location.pathname === "/bridge" ? "active" : ""}
                    to="/bridge"
                  >
                    Cosmos IBC Transfer
                  </Link>
                </li>
                <li>
                  <Link to="/axel">Axelar Bridge</Link>
                </li>
                <li>
                  <Link to="/gavity">Gravity Bridge</Link>
                </li>
                <li>
                  <Link to="/nomic">Nomic BTC</Link>
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
          <Link
            to="/govern"
            className={location.pathname === "/govern" ? "active" : ""}
          >
            Govern
          </Link>
        </li>
        <li>
          <Link
            to="/developer"
            className={location.pathname === "/developer" ? "active" : ""}
          >
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
            <DashboardLogo />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
