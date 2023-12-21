import "./common.css";

const Nomic = () => {
  return (
    <div className="common-page nomic">
      <div className="container">
        <div className="common-content-container">
          <div className="axel-header">
            <h2>
              Send BTC to your Kujira Address Powered by <strong>nomic</strong>
            </h2>
          </div>

          <div className="nomic-container">
            <p>
              Initiating the bridge will generate a unique BTC address.
              <br />
              BTC sent to this address will be forwarded to the connected Kujira
              wallet in the form of nBTC.
            </p>
          </div>

          <div className="transfer-btn">
            <button>Connet Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nomic;
