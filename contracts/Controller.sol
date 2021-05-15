// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./CSTokenFactory.sol";

contract Controller is Ownable {
   
    mapping(uint256 => Index) public index;
    
    uint256 public indexsCount = 0;
    
    struct Index {
        address _wallet;
        address _smartContract;
    }
    
    function addIndex(address _wallet, address _smartContract) public onlyOwner {
        index[indexsCount] = Index(_wallet, _smartContract);
        indexsCount += 1;
    }
    
    function modifyIndex(uint256 _id, address _wallet, address _smartContract) public onlyOwner {
        index[_id] = Index(_wallet, _smartContract);
    }
    
    function removeIndex(uint256 _id) public onlyOwner {
        delete index[_id];
        indexsCount -= 1;
    }
    
    function getIndexs() public view returns(Index[] memory) {
        Index[] memory indexsList = new Index[](indexsCount);
        for (uint i = 0; i < indexsCount; i++) {
            indexsList[i] = index[i];
        }
        return indexsList;
    }
    
    function depositToIndex(uint256 _id) public payable returns(bool) {
        Index memory selectedIndex = index[_id];
        payable(selectedIndex._wallet).transfer(msg.value);
        CSTokenFactory token = CSTokenFactory(selectedIndex._smartContract);
        uint256 amount = token.getPrice() * msg.value;
        token.mint(msg.sender, amount);
        return true;
    }
    
}