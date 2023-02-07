import assert from "assert";
import { Province } from "../../../ch04/02-sample-code-to-test/province.js";
import { sampleProvinceData } from "../../../ch04/02-sample-code-to-test/sample.js";

describe("ch04s03 province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
