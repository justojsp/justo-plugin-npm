//imports
import {simple} from "justo";

//internal data
var publish;

//api
export default {
  get publish() {
    if (!publish) publish = simple({ns: "org.justojs.plugin.npm", name: "publish"}, require("./publish"));
    return publish;
  }
};
