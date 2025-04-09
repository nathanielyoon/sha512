const IV = /* @__PURE__ */ Uint32Array.from(
  /* @__PURE__ */ "428a2f9871374491b5c0fbcfe9b5dba53956c25b59f111f1923f82a4ab1c5ed5d807aa9812835b01243185be550c7dc372be5d7480deb1fe9bdc06a7c19bf174e49b69c1efbe47860fc19dc6240ca1cc2de92c6f4a7484aa5cb0a9dc76f988da983e5152a831c66db00327c8bf597fc7c6e00bf3d5a7914706ca63511429296727b70a852e1b21384d2c6dfc53380d13650a7354766a0abb81c2c92e92722c85a2bfe8a1a81a664bc24b8b70c76c51a3d192e819d6990624f40e3585106aa07019a4c1161e376c082748774c34b0bcb5391c0cb34ed8aa4a5b9cca4f682e6ff3748f82ee78a5636f84c878148cc7020890befffaa4506cebbef9a3f7c67178f2ca273eced186b8c7eada7dd6f57d4f7f06f067aa0a637dc5113f98041b710b3528db77f532caab7b3c9ebe0a431d67c44cc5d4be597f299c5fcb6fab6c44198cd728ae2223ef65cdec4d3b2f8189dbbcf348b538b605d019af194f9bda6d8118a303024245706fbe4ee4b28cd5ffb4e2f27b896f3b1696b125c71235cf6926949ef14ad2384f25e38b8cd5b577ac9c65592b02756ea6e483bd41fbd4831153b5ee66dfab2db4321098fb213fbeef0ee43da88fc2930aa725e003826f0a0e6e7046d22ffc5c26c9265ac42aed9d95b3df8baf63de3c77b2a847edaee61482353b4cf10364bc423001d0f897910654be30d6ef52185565a9105771202a32bbd1b8b8d2d0c85141ab53df8eeb99e19b48a8c5c95a63e3418acb7763e373d6b2b8a35defb2fc43172f60a1f0ab721a6439ec23631e28de82bde9b2c67915e372532bea26619c21c0c207cde0eb1eee6ed17872176fbaa2c898a6bef90dae131c471b23047d8440c7249315c9bebc9c100d4ccb3e42b6fc657e2a3ad6faec4a4758176a09e667f3bcc908bb67ae8584caa73b3c6ef372fe94f82ba54ff53a5f1d36f1510e527fade682d19b05688c2b3e6c1f1f83d9abfb41bd6b5be0cd19137e2179"
    .match(/.{8}/g)!,
  (Z) => parseInt(Z, 16),
);
const mix = (use: Uint32Array, view: DataView, at: number, to: Uint32Array) => {
  let a = to[1], b = to[2], c = to[3], d = to[4], e, f, g, h, i, j, z = 0;
  do use[z] = view.getUint32(at),
    use[z + 80] = view.getUint32(at + 4),
    at += 8; while (++z < 16);
  do e = use[z - 15],
    f = use[z + 65],
    g = ((f >>> 1 | e << 31) ^ (f >>> 8 | e << 24) ^ (f >>> 7 | e << 25)) >>> 0,
    h = (e >>> 1 | f << 31) ^ (e >>> 8 | f << 24) ^ e >>> 7,
    e = use[z - 2],
    f = use[z + 78],
    use[z + 80] = g += use[z + 64] + use[z + 73] + (((f >>> 19 | e << 13) ^
      (e >>> 29 | f << 3) ^ (f >>> 6 | e << 26)) >>> 0),
    use[z] = h + ((e >>> 19 | f << 13) ^ (f >>> 29 | e << 3) ^ e >>> 6) +
      use[z - 7] + use[z - 16] + (g / 0x100000000 | 0); while (++z < 80);
  let k = to[z = 0], l = to[5], m = to[6], n = to[7], o = to[8], p = to[9];
  let q = to[10], r = to[11], s = to[12], t = to[13], u = to[14], v = to[15];
  do e = (p >>> 9 | o << 23) ^ (o >>> 14 | p << 18) ^ (o >>> 18 | p << 14),
    f = (o >>> 9 | p << 23) ^ (p >>> 14 | o << 18) ^ (p >>> 18 | o << 14),
    i = v + (f >>> 0) + ((p & r ^ ~p & t) >>> 0) + IV[z + 80] + use[z + 80],
    j = e + u + (o & q ^ ~o & s) + IV[z] + use[z] + (i / 0x100000000 | 0) | 0,
    e = (a >>> 2 | k << 30) ^ (a >>> 7 | k << 25) ^ (k >>> 28 | a << 4),
    f = (k >>> 2 | a << 30) ^ (k >>> 7 | a << 25) ^ (a >>> 28 | k << 4),
    g = b & d ^ b & k ^ d & k,
    h = a & c ^ a & l ^ c & l,
    u = s,
    s = q,
    q = o,
    v = t,
    t = r,
    r = p >>> 0,
    p = (i >>> 0) + n,
    o = j + m + (p / 0x100000000 | 0) | 0,
    m = d,
    d = b,
    b = k,
    n = l,
    l = c,
    c = a >>> 0,
    a = (f >>> 0) + (h >>> 0) + (i >>> 0),
    k = (a / 0x100000000 | 0) + e + g + j | 0; while (++z < 80);
  to[0] += k + ((to[1] += a >>> 0) / 0x100000000 | 0);
  to[2] += b + ((to[3] += c) / 0x100000000 | 0);
  to[10] += q + ((to[11] += r) / 0x100000000 | 0);
  to[4] += d + ((to[5] += l) / 0x100000000 | 0);
  to[12] += s + ((to[13] += t) / 0x100000000 | 0);
  to[6] += m + ((to[7] += n) / 0x100000000 | 0);
  to[14] += u + ((to[15] += v) / 0x100000000 | 0);
  to[8] += o + ((to[9] += p >>> 0) / 0x100000000 | 0);
};
/** Hashes with {@link https://w.wiki/KgC | SHA-512}. */
export const sha512 = (message: Uint8Array) => {
  const a = new Uint32Array(IV.subarray(160)), b = new Uint32Array(160);
  const c = new Uint8Array(128), d = message.length;
  let e = new DataView(message.buffer, message.byteOffset), z = 0, y = 0;
  while (z < d) {
    const f = Math.min(128 - y, d - z);
    if (f !== 128) c.set(message.subarray(z, z += f)), y += f;
    else do mix(b, e, z, a), z += 128; while (d - z >= 128);
  }
  e = new DataView(c.buffer), c[y] = 128, 128 - ++y < 16 && mix(b, e, y = 0, a);
  c.fill(0, y), e.setBigUint64(120, BigInt(d) << 3n), mix(b, e, y = 0, a);
  do e.setUint32(y << 2, a[y]); while (++y < 16);
  return new Uint8Array(c.subarray(0, 64));
};
