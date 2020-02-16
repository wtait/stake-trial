var ERC20SafeList = artifacts.require('./ERC20SafeList.sol'),
  ERC20Multisig = artifacts.require('./ERC20Multisig.sol');
module.exports = function(deployer, network, accounts) {
  if (network == 'rinkeby') {
    deployer.deploy(ERC20SafeList).then(function() {
      return deployer.deploy(
        ERC20Multisig,
        accounts[1],
        accounts[0],
        ERC20SafeList.address,
        { from: accounts[1] }
      );
    });
  }
};
