

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract TCST is ERC20 {
    address public minter;
    
    event MinterChanged(address indexed from, address to);

    constructor() ERC20("The Common Sense Token", "TCST") {
         minter = msg.sender;
    }

    function changeMinter(address newMinter) public returns (bool) {
        require(minter == msg.sender, 'Error, Minter role missing.');
        minter = newMinter;
        emit MinterChanged(msg.sender, newMinter);
        return true;
    }

    function mint(address to, uint256 amount) public {
        require(minter == msg.sender, 'Error, Minter role missing.');
        _mint(to, amount);
    }
}