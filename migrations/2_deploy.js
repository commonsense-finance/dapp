const TCST = artifacts.require('TCST');
const Found = artifacts.require('Found');

module.exports = async function(deployer) {
    await deployer.deploy(TCST)
    
    const t = await TCST.deployed()
    
    await deployer.deploy(Found, t.address)

    const f = await Found.deployed()

    await t.changeMinter(f.address)
};
