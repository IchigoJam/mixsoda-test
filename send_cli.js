import { send } from "./send.js";

if (Deno.args.length < 2) {
  console.log("send_cli.js [value] [token] (iccid)")
  Deno.exit(1);
}
const value = Deno.args[0];
const token = Deno.args[1];
const iccid = Deno.args[2];
const res = await send(token, iccid, value);
console.log(res);
