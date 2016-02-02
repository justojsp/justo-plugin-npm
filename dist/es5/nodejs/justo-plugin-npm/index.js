"use strict";var _justo = require("justo");



var NS = "org.justojs.plugin.npm";
var publish;


module.exports = { 
  get publish() {
    if (!publish) publish = (0, _justo.simple)({ ns: NS, name: "publish" }, require("./lib/publish").default);
    return publish;} };