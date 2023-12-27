import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboardpage from "./pages/DashboardPage/Dashboardpage";
import WalletPage from "./pages/WalletPage/WalletPage";
import SwapPage from "./pages/SwapPage/SwapPage";
import MintPage from "./pages/MintPage/MintPage";
import MintManage from "./pages/MintPage/components/MintManage";
import { useState } from "react";
import BridgePage from "./pages/BridgePage/BridgePage";
import Axel from "./pages/BridgePage/components/Axel";
import Gravity from "./pages/BridgePage/components/Gravity";
import Nomic from "./pages/BridgePage/components/Nomic";
import Cosmos from "./pages/BridgePage/components/Cosmos";
import DeveloperPage from "./pages/DeveloperPage/DeveloperPage";
import Store from "./pages/DeveloperPage/components/Store";
import Contract from "./pages/DeveloperPage/components/Contract";
import Migrate from "./pages/DeveloperPage/components/Migrate";
import Query from "./pages/DeveloperPage/components/Query";
import StakePage from "./pages/StakePage/StakePage";
import StakeManage from "./pages/StakePage/components/StakeManage";
import GovernPage from "./pages/GovernPage/GovernPage";
import  Chain from "./pages/GovernPage/components/Chain"
import  Sentinel from "./pages/GovernPage/components/Sentinel"
import GovernManage from "./pages/GovernPage/components/GovernManage";

function App() {
  const [currentObj, setCurrentObj] = useState();
  const [openPosition, setOpenPosition] = useState(false);
  const [selectedList,setSelectedList] = useState({})
  const [propos,setPropos] = useState()

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="pages-container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboardpage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/bridge" element={<BridgePage />}>
              <Route index element={<Cosmos />} />
              <Route path="cosmos" element={<Cosmos />} />
              <Route path="axel" element={<Axel />} />
              <Route path="gravity" element={<Gravity />} />
              <Route path="nomic" element={<Nomic />} />
            </Route>
            <Route
              path="/mint"
              element={
                <MintPage
                  setCurrentObj={setCurrentObj}
                  setOpenPosition={setOpenPosition}
                  openPosition={openPosition}
                />
              }
            />
            <Route
              path="/mint/manage"
              element={
                <MintManage
                  currentObj={currentObj}
                  openPosition={openPosition}
                  setOpenPosition={setOpenPosition}
                />
              }
            />
            <Route path="/stake" element={<StakePage setSelectedList={setSelectedList} />} />
            <Route path="/stake/manage" element={<StakeManage selectedList={selectedList} />} />
            <Route path="/govern" element={<GovernPage/>} >
              <Route path="chain" element={<Chain setPropos={setPropos} propos={propos} />} />
              <Route path="sentinel" element={<Sentinel/>} />
              </Route>
              <Route path="/govern/manage" element={<GovernManage propos={propos} />} />
            <Route path="/developer" element={<DeveloperPage />}>
              <Route index element={<Store />} />
              <Route path="store" element={<Store />} />
              <Route path="contract" element={<Contract/>} />
              <Route path="migrate" element={<Migrate/>} />
              <Route path="query" element={<Query/>} />
            </Route>

          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
