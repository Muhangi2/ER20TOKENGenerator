import React from "react";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "ERC20",
      link: "/create",
    },
    // {
    //   name:"Contact us",
    //   link:"#",
    // },
    // {
    //   name:"Blog",
    //   link:"#",
    // }
  ];

  return (
    <>
      <style jsx>{`
        .eld-logo {
          font-size: 2.5rem; /* Adjust the size as needed */
          color:purple; /* Choose a color that you like */
          font-weight: bold;
          font-family: 'Arial', sans-serif; /* Choose a font family that you like */
        }

        .header-one {
          background-color: inherit; /* Example background color */
          padding: 10px 0;
        }

        .header-menu-area {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header_menu .main-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }

        .header_menu .main-menu li {
          margin-left: 20px;
        }

        .header_menu .main-menu li a {
          text-decoration: none;
          color: #333;
          font-size: 1rem;
        }

        .header_menu .main-menu li a:hover {
          color: purple; /* Matching the logo color */
        }
      `}</style>
      <header className="header-one heading">
        <div className="header-menu-area header-area">
          <div className="container">
            <div className="row">
              {/* itemone */}
              <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
                <div className="logo">
                  <a href="/">
                    <span className="eld-logo">ELDToken</span>
                  </a>
                </div>
              </div>
              {/* itemtwo */}
              <div className="col-xl-10 col-lg-10 col-md-9">
                <div className="header-right">
                  {/* <a href="#" className="top-btn coin-btn">
                    Buy Token
                  </a> */}
                </div>
                <div className="header_menu f-right">
                  <nav id="mobile_menu">
                    <ul className="new-nav-class main-menu">
                      {menuList.map((menu, index) => (
                        <li className="resulta" key={index + 1}>
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
      </header>
    </>
  );
};

export default Header;
