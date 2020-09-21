const Timelock = artifacts.require("Timelock");
const UnFederalReserveToken = artifacts.require("UnFederalReserveToken");
const MasterUnChairman = artifacts.require("MasterUnChairman");
const MockERC20 = artifacts.require('MockERC20');


const UnFederalReserveMaker = artifacts.require("UnFederalReserveMaker");


module.exports = function(deployer) {
    const twoDays = 172800;

    //DEV account must change to live account keys!@
    const owner = "0xFc633b4776ecc6299eFb597A9C6cfCFbA20Ba398";


    deployer.deploy(Timelock, owner,twoDays);



    //need to update to current block number and Add 6500 * 21
    // TODO!!!!!!!
    const startBlock = 2;
    let _bonusEndBlock = startBlock + 6500 * 28;
    deployer.deploy(UnFederalReserveToken,owner).then(function() {
        return  deployer.deploy(MasterUnChairman, UnFederalReserveToken.address, owner, 100, startBlock, _bonusEndBlock);

    });

    deployer.deploy(MockERC20,'LPToken', 'LP', '10000000000');



};

