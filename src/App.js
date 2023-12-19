import './App.css';
import Header from './components/Header/Header';
import  Footer from "./components/Footer/Footer"
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboardpage from './pages/DashboardPage/Dashboardpage';
import WalletPage from './pages/WalletPage/WalletPage';
import SwapPage from './pages/SwapPage/SwapPage';
import MintPage from './pages/MintPage/MintPage';
import MintManage from './pages/MintPage/components/MintManage';
import { useState } from 'react';

function App() {
  const [currentObj,setCurrentObj] = useState()
  console.log(currentObj,"c")
  return (
    <div className="App">
      <Header/>
      
        <div className="container">
        <div className="pages-container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboardpage/>} />
        <Route path='/wallet' element={<WalletPage/>} />
        <Route path='/swap' element={<SwapPage/>} />
        <Route path='/mint' element={<MintPage setCurrentObj={setCurrentObj} />} />
        <Route path="/mint/manage/:id" element={<MintManage currentObj={currentObj} />} />
      </Routes>
      </div>
      </div>
      <Footer/>
     
    </div>
  );
}

export default App;