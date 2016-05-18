//imports
import os from "os";
import child_process from "child_process";

/**
 * Runs babel CLI.
 */
export default function publish(params, console) {
  var cmd, args, config, res;

  //(1) arguments
  if (params.length === 0) {
    throw new Error("Expected package name or folder.");
  } else if (params.length >= 1) {
    if (typeof(params[0]) == "string") config = {pkg: params[0]};
    else config = params[0];
  }

  if (!config.hasOwnProperty("output")) config.output = true;

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "npm.cmd";
  else cmd = "npm";

  args = ["install"];
  if (config.global) args.push("-g");
  args.push(config.pkg);

  //(3) run
  res = child_process.spawnSync(cmd, args);

  if (config.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());

  //(5) return
  return res.status;
}
