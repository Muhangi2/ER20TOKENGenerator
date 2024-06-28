// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Generator is ERC20 {
    constructor(
        uint256 _initialSupply,
        string memory _tokeName,
        string memory _tokenSymbol
    ) ERC20(_tokeName, _tokenSymbol) {
        _mint(msg.sender, _initialSupply);
    }
}
