const Timelock = artifacts.require("Timelock");
const UnFederalReserveToken = artifacts.require("UnFederalReserveToken");
const MasterUnChairman = artifacts.require("MasterUnChairman");
const MockERC20 = artifacts.require('MockERC20');


const UnFederalReserveMaker = artifacts.require("UnFederalReserveMaker");


module.exports = function(deployer) {


    //DEV account must change to live account keys!@
    const owner = "0xFc633b4776ecc6299eFb597A9C6cfCFbA20Ba398";


    deployer.deploy(Timelock, owner,'172800');



    //need to update to current block number and Add 6500 * 21
    // TODO!!!!!!!

    deployer.deploy(UnFederalReserveToken,owner).then(function() {
        return  deployer.deploy(MasterUnChairman, UnFederalReserveToken.address, owner, '100000000000000000000', '10909417', '11090917');

    });




};

