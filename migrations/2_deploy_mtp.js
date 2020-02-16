const MTP = artifacts.require("./MTP.sol");
const TestNFT = artifacts.require("./TestNFT.sol");
var erc721Instance, mtpInstance

//deploy both mtp and testnft contracts
module.exports = async function(deployer) { 
    await deployer.deploy(TestNFT)
    await deployer.deploy(MTP);
    erc721Instance = await TestNFT.deployed()
    mtpInstance  = await MTP.deployed()
};


//const alice = hardcode accounts[0] from ganache instance
//const bob = hardcode accounts[1] from ganache instance

// this.mtp = await MTP.new();
// this.mtpAddress = await this.mtp.address;
// this.nftokenContract = await NFTContract.new();
// this.nfTokenAddress = await this.nftokenContract.address;
// this.nftokenId = new BN('5042');
// this.nft = await this.nftokenContract.mintUniqueTokenTo(alice, this.nftokenId);
// await this.mtp.depositNonFungibleToken(this.nfTokenAddress, alice, this.nftokenId);



// //examples from tests running in 
// it("should be able to transfer an nft from sender to receiver", async function() {
//   let owner = await this.nftokenContract.ownerOf(this.nftokenId);
//   owner.should.equal(alice);
//   await this.nftokenContract.setApprovalForAll(this.mtpAddress, true, {from: alice});
//   await this.mtp.nfMTPTransfer(this.nfTokenAddress, bob, this.nftokenId, {from: alice});
//   let newOwner = await this.nftokenContract.ownerOf(this.nftokenId);
//   newOwner.should.equal(bob);
// });
// it('should have a mapping called nftokens', async function() {
//   const tokenMapping = await this.mtp.nftokens;
//   tokenMapping.should.to.exist;
// });
// it('should add a Token struct to nftokens mapping when a new token is staked', async function() {
//   await this.nftokenContract.setApprovalForAll(this.mtpAddress, true, {from: alice});
//   await this.mtp.nfMTPTransfer(this.nfTokenAddress, bob, this.nftokenId, {from: alice});
//   const newTokenStruct = await this.mtp.nftokens.call(this.nftokenId);
//   const newTokenId = newTokenStruct.token_id_.toNumber();
//   newTokenId.should.equal(this.nftokenId.toNumber());
// });







//example from James' previous contracts
// module.exports = function(deployer, network, accounts) {
//   if (network == 'rinkeby') {
//     deployer.deploy(ERC20SafeList).then(function() {
//       return deployer.deploy(
//         ERC20Multisig,
//         accounts[1],
//         accounts[0],
//         ERC20SafeList.address,
//         { from: accounts[1] }
//       );
//     });
//   }
// };