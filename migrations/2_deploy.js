// const TCST = artifacts.require("TCST");
// const Found = artifacts.require("Found");

// module.exports = async function (deployer) {
//   await deployer.deploy(TCST);
//   const t = await TCST.deployed();

//   await deployer.deploy(Found, t.address);

//   const f = await Found.deployed();

//   await t.changeMinter(f.address);
// };

const CSTokenFactory = artifacts.require("CSTokenFactory");
const Controller = artifacts.require("Controller");

module.exports = async function (deployer) {
  await deployer.deploy(Controller);
  const controller = await Controller.deployed();
  const wallet = "0xEDEd3Ea38AD1d63B74f39c8b0aC81Ad40f955B37";
  await deployer.deploy(CSTokenFactory, 'Test Token', 'TT', controller.address, wallet);
}