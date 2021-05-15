// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CSTokenFactory is ERC20, Ownable {
    
    address public wallet;
    
    constructor(string memory _name, string memory _symbol, address _owner, address _wallet) ERC20(_name, _symbol) {
        wallet = _wallet;
        transferOwnership(_owner);
    }
    
    uint256 public price = 10000000000000000; // Wei
    
    
    function getPrice() external view returns(uint256) {
        return price;
    }
    
    struct Asset {
        string symbol;
        string weight;
        address id;
    }
    
    Asset[] assets;
    
    
    function addAsset(string memory _symbol, string memory _weight, address _id) public onlyOwner returns(bool) {
        assets.push(Asset(_symbol, _weight, _id));
        return true;
    }
    
    function modifyAsset(string memory _symbol, string memory _weight, address _id) public onlyOwner returns(bool) {
        for (uint i = 0; i < assets.length; i++) {
            if (assets[i].id == _id) {
                assets[i] = Asset(_symbol, _weight, _id);
            }
        }
        return true;
    }
    
    function mint(address _buyer, uint256 amount) public onlyOwner returns(bool) {
        _mint(_buyer, amount);
        return true;
    }
    
    
    function getAssets() public view returns(Asset[] memory) {
        return assets;
    }
    
    
    
}