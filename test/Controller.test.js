const Controller = artifacts.require("Controller");
const CSTokenFactory = artifacts.require("CSTokenFactory");

contract("Controller", (accounts) => {
  let controller;
  const _name = "Token Test";
  const _symbol = "TT";
  beforeEach(async () => {
    controller = await Controller.new();
  });
  describe("Index", () => {
    it("Should list a index with mapping", async () => {
      const index = await controller.index("0");
      assert.equal(index._wallet, "0x0000000000000000000000000000000000000000");
    });
    it("Should add a new index to the mapping", async () => {
      await controller.addIndex(
        "0x0000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000002"
      );
      const index = await controller.index("0");
      assert.equal("0x0000000000000000000000000000000000000001", index._wallet);
      assert.equal(
        "0x0000000000000000000000000000000000000002",
        index._smartContract
      );
    });
    it("Should get every index on the smart contract", async () => {
      await controller.addIndex(
        "0x0000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000002"
      );
      const indexs = await controller.getIndexs();
      assert.equal(indexs.length, 1);
    });
    it("Should remove an index of the smart contract", async () => {
      await controller.addIndex(
        "0x0000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000002"
      );
      await controller.removeIndex("0");
      const indexs = await controller.getIndexs();
      assert.equal(indexs.length, 0);
    });
    it("Should update an index of the smart contract", async () => {
      await controller.addIndex(
        "0x0000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000002"
      );
      await controller.modifyIndex(
        "0",
        "0x0000000000000000000000000000000000000003",
        "0x0000000000000000000000000000000000000004"
      );
      const indexs = await controller.index("0");
      assert.equal(
        indexs._wallet,
        "0x0000000000000000000000000000000000000003"
      );
      assert.equal(
        indexs._smartContract,
        "0x0000000000000000000000000000000000000004"
      );
    });
  });
});
