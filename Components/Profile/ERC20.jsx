import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  const toastStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: type === "success" ? "green" : "red",
    color: "#fff",
    borderRadius: "5px",
    zIndex: 1000,
  };

  return (
    <div style={toastStyle}>
      {message}
      <button onClick={onClose} style={{ marginLeft: "10px", color: "#fff" }}>
        &times;
      </button>
    </div>
  );
};

const ERC20 = ({ setActive, createERC20 }) => {
  const [token, setToken] = useState({
    name: "",
    symbol: "",
    supply: 0,
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e?.target?.value });
  };

  const handleCreateToken = async () => {
    setLoading(true);
    try {
      await createERC20(token);
      setToast({ message: "Token created successfully!", type: "success", visible: true });
    } catch (error) {
      setToast({ message: `Error: ${error.message || "Failed to create token"}`, type: "error", visible: true });
    } finally {
      setLoading(false);
      setTimeout(() => setToast({ ...toast, visible: false }), 3000);
    }
  };

  return (
    <div className="login-area area-padding fix">
      <div className="login-overlay"></div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="login-form signup-form">
              <span onClick={() => setActive(false)}><AiOutlineClose /></span>
              <h4 className="login-title text-center">Create ERC20</h4>
              <div id="contactForm" className="log-form">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={(e) => handleTokenInfo("name", e)}
                />
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Symbol"
                  required
                  onChange={(e) => handleTokenInfo("symbol", e)}
                />
                <input
                  type="number"
                  id="msg_subject"
                  className="form-control"
                  placeholder="Total supply"
                  required
                  onChange={(e) => handleTokenInfo("supply", e)}
                />
                <button
                  onClick={handleCreateToken}
                  type="submit"
                  id="submit"
                  className="slide-btn color-btn login-btn"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Token"}
                </button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
                <div className="clear"></div>
                <div className="separetor text-center">
                  <span>Create your ERC20 Token from here</span>
                </div>
                <div className="sign-icon">
                  <div className="acc-not">
                    with minimum fee <a>0.01</a> ETH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, visible: false })}
        />
      )}
    </div>
  );
};

export default ERC20;
