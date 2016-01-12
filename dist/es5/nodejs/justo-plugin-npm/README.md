[![Build Status](https://travis-ci.org/justojsp/justo-plugin-npm.svg)](https://travis-ci.org/justojsp/justo-plugin-npm)

Simple tasks to run the `npm` command.

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

### publish task

The plugin defines a simple task to publish a package, `publish`. It must be called as follows:

```
publish(opts, folder : string)
publish(opts, config : object)
```

If a `config` parameter is specified, its properties must be:

- `folder` or `dir` (string). The package folder path.
- `who` (string). The user name. If `npm who` is another than the specified one, the task fails.
- `output` (boolean). Show the `npm publish` output: `true`, yep; `false`, nope. Default: `true`.

Example:

```
npm.publish("NPM publication", "./dist/nodejs/mypackage");
npm.publish("NPM publication", {
  who: "myuser",
  folder: "./dist/nodejs/mypackage"
});
```
