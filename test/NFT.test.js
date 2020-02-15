const { accounts, contract } = require('@openzeppelin/test-environment');

const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

const { expect } = require('chai');


const ERC721Mock = contract.fromArtifact('TestNFT');

describe('ERC721', function () {
  const [ creator, owner, other, ...otherAccounts ] = accounts;

  beforeEach(async function () {
    this.token = await ERC721Mock.new({ from: creator });
  });


  describe('internal functions', function () {
    const tokenId = new BN('5042');

    describe('_mint(address, uint256)', function () {

      context('with minted token', async function () {
        beforeEach(async function () {
          await this.token.addMinter(owner, {from: creator});
          ({ logs: this.logs } = await this.token.mint(owner, tokenId, {from: creator}));
        });

        it('emits a Transfer event', function () {
          expectEvent.inLogs(this.logs, 'Transfer', { from: ZERO_ADDRESS, to: owner, tokenId });
        });

        it('creates the token', async function () {
          expect(await this.token.balanceOf(owner)).to.be.bignumber.equal('1');
          expect(await this.token.ownerOf(tokenId)).to.equal(owner);
        });

        it('reverts when adding a token id that already exists', async function () {
          await expectRevert(this.token.mint(owner, tokenId, {from: creator}), 'ERC721: token already minted');
        });
      });
    });
  });
})