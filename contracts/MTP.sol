// Pragma statements
pragma solidity 0.5.12;

// Import statements
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol";



// Interfaces
// Libraries
// Contracts

contract MTP {

    //constructor
    constructor() public {
        // ...
    }

    IERC721 public ERC721Interface;

// Type declarations
// State variables
    // tokens
    // stakers
    // balances
    // stakeChain
    // stakeQueu

    //struct Staker
    //struct Token

// Events
    //StakerAdded
    //TokenAdded
    //newMTPTransfer
    //newMTPNetworkDeployed
    //newProxyFactoryDeployed
    //ProxyCreated



// Functions

    // External functions
    // external - Cannot be accessed internally, only externally

    // External functions that are view
    // ...

    // External functions that are pure
    // ...

    // Public functions
    //public - all can accesscontract
        // depositToken
        // withdrawToken
        // addStaker
        // addStakerToQeue
        // removeStaker
        // getStakeChainLength
        // mtpTransfer
        // pauseTransfer

    // Internal functions
    //internal - only this  and contracts deriving from it can access
        // isMTPToken

    // Private functions
    //private - can be accessed only from this contract
        // updateBiboBalances
}

