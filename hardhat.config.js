require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_NODE_PROVIDER =
  "https://base-sepolia.g.alchemy.com/v2/N48-ngWWEU--ZzO7CfGzDHila4E3JP86";
//polygon-amoy.g.alchemy.com/v2/3Ibg6qMaI4LdrWrSxLpXPbqNUALAzIwq
https: module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    base_sepolia: {
      url: NEXT_PUBLIC_NODE_PROVIDER, // Replace with the actual faucet URL
      accounts: [process.env.privateKey], // Replace with the correct chainId for Sepolia
    },
  },
};
