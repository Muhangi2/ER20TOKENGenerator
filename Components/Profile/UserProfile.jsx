import React from "react";
import {BsBoxArrowInRight} from "react-icons/bs";

const UserProfile = () => {
  return <div className="page-area bread-pd">
    <div className="breadcumb-overlay">
    <div className="container">
      <div className="row">
       <div className="col-xl-12">
           <div className="bread-bg">
             <div className="breadcrumb-title">
                 <h2>User Profile</h2>
                 <div className="bread-come">
                  <nav aria-label="breadcrumb">
                 <ol className="breadcrumb">
                  <li className="breadcrumb-items">
                        <a  className="black-text" href="#">Home</a>
                        <span  className="new_profile_space">
                          <BsBoxArrowInRight/>
                        </span>
                  </li>
                  <li className="breadcrumb-items">
                     <a className="black-text" href="#">User profile</a>
                  </li>
                 </ol>
                  </nav>
                 </div>
             </div>
           </div>
        </div>
      </div>

    </div>
    </div>
  </div>;
};

export default UserProfile;
