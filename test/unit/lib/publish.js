//imports
const path = require("path");
const suite = require("justo").suite;
const test = require("justo").test;
const publish = require("../../../dist/es5/nodejs/justo-plugin-npm/lib/publish").default;

//suite
suite("#publish()", function() {
  const DATA_DIR = "test/unit/data";

  test("publish({}) - folder expected", function() {
    publish.must.raise("Expected package folder path.", [[]]);
  });

  test({name: "publish({who, src}) - unknown npm user", ignore: process.env.TRAVIS == "true"}, function() {
    publish.must.raise(/'who' must be 'unknown'\. Received: '.+'\./, [[{who: "unknown", src: path.join(DATA_DIR, "justo-plugin-xtestx")}]]);
  });

  test({name: "publish({who, src})", ignore: process.env.TRAVIS == "true"}, function() {
    publish([{
      who: "justojs",
      src: path.join(DATA_DIR, "justo-plugin-xtestx")
    }], console);
  });

  test({name: "publish({who, folder, output: false})", ignore: process.env.TRAVIS == "true"}, function() {
    publish([{
      who: "justojs",
      src: path.join(DATA_DIR, "justo-plugin-xtestx"),
      output: false
    }], console);
  });
})();
