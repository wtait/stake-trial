const MTP = artifacts.require("./MTP.sol");
const TestNFT = artifacts.require("./TestNFT.sol");

module.exports = async function() {
  const m = MTP.at("0x6795B3f0e1361641a35bAA024a36D786E98cEd2C");
  const t1 = TestNFT.at("0x1a6D671E3A845921CBEf04314C549f2ebD31b3B8");
  const t2 = TestNFT.at("0x2fB7a7E67F8Fb7F5a4B2221dA222E705F32FB831");
  const t3 = TestNFT.at("0x5c1031043D5e0bb5f8602A99362C32Eea0c3F7A6");
  const t4 = TestNFT.at("0x688D85D8b0e14Bb7cdc866c50C09d2BC3f8f43F1");
  const t5 = TestNFT.at("0x8EB8c69C9779fce3C9B7e212006895D995f4250D");
  await m.mtpTransfer(
    t1.address,
    "0x21Ea9AAb7b5d74d60919A2B5380ED0349a703445",
    1
  );
  await m.mtpTransfer(
    t2.address,
    "0x21Ea9AAb7b5d74d60919A2B5380ED0349a703445",
    2
  );
  await m.mtpTransfer(
    t3.address,
    "0x21Ea9AAb7b5d74d60919A2B5380ED0349a703445",
    3
  );
  await m.mtpTransfer(
    t4.address,
    "0x21Ea9AAb7b5d74d60919A2B5380ED0349a703445",
    4
  );
  await m.mtpTransfer(
    t5.address,
    "0x21Ea9AAb7b5d74d60919A2B5380ED0349a703445",
    5
  );
};
