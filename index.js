//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugin.npm";
var install, publish;

//api
module.exports = {
  get install() {
    if (!install) install = simple({ns: NS, name: "install"}, require("./lib/install").default);
    return install;
  },

  get publish() {
    if (!publish) publish = simple({ns: NS, name: "publish"}, require("./lib/publish").default);
    return publish;
  }
};
