import { expect } from "chai";
import { Province } from "../../../ch04/06-probing-the-boundaries/province.js";

describe("ch04s06 string for producers", function () {
  it("empty", function () {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).equal(30);
  });
});
