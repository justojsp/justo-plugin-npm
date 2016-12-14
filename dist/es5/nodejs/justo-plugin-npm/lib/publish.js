"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default =






publish;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function publish(params, console) {
  var cmd, config, res;


  if (params.length === 0) {
    throw new Error("Expected package folder path.");
  } else if (params.length >= 1) {
    if (typeof params[0] == "string") config = { folder: params[0] };else
    config = params[0];
  }

  if (config.dir) config.folder = config.dir;
  if (config.src) config.folder = config.src;

  if (!config.folder) throw new Error("Expected package folder path.");
  if (!config.hasOwnProperty("output")) config.output = true;


  if (/^win/.test(_os2.default.platform())) cmd = "npm.cmd";else
  cmd = "npm";


  if (config.who) {
    var _res = _child_process2.default.spawnSync(cmd, ["who"]);
    if (_res.status) throw new Error(_res.stdout.toString());

    if (_res.stdout.toString() != config.who + "\n") {
      throw new Error("'who' must be '" + config.who + "'. Received: '" + _res.stdout.toString().replace("\n", "") + "'.");
    }
  }


  res = _child_process2.default.spawnSync(cmd, ["publish", config.folder]);

  if (config.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());


  return res.status;
}