const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
 let adoption;
 let expectedAdopter;

 before(async () => {
     adoption = await Adoption.deployed();
 });

 describe("adopting a pet and retrieving account addresses", async () => {
   before("adopt a pet using accounts[0]", async () => {
     await adoption.adopt(8, { from: accounts[0] });
     expectedAdopter = accounts[0];
   });
 });
});