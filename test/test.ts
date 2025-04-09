import { assertEquals } from "@std/assert";
import { sha512 } from "../main.ts";

Deno.test(async function nist_sha512() {
  const path = import.meta.url.slice(7, -8);
  const short = await Deno.readTextFile(path + "/nist_short.txt");
  const long = await Deno.readTextFile(path + "/nist_long.txt");
  const nist = short + long;
  for (const step of nist.matchAll(/Len = (\d+)\s+Msg = (\S+)\s+MD = (\S+)/g)) {
    const [step1, step2] = [step[2].slice(0, +step[1] << 1), step[3]].map((Z) =>
      Uint8Array.from(Z.match(/[\da-f]{2}/g) ?? [], (Z) => parseInt(Z, 16))
    );
    assertEquals(sha512(step1), step2);
  }
});
