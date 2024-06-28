import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";

const SideBar = ({address,setOpen,open,setActive,setTransfer}) => {
  const menuList=[
    {
      name:"Dashboard",
      // link:"#"
    },
    {
      name:"Your Token",
      // link:"#"
    },
    {
      name:"Donation",
      // link:"#"
    },
  
  ]
  return <div className="col-xl-3 col-lg-3 col-md-4">
    <aside className="sidebar">
      <div className="dashboard-side">
        <div className="dashoard-head">
          <div className="dashboard-profile">
            <img src="img/about/profile.png" alt=""/>
            <div className="profile-content">
              <span className="pro-name">Muhangi Elioda</span>
              <span className="pro-number">{address?.slice(0,15)}...</span>
            </div>
          </div>
        </div>
        <div className="dashboard-menu">
          <ul>
            {menuList.map((el,id)=>
          <li onClick={()=>setOpen(el.name)}
           class={open == el.name? "active": ""} 
          
          >
            <a >
              <BsBoxArrowRight/>
              <span className="new_space"></span>
              {el.name}
            </a>
          </li>
          )}
          <li onClick={()=>setActive(true)}>
              <a href="#">
                <BsBoxArrowRight/>
                <span className="new_space"></span>
                 Create Token
              </a>
          </li>
          <li onClick={()=>setTransfer(true)}>
           <a href="#">
            <BsBoxArrowRight/>
            <span className="new_space"></span>
             Token Transfer
           </a>
          </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>;
};

export default SideBar;
