const StandardToken = artifacts.require("./StandardToken")
const MATtoken = artifacts.require("./MATtoken");

module.exports = async function(deployer){
    await deployer.deploy(StandardToken);
    await deployer.deploy(MATtoken);
}