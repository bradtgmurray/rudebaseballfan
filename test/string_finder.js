var expect = require("chai").expect;
var string_finder = require("../string_finder");

describe("Yankee string finder", function() {
  describe("RGB to Hex conversion", function() {
    it("finds yankee in the string", function() {
      expect(string_finder("yankees")).to.be.true;
      expect(string_finder("Yankees")).to.be.true;
      expect(string_finder("Man I really don't like the yankees")).to.be.true;
      expect(string_finder("Yay dingers")).to.be.false;
    });
  });
});
