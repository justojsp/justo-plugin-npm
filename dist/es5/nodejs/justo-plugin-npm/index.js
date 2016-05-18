"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugin.npm";
var install, publish;


module.exports = { 
  get install() {
    if (!install) install = (0, _justo.simple)({ ns: NS, name: "install" }, require("./lib/install").default);
    return install;}, 


  get publish() {
    if (!publish) publish = (0, _justo.simple)({ ns: NS, name: "publish" }, require("./lib/publish").default);
    return publish;} };