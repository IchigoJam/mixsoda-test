import { serve } from "https://deno.land/std@0.153.0/http/server.ts";

const ipv6 = true;
const port = parseInt(Deno.args[1]) || 7001;
const hostname = ipv6 ? "[::]" : "localhost";
console.log(`http://${hostname}:${port}`);

serve(async (req) => {
  try {
    const { pathname } = new URL(req.url);
    const iccid = req.headers.get("x-iccid");
    const time = req.headers.get("x-time");
    console.log(req, pathname, iccid, time);
    if (req.method == "POST") {
      const b = new Uint8Array(await req.arrayBuffer());
      console.log(b);
    } else if (req.method == "GET") { // boxになければ問い合わせがある
      const n = 0;
      const res = new Uint8Array([0, 0, n >> 8, n]);
      //const res = new TextEncoder().encode("IchigoJam"); // 先頭4byteのみ受信可能
      return new Response(res);
    }
    return new Response("ok");
  } catch (e) {
    console.log(e);
  }
}, { hostname, port });
