import React from "react";

const Header = () => {
  const menuList=[
    {
      name:"Home",
      link:"/",
    },
     {
      name:"ERC20",
      link:"/create",
    },
     {
      name:"Contact us",
      link:"#",
    },
    {
      name:"Blog",
      link:"#",
    }
  ]
  return <header className="header-one heading">
        <div className="header-menu-area header-area">
          <div className="container">
            <div className="row">
              {/* itemone */}
              <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
                <div className="logo">
                  <a href="/"> 
                  <img src="img/logo/logo2.png" alt=""/>
                   </a>
                </div>
              </div>
              {/* itemtwo */}
              <div className="col-xl-10 col-lg-10 col-md-9">
                <div className="header-right">
                  <a href="#" className="top-btn coin-btn">
                    Buy Token
                  </a>
                </div>
                <div className="header_menu f-right">
                   <nav id="mobile_menu">
                    <ul className="new-nav-class main-menu">
                      {menuList.map((menu, index) => (
                         <li className="resulta" key={index+1}>
                          <a href={menu.link}>{menu.name}</a>
                         </li>
                          ))}
                      <li>
                        <a></a>
                      </li>
                    </ul>
                   </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
  </header>;
};

export default Header;
