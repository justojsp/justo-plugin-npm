[![Build Status](https://travis-ci.org/justojsp/justo-plugin-npm.svg)](https://travis-ci.org/justojsp/justo-plugin-npm)

Plugin for the `npm` command.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-npm
```

## Use

```
const npm = require("justo-plugin-npm");
```

## Tasks

### install task

Install a package:

```
install(opts, pkg : string)
install(opts, config : object)
```

The `config` parameter:

- `pkg` (string). The package name or folder.
- `global` (boolean). Install globally? Default: `false`.
- `output` (boolean). Show the `npm install` output: `true`, yep; `false`, nope. Default: `true`.

Example:

```
const install = require("justo-plugin-npm").install;

install("Install package", {
  pkg: "dist/es5/node/justo-generator-bootstrap/",
  global: true
});
```

### publish task

Publish a package:

```
publish(opts, folder : string)
publish(opts, config : object)
```

The `config` parameter:

- `folder` or `dir` (string). The package folder path.
- `who` (string). The user name. If `npm who` is another than the specified one, the task fails.
- `output` (boolean). Show the `npm publish` output: `true`, yep; `false`, nope. Default: `true`.

Example:

```
const publish = require("justo-plugin-npm").publish;

publish("NPM publication", "./dist/nodejs/mypackage");
publish("NPM publication", {
  who: "myuser",
  folder: "./dist/nodejs/mypackage"
});
```
