/*
broadcast すべてのMixSoda:
POST http://mixsoda.io:2048/(token)

特定のMixSoda:
POST http://mixsoda.io:2048/(token)/(ICCID)
*/
import { i2bin } from "https://js.sabae.cc/binutil.js";

export const postBin = async (url, bin) => {
  const opt = bin ? {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: { "Content-Type": "application/octet-stream" },
    body: bin,
  } : null;
  const res = await (await fetch(url, opt)).text();
  return res;
};

export const send = async (token, iccid, n) => {
  const bin = new Uint8Array(4);
  i2bin(bin, 0, n);
  const url = `http://mixsoda.io:2048/${token}${iccid ? "/" + iccid : ""}`;
  const res = await postBin(url, bin);
  return res;
};
