// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "./TCST.sol";

contract Found {

    TCST private token;
    
    mapping(address => uint) public etherBalanceOf;
    mapping(address => uint) public depositStart;
    mapping(address => bool) public isDeposited;
    
    event Deposit(address indexed user, uint value, uint timeStart);

    constructor(TCST t) public {
        token = t;
    }

    function deposit() payable public {

        etherBalanceOf[msg.sender] += msg.value; 
        depositStart[msg.sender] += block.timestamp; 
        isDeposited[msg.sender] = true;

        emit Deposit(msg.sender, msg.value, block.timestamp);

    }

     function withdraw() payable public {

    }


 
}