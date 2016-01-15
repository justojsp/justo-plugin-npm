//imports
import os from "os";
import child_process from "child_process";

/**
 * Runs babel CLI.
 */
export default function publish(params) {
  var cmd, config, res;

  //(1) arguments
  if (params.length === 0) {
    throw new Error("Expected package folder path.");
  } else if (params.length >= 1) {
    if (typeof(params[0]) == "string") config = {folder: params[0]};
    else config = params[0];
  }

  if (config.dir) config.folder = config.dir;
  if (config.src) config.folder = config.src;

  if (!config.folder) throw new Error("Expected package folder path.");
  if (!config.hasOwnProperty("output")) config.output = true;

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "npm.cmd";
  else cmd = "npm";

  //(3) do we check who?
  if (config.who) {
    let res = child_process.spawnSync(cmd, ["who"]);
    if (res.status) throw new Error(res.stdout.toString());

    if (res.stdout.toString() != config.who + "\n") {
      throw new Error(`'who' must be '${config.who}'. Received: '${res.stdout.toString().replace("\n", "")}'.`);
    }
  }

  //(4) run
  res = child_process.spawnSync(cmd, ["publish", config.folder]);

  if (config.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());

  //(5) return
  return res.status;
}
