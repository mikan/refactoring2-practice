import { expect } from "chai";
import { Province } from "../../../ch04/02-sample-code-to-test/province.js";
import { sampleProvinceData } from "../../../ch04/02-sample-code-to-test/sample.js";

describe("ch04s04 province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
