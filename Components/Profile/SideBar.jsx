import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";

const SideBar = ({ address, setOpen, open, setActive, setTransfer }) => {
  const menuList = [
    { name: "Dashboard" },
    { name: "Your Token" },
    { name: "Donation" },
    { name: "Create Token", action: () => setActive(true) },
    { name: "Token Transfer", action: () => setTransfer(true) },
  ];

  return (
    <div className="col-xl-3 col-lg-3 col-md-4">
      <aside className="sidebar">
        <div className="dashboard-side">
          <div className="dashoard-head">
            <div className="dashboard-profile">
              <img src="img/about/profile.png" alt="" />
              <div className="profile-content">
                <span className="pro-name">Your Contract address</span>
                <span className="pro-number">{address?.slice(0, 15)}...</span>
              </div>
            </div>
          </div>
          <div className="dashboard-menu">
            <ul>
              {menuList.map((el, id) => (
                <li
                  key={id}
                  onClick={() => {
                    setOpen(el.name);
                    if (el.action) el.action();
                  }}
                  className={open === el.name ? "active" : ""}
                >
                  <a href="#">
                    <BsBoxArrowRight />
                    <span className="new_space"></span>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
