//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-plugin-npm");

//suite
suite("API", function() {
  test("install", function() {
    pkg.install.must.be.instanceOf(Function);
    pkg.install.toString().must.contain("runSimpleTask");
  });

  test("publish", function() {
    pkg.publish.must.be.instanceOf(Function);
    pkg.publish.toString().must.contain("runSimpleTask");
  });
})();
