
let tokenInstance = await UnFederalReserveToken.deployed();
let chairmanInstance = await MasterUnChairman.deployed();
let mockLPInstance = await MockERC20.deployed();
/*
devpool: 0xbeDfa85AFCe1973A3352ff2a1631826CfB5B485C

0x996e90d4d81a8677CF95cB987A5EB0d2adE3Aca5

0x7e5F578d0E4c43aE5C06A19BFB43A539A8908C87

co
0x4F8804F271831E6DEc099a602B29f02560D0A3A0
 */


//LP test



//chaneg to prod
const devPool = "0xFc633b4776ecc6299eFb597A9C6cfCFbA20Ba398"

//ganeche test account must change!!
//const devPool = "0x6d25919590D105b6229D167f641c81aEfeC55E4c";

const founder1 = "0x996e90d4d81a8677CF95cB987A5EB0d2adE3Aca5";
const founder2 = "0x7e5F578d0E4c43aE5C06A19BFB43A539A8908C87";
const ceoBossManAndAdvisorsResidual = "0x4F8804F271831E6DEc099a602B29f02560D0A3A0";

// initial allocation, so we can add liquidity, payadmisors immediately fair distro
//100 million total
1000|000000000000000000
tokenInstance.mint(devPool, '67000000000000000000000000');
tokenInstance.mint(founder1, '5000000000000000000000000');
tokenInstance.mint(founder2, '5000000000000000000000000');
tokenInstance.mint(ceoBossManAndAdvisorsResidual, '23500000000000000000000000');

const totalSupply4 = await tokenInstance.totalSupply();


const founder1Bal1 = await tokenInstance.balanceOf(founder1);
const founder2Bal2 = await tokenInstance.balanceOf(founder2);
const ceoBossManAndAdvisorsResidualBal = await tokenInstance.balanceOf(ceoBossManAndAdvisorsResidual);
const devPoolBal = await tokenInstance.balanceOf(devPool);
//must do this, so i can no longer mint tokens when we feel like it

const ryanBal = tokenInstance.transferOwnership(chairmanInstance.address);




//=====================================
chairmanInstance.add('100', mockLPInstance.address, true);



await this.lp.approve( mockLPInstance.address, '1000', { from: alice });


await chairmanInstance.deposit(0, '10');

chairmanInstance.poolLength();


chairmanInstance.poolInfo(0);

/*
truffle(ganache)> ryanBal
BN {
  negative: 0,
  words: [ 5000000, <1 empty item> ],
  length: 1,
  red: null
}
 */

//0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
// 1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
// 2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
// 3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
// 4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
// 5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
// 6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47

// 7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
// 8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974

// 9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
// 10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
// 11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28

//must update!!!!!
// 12 eRSDL 0xce84867c3c02b05dc570d0135103d3fb9cc19433


// 13 UNI 0xd3d2e2692501a5c9ca623199d38826e513033a17

chairmanInstance.add('12', "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852", true);
chairmanInstance.add('7', "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc", true);
chairmanInstance.add('7', "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11", true);
chairmanInstance.add('2', "0xf80758ab42c3b07da84053fd88804bcb6baa4b5c", true);



chairmanInstance.add('2', "0xcffdded873554f362ac02f8fb1f02e5ada10516f", true);




chairmanInstance.add('2', "0xab3f9bf1d81ddb224a2014e98b238638824bcf20", true);

chairmanInstance.add('2', "0x43ae24960e5534731fc831386c07755a2dc33d47", true);



chairmanInstance.add('2', "0x88d97d199b9ed37c29d846d00d443de980832a22", true);


chairmanInstance.add('2', "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974", true);

chairmanInstance.add('2', "0xf421c3f2e695c2d4c0765379ccace8ade4a480d9", true);


chairmanInstance.add('2', "0xc5be99a02c6857f9eac67bbce58df5572498f40c", true);
chairmanInstance.add('2', "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28", true);



//eRSDL  MUST CHANGE
chairmanInstance.add('60', "0x48067fea2453f6e79fe585b7a0200ae97ad5d10a", true);






//UNI
//chairmanInstance.add('60', "0xd3d2e2692501a5c9ca623199d38826e513033a17", true);


