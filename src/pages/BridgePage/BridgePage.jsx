import React from "react";
import "./bridge.css";
import { Link, useLocation } from "react-router-dom";

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
                  to="/bridge"
                  className={location.pathname === "/bridge" ? "active" : ""}
                >
                  Cosmos IBC Transfer
                </Link>
              </li>
              <li>
                <Link
                  to="/axel"
                  className={location.pathname === "/axel" ? "active" : ""}
                >
                  Axel Bridge
                </Link>
              </li>
              <li>
                <Link
                  to="/gravity"
                  className={location.pathname === "/gravity" ? "active" : ""}
                >
                  Gravity Bridge
                </Link>
              </li>
              <li>
                <Link
                  to="/nomic"
                  className={location.pathname === "/nomic" ? "active" : ""}
                >
                  Nomic BTC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgePage;
