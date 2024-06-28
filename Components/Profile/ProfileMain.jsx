import React, { useState } from "react";
import { Table, TableTwo } from "../index";

const ProfileMain = ({
  nativeToken,
  mainBalance,
  getAllDonation,
  donateFunds,
  withdrawfunds,
  balance,
  createERC20,
  setOpen,
  open,
  fee,
  address,
  getAllERC20Listed,
  getUserERC20Listed,
  transferNativeToken,
  setActive,
  setTransfer
}) => {
  console.log(address, "address");
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonate = () => {
    donateFunds(donationAmount);
  };

  const details = [
    { title: "Created", value: `#${getUserERC20Listed?.length || 0}` },
    { title: "ERC20 Tokens", value: `${getAllERC20Listed?.length || 0}` },
    { title: "Listing Fee", value: `${fee} Eth` },
    { title: `${nativeToken?.symbol} Token`, value: `${nativeToken?.balance || 0}` },
    { title: "Doners", value: `${getAllDonation?.length || 0}` },
    { title: "Contract Balance", value: `${mainBalance == undefined ? "Only Owner see" : mainBalance} ETH` }
  ];

  const contractOwner = 0xfDa86653c104B8163bf9337E58c3313a7F58553f; // Ensure the contract owner address is a string

  return (
    <div className="col-xl-9 col-lg-9 col-md-8">
      <div className="row user-dashboard">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="user-top">
            <div className="user-balance">
              <span>Your Balance</span>
              <div className="main-bal">{balance?.slice(0, 7)}ETH</div>
            </div>
            <div className="userboard-btn">
              <input
                type="text"
                className="form-control"
                placeholder="Enter donation amount in ETH"
                value={donationAmount}
                onChange={handleDonationChange}
                style={{ marginRight: "10px", width: "200px", display: "inline-block" }}
              />
              <a className="user-btn coin-btn" onClick={handleDonate}>Donate</a>
              {address == contractOwner && (
                <a onClick={() => withdrawfunds()} className="user-btn color-btn">
                  Withdraw funds
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row dashboard-content">
        {details.map((detail, i) => (
          <div key={i + 1} className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-dash-head">
              <div className="dashboard-amount d-flex flex-wrap align-items-center">
                <div className="amount-content">
                  <span className="pro-name">{detail.title}</span>
                  <span className="pro-money">{detail.value}</span>
                </div>
                <div className="invest-tumb">
                  <img src={`img/icon/d${i + 1}.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open === "Dashboard" ? (
        <Table title="All Created ERC20 Tokens" tableData={getAllERC20Listed} />
      ) : open === "Your Token " ? (
        <Table title="Your Tokens" tableData={getUserERC20Listed} />
      ) : open === "Donation" ? (
        <TableTwo title="All user donations" tableData={getAllDonation} />
      ) : null}
    </div>
  );
};

export default ProfileMain;
