import { useState, useContext, useEffect } from "react";
import {
  ERC20,
  Header,
  Footer,
  UserProfile,
  Transfer,
  Profile,
} from "../Components/index";

import { contextProvider } from "../Context/index";
// import ConnectToBitski from "web3modal/dist/providers/connectors/bitski";

const create = () => {
  // const contextValue = useContext(StateContext);
  // console.log(contextValue);

  const [active, setactive] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const {
    address,
    setAddress,
    getAllERC20Listed,
    setGetAllERC20Listed,
    getUserERC20Listed,
    setGetUserERC20Listed,
    getAllDonation,
    setGetAllDonation,
    withdrawfunds,
    fee,
    setFee,
    balance,
    setBalance,
    mainBalance,
    setMainBalance,
    nativeToken,
    setNativeToken,
    fetchInitialData,
    createERC20,
    transferNativeToken,
    donateFunds,
  } = contextProvider();
  // console.log(mainBalance)

  return (
    <div>
      <Header />
      {/* {active && <ERC20 setActive={setactive} createERC20={createERC20} />} */}
      {/* {transfer && (
        <Transfer
          setTransfer={setTransfer}
          transferNativeToken={transferNativeToken}
        />
      )} */}
      <main>
        <UserProfile />
        <Profile
          nativeToken={nativeToken}
          transferNativeToken={transferNativeToken}
          mainBalance={mainBalance}
          balance={balance}
          getAllDonation={getAllDonation}
          withdrawfunds={withdrawfunds}
          getAllERC20Listed={getAllERC20Listed}
          getUserERC20Listed={getUserERC20Listed}
          createERC20={createERC20}
          donateFunds={donateFunds}
          setActive={setactive}
          setTransfer={setTransfer}
          address={address}
          fee={fee}
        />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default create;
