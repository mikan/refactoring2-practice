import { expect } from "chai";
import { Province } from "../../../ch04/02-sample-code-to-test/province.js";
import { sampleProvinceData } from "../../../ch04/02-sample-code-to-test/sample.js";

describe("ch04s05 province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("change production", function() {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  })
});
