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

function App() {
  const [currentObj, setCurrentObj] = useState();
  const [openPosition, setOpenPosition] = useState(false);

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
            <Route path="/bridge" element={<BridgePage/>} />
            <Route
              path="/mint"
              element={<MintPage setCurrentObj={setCurrentObj} setOpenPosition={setOpenPosition} openPosition={openPosition} />}
            />
            <Route
              path="/mint/manage"
              element={<MintManage currentObj={currentObj} openPosition={openPosition} setOpenPosition={setOpenPosition}  />}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
