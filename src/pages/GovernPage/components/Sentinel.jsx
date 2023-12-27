import "./common.css";
import Leap from "../../../assets/wallet/leap.png";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/govern/right-2-svgrepo-com.svg";
import { useState } from "react";
import StakeModal from "../../StakePage/components/StakeModal";
const Sentinel = () => {
  const navigate = useNavigate();
  const [openModal,setOpenModal] = useState(false)

  const memberData = [
    { id: 1, img: Leap, name: "mintMoon" },
    { id: 2, img: Leap, name: "mintMoon" },
    { id: 3, img: Leap, name: "mintMoon" },
    { id: 4, img: Leap, name: "mintMoon" },
    { id: 5, img: Leap, name: "mintMoon" },
    { id: 6, img: Leap, name: "mintMoon" },
    { id: 7, img: Leap, name: "mintMoon" },
    { id: 8, img: Leap, name: "mintMoon" },
  ];
  return (
    <>
    {openModal && <StakeModal setOpenModal={setOpenModal}  type="sentinel" />}
    <div className="sentinel-page">
      <div className="container">
        <div className="sentinel-content">
          <div className="sentinel-header">
            <div className="header-left">
              <h1>Kujira Sentinel</h1>
              <p>Technical review & oversight for the Kujira Blockchain</p>
            </div>
            <div
              className="header-right"
              onClick={() => navigate("/govern/chain")}
            >
              <span>Chain Governance</span>
              <BackIcon />
            </div>
          </div>
          <div className="members-card">
            <div className="members-card-content">
              <h3>Members</h3>
              <p>
                The Kujira Sentinel is the technical version of the Senate. By
                providing the CW4 multisig contract address with chain-wide
                contract instantiate permissions, we'll create better
                development velocity and autonomy for protocol builders, without
                sacrificing security. Furthermore, by delegating contract
                instantiation permissions to a multisig of a select group of
                technical experts, deployed code can be assessed and verified
                more rigorously than is currently possible with the global
                governance deployments. Long-term, the Kujira Sentinel will
                create a foundation for a peer-led audit and review process,
                significantly reducing the cost to teams launching new
                protocols.
              </p>
              <div className="member-imgs">
                {memberData.map((item) => (
                  <div key={item.id} className="member-img">
                    <ul>
                      <li>
                        <img src={item.img} alt="" />
                        <span>
                          <a href="/">{item.name}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="proposals">
            <h3>Proposals</h3>
            <div  onClick={()=>setOpenModal(true)} className="submit-propos">
              <button>Submit a proposal</button>
            </div>
          </div>
          <div className="proposal-text">
            <h3>There are currently no proposals</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sentinel;
