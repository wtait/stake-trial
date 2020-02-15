// Pragma statements
pragma solidity 0.5.12;

// Import statements
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
    mapping(uint256 => Token) public tokens;//maps token id to token struct
    mapping(address => Staker) public stakers;
    mapping(address => int256) public balances; //bibo balances. can be positive or negative;
    mapping(uint256 => address[]) public stakeChain;  //maps a token id to an array of staker addresses
    mapping(uint256 => address[]) public stakeQueu; //pending transfer callers of token when paused


    struct Staker { //change to TokenStaker
        address staker_Address_; //redundant
        int staker_Stake_Balance_; //must support negative integers
    }

    struct Token {
        address token_Address_; //this is redundant
        uint256 token_id_; //for nft tokens
        uint token_Stake_Balance_;
        //bool isPausable?
        //bool isPaused?
    }

// Events
    //StakerAdded
        event StakerAdded(
            address indexed StakerAddress,
            uint indexed numberOfStakers
        )
    //TokenAdded
        event TokenAdded(
            address indexed tokenContractAddress,
            address indexed tokenOwner,
            uint256 indexed tokenID
        )
    //newMTPTransfer
        event NewMTPTransfer(
            address indexed tokenContractAddress,
            uint256 indexed tokenID,
            address indexed tokenReceiver,
            address indexed tokenSender
        )
    //TokenTranferPaused
        event TokenTransferPaused(
            uint256 indexed tokenID,
            address indexed tokenHolder
        )
    //TokenTransferUnpaused
        event TokenTransferUnpaused(
            uint256 indexed tokenID,
            address indexed tokenHolder
        )
    //TokenWithdrawn
        event TokenWithdrawal(
            address indexed tokenContractAddress,
            address indexed tokenOwner,
            uint256 indexed tokenID
        )
    //StakerRemoved
        event StakerRemoved(
            address indexed StakerAddress,
            uint indexed numberOfStakers
        )
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
    function addStaker(address stakerAddress_) public {
        balances[stakerAddress_] = 0;
        stakers[stakerAddress_] = Staker(
            {
                staker_Address_: stakerAddress_,
                staker_Stake_Balance_: 0
            }
        );
    }
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

