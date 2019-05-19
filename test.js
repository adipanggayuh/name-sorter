var assert = require("assert");
var { sortLastName, getLastName } = require("./app");
var dummyArray = [
  "Steve Rogers",
  "Tony Stark",
  "Bruce Banner",
  "Natasha Romanof"
];
var sortedResult = [
  "Bruce Banner",
  "Steve Rogers",
  "Natasha Romanof",
  "Tony Stark"
];
describe("sorted name Test", function() {
  it("should return last name in uppercase", () => {
    assert.equal(getLastName("Robert Junior"), "JUNIOR");
  });
  it("should return array sorted by last name", function() {
    var result = sortLastName(dummyArray);
    result.map((name, i) => {
      assert.equal(name, sortedResult[i]);
      return name;
    });
  });
});
