//imports
const catalog = require("justo").catalog;
const babel = require("justo-plugin-babel");
const clean = require("justo-plugin-fs").clean;
const copy = require("justo-plugin-fs").copy;
const jshint = require("justo-plugin-jshint");

//works
catalog.workflow({name: "build", desc: "Build the package."}, function() {
  clean("Clean build directory", {
    dirs: ["build/es5"]
  });

  jshint("Best practices", {
    output: true,
    files: [
      "index.js",
      "lib/publish.js",
    ]
  });

  babel("Transpile", {
    comments: false,
    retainLines: true,
    files: {
      "build/es5/index.js": "index.js",
      "build/es5/lib/publish.js": "lib/publish.js"
    }
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

catalog.macro("default", ["build", "test"]);
