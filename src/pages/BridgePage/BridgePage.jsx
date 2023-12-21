
import React from "react";
import "./bridge.css";
import { Link, useLocation, Outlet } from "react-router-dom";

const BridgePage = () => {
  const location = useLocation();

  return (
    <div className="bridge-page">
      <div className="container">
        <div className="bridge-content">
          <div className="bridge-links">
            <ul>
              <li>
                <Link
                  to="cosmos"
                  className={
                    location.pathname === "/bridge/cosmos" ? "active" : ""
                  }
                >
                  Cosmos IBC Transfer
                </Link>
              </li>
              <li>
                <Link
                  to="axel"
                  className={
                    location.pathname === "/bridge/axel" ? "active" : ""
                  }
                >
                  Axel Bridge
                </Link>
              </li>
              <li>
                <Link
                  to="gravity"
                  className={
                    location.pathname === "/bridge/gravity" ? "active" : ""
                  }
                >
                  Gravity Bridge
                </Link>
              </li>
              <li>
                <Link
                  to="nomic"
                  className={
                    location.pathname === "/bridge/nomic" ? "active" : ""
                  }
                >
                  Nomic BTC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default BridgePage;
