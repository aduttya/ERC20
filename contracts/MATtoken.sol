// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 import "./StandardToken.sol";
 import "./SafeMath.sol";

contract MATtoken is StandardToken,SafeMath{

    uint256 totalMarketCap = 10**6*10**18;
    uint256 tokenExchangeRate = 4000;
    uint payBalance = 0;
    uint256 initialBlock = block.timestamp;
    function createTokens()external payable{
        require(initialBlock  + 25 seconds > block.timestamp,'sale is ended');
        uint256 tokens = safeMult(tokenExchangeRate,msg.value);
        uint256 totalcreation = safeAdd(tokens,totalSupply);
        if(totalMarketCap > totalcreation){
            balances[msg.sender] += tokens;
            transfer(msg.sender,tokens);
            totalSupply += tokens;
            emit Transfer(address(this), msg.sender,tokens);}
        else{
            revert("tokens can't be created");
        }
    }
    
    
    
    }