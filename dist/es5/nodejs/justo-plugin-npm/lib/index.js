"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _justo = require(
"justo");


var publish;exports["default"] = Object.defineProperties(


{}, { 
  publish: { get: function get() {
      if (!publish) publish = (0, _justo.simple)({ ns: "org.justojs.plugin.npm", name: "publish" }, require("./publish"));
      return publish;}, configurable: true, enumerable: true } });module.exports = exports["default"];
