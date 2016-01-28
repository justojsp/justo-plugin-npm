//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugin.npm";
var publish;

//api
export default {
  get publish() {
    if (!publish) publish = simple({ns: NS, name: "publish"}, require("./lib/publish"));
    return publish;
  }
};
