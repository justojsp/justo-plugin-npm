"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 






publish;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function publish(params, console) {
  var cmd, args, config, res;


  if (params.length === 0) {
    throw new Error("Expected package name or folder.");} else 
  if (params.length >= 1) {
    if (typeof params[0] == "string") config = { pkg: params[0] };else 
    config = params[0];}


  if (!config.hasOwnProperty("output")) config.output = true;


  if (/^win/.test(_os2.default.platform())) cmd = "npm.cmd";else 
  cmd = "npm";

  args = ["install"];
  if (config.global) args.push("-g");
  args.push(config.pkg);


  res = _child_process2.default.spawnSync(cmd, args);

  if (config.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());


  return res.status;}