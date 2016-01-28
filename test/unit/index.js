//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;

//suite
suite("API", function() {

  test("npm.publish", function() {
    const publish = require("../../dist/es5/nodejs/justo-plugin-npm").publish;

    publish.must.be.instanceOf(Function);
    publish.toString().must.contain("runSimpleTask");
  });
})();
