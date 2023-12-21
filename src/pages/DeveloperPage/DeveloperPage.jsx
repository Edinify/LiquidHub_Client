import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./developer.css"

const DeveloperPage = () => {
  const location = useLocation();

  return (
    <div className="developer-page">
      <div className="container">
        <div className="developer-content">
          <div className="developer-links">
            <ul>
              <li>
                <Link
                  to="store"
                  className={
                    location.pathname === "/developer/store" ? "active" : ""
                  }
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to="contract"
                  className={
                    location.pathname === "/developer/contract" ? "active" : ""
                  }
                >
                  Instantiate
                </Link>
              </li>
              <li>
                <Link
                  to="migrate"
                  className={
                    location.pathname === "/developer/migrate" ? "active" : ""
                  }
                >
                  Migrate
                </Link>
              </li>
              <li>
                <Link
                  to="query"
                  className={
                    location.pathname === "/developer/query" ? "active" : ""
                  }
                >
                  Query & Execute
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

export default DeveloperPage;
