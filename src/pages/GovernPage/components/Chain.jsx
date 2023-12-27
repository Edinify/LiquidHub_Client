import { useNavigate } from "react-router-dom";
import "../govern.css";
const Chain = ({setPropos,propos}) => {
  const navigate = useNavigate();


  console.log(propos,"propos")



  const coreCard = [
    {
      id: 1,
      header:
        "Update Instantiate Config: Quark v1.0.3: FUZN support, Query Enhancements & Bug fixes",
      content:
        "Give the Quark admin address (kujira1quarksa20wcszgqllmw3u7ckan6r2qzyvhtzaq) permission to instantiate Code IDs 205-210, enabling qcFUZN, updating query implementations in Quark Rewards contracts, and fixing other minor bugs.",
      status: "Passed",
      yourVote: "loading...",
      startDate: "21 Dec 23 23:42",
      endDate: "23 Dec 23 23:42",
    },
    {
      id: 2,
      header:
        "Update Instantiate Config: Quark v1.0.3: FUZN support, Query Enhancements & Bug fixes",
      content:
        "Give the Quark admin address (kujira1quarksa20wcszgqllmw3u7ckan6r2qzyvhtzaq) permission to instantiate Code IDs 205-210, enabling qcFUZN, updating query implementations in Quark Rewards contracts, and fixing other minor bugs.",
      status: "Voting Open",
      yourVote: "loading...",
      startDate: "21 Dec 23 23:42",
      endDate: "23 Dec 23 23:42",
    },
  ];

  return (
    <div className="govern-page">
      <div className="container">
        <div className="govern-content">
          <div className="govern-header">
            <h1>Chain Governance</h1>
            <p>Stake KUJI to participate in chain governance polls.</p>
          </div>
          <div className="stakes-container">
            <div className="total-stake">
              <span>Total Stake</span>
              <h4>65.0M</h4>
            </div>
            <div className="my-stake">
              <div className="content">
                <span>My Stake</span>
                <h4>0.000KUJI</h4>
              </div>
              <div className="stake-btn">
                <button onClick={() => navigate("/stake")}>Manage</button>
              </div>
            </div>
          </div>
          <div className="core-header">
            <h3>Core Proposals</h3>
            <p>
              Help shape the future of Kujira by voting on governance proposals.
              Note that if you don't vote, your vote is deferred to your staked
              validator(s), so it's important to stake with a validator that you
              feel is aligned with your interests.
            </p>
          </div>
          <div className="core-cards">
            {coreCard.map((item,i)=>(
                <div  key={item.id} className="core-card">
                    <div className="core-content">
                        <p>{i+1}:{item.header}</p>
                        <p>{item.content}</p>
                        <div className="view-btn">
                            <button onClick={()=>{
                              navigate("/govern/manage")
                              setPropos(item)}} >View Proposal</button>
                        </div>
                    </div>
                    <div className="core-date">
                        <div className="vote-status">
                            <span>Status: <strong>{item.status}</strong></span>
                            <span>Your Vote: <strong>{item.yourVote}</strong></span>
                        </div>
                        <div className="vote-date">
                            <span>Start: <strong>{item.startDate}</strong></span>
                            <span>End: <strong>{item.endDate}</strong></span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chain;
