//imports
const catalog = require("justo").catalog;
const babel = require("justo-plugin-babel");
const clean = require("justo-plugin-fs").clean;
const copy = require("justo-plugin-fs").copy;
const jslinter = require("justo-plugin-eslint");

//works
const jslint = catalog.simple({
  name: "jslint",
  desc: "Parse best practices and grammar (JavaScript).",
  task: jslinter,
  params: {
    output: true,
    src: [
      "index.js",
      "Justo.js",
      "lib/",
      "test/unit/index.js",
      "test/unit/lib/"
    ]
  }
});

catalog.workflow({name: "build", desc: "Build the package."}, function() {
  jslint("Best practices and grammar (JavaScript)");

  clean("Clean build directory", {
    dirs: ["build/es5"]
  });

  babel("Transpile", {
    comments: false,
    retainLines: true,
    preset: "es2015",
    files: [
      {src: "index.js", dst: "build/es5/"},
      {src: "lib/", dst: "build/es5/"}
    ]
  });

  clean("Clean dist directory", {
    dirs: ["dist/es5"]
  });

  copy(
    "Create package",
    {
      src: "build/es5/index.js",
      dst: "dist/es5/nodejs/justo-plugin-npm/"
    },
    {
      src: "build/es5/lib/",
      dst: "dist/es5/nodejs/justo-plugin-npm/lib"
    },
    {
      src: ["package.json", "README.md"],
      dst: "dist/es5/nodejs/justo-plugin-npm"
    }
  );
});

catalog.macro({name: "test", desc: "Unit test."}, {
  require: "justo-assert",
  src: [
    "test/unit/index.js",
    "test/unit/lib/publish.js"
  ]
});

catalog.macro({name: "default", desc: "Build and test."}, ["build", "test"]);
