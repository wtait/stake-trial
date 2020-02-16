var ERC20SafeList = artifacts.require('./ERC20SafeList.sol'),
  WalletFactory = artifacts.require('./WalletFactory.sol');

module.exports = function(deployer, network) {
  if (network == 'development') {
    deployer.deploy(ERC20SafeList).then(function() {
      return deployer.deploy(WalletFactory, ERC20SafeList.address);
    });
  }
};
