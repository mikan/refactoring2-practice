import assert from "assert";
import { Province } from "../02-sample-code-to-test/province.js";
import { sampleProvinceData } from "../02-sample-code-to-test/sample.js";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
