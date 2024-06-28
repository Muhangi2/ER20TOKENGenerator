import { useState, useContext, useEffect } from "react";
import {
  ERC20,
  Header,
  Footer,
  UserProfile,
  Transfer,
  Profile,
  TransferToken,
} from "../Components/index";

import { contextProvider } from "../Context/index";

const create = () => {
  const [active, setActive] = useState(false);
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

  // Ensure only one modal is active at a time
  useEffect(() => {
    if (transfer) {
      setActive(false);
    }
  }, [transfer]);

  useEffect(() => {
    if (active) {
      setTransfer(false);
    }
  }, [active]);

  return (
    <div>
      <Header />
      {
        transfer && (
          <TransferToken
            setTransfer={setTransfer}
            transferNativeToken={transferNativeToken}
            setActive={setActive}
            createERC20={createERC20}
          />
        )
        // <Transfer
        //   setTransfer={setTransfer}
        //   transferNativeToken={transferNativeToken}
        // />
      }
      {active && <ERC20 setActive={setActive} createERC20={createERC20} />}

      <main>
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
          setActive={setActive}
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
