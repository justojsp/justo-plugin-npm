"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _justo = require(
"justo");


var NS = "org.justojs.plugin.npm";
var publish;exports["default"] = Object.defineProperties(


{}, { 
  publish: { get: function get() {
      if (!publish) publish = (0, _justo.simple)({ ns: NS, name: "publish" }, require("./lib/publish"));
      return publish;}, configurable: true, enumerable: true } });module.exports = exports["default"];
